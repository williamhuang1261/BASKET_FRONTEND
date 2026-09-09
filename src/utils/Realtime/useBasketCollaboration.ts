/**
 * @description Opens a Socket.IO connection to the basket-collaboration
 * relay only when an active `?share=` session id is present, and exposes
 * the room's live presence count plus a small pub/sub surface for relaying
 * per-item changes. See docs/prd-collaborative-editing.md for scope.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { url } from "../../../config/default.json";
import { resolveShareSession } from "./resolveShareSession";

interface ItemChangedMessage {
  itemId: string;
  action: unknown;
}

type ItemChangedListener = (action: unknown) => void;

interface BasketCollaboration {
  /** The active session id, or null when there is no `?share=` param */
  sessionId: string | null;
  /** Number of connected clients in this session, including this one */
  presenceCount: number;
  /** Publishes a local item change to every other client in the session */
  publish: (itemId: string, action: unknown) => void;
  /** Registers a listener for remote changes to one item; returns an unsubscribe function */
  subscribe: (itemId: string, listener: ItemChangedListener) => () => void;
}

/**
 * @param {string} search - a URL's `search` string, defaults to `window.location.search`
 * @returns {BasketCollaboration}
 */
export const useBasketCollaboration = (
  search: string = typeof window !== "undefined" ? window.location.search : "",
): BasketCollaboration => {
  const sessionId = useMemo(() => resolveShareSession(search), [search]);
  const [presenceCount, setPresenceCount] = useState(0);
  const socketRef = useRef<Socket | null>(null);
  const listenersRef = useRef<Map<string, Set<ItemChangedListener>>>(new Map());

  useEffect(() => {
    if (!sessionId) return;

    const socket = io(url, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("join-basket", { basketId: sessionId });
    });

    socket.on("presence", ({ count }: { count: number }) => {
      setPresenceCount(count);
    });

    socket.on("item-changed", ({ itemId, action }: ItemChangedMessage) => {
      const listeners = listenersRef.current.get(itemId);
      listeners?.forEach((listener) => listener(action));
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
      setPresenceCount(0);
    };
  }, [sessionId]);

  const publish = (itemId: string, action: unknown) => {
    if (!sessionId || !socketRef.current) return;
    socketRef.current.emit("item-changed", { basketId: sessionId, itemId, action });
  };

  const subscribe = (itemId: string, listener: ItemChangedListener) => {
    const listeners = listenersRef.current.get(itemId) ?? new Set();
    listeners.add(listener);
    listenersRef.current.set(itemId, listeners);
    return () => {
      listeners.delete(listener);
    };
  };

  return { sessionId, presenceCount, publish, subscribe };
};

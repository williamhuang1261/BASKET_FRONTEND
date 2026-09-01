import { EventServices } from "../../services/serviceList";
import { Variant } from "./assignVariant";

export type ExperimentEventType = "exposure" | "conversion";

/**
 * @description Logs an experiment exposure or conversion to the backend.
 * Fire-and-forget by design: a logging failure should never block or break
 * the screen the shopper is trying to use, so errors are swallowed here
 * rather than surfaced to the caller.
 * @param {string} experimentId
 * @param {Variant} variant
 * @param {ExperimentEventType} eventType
 * @param {string} sessionId
 */
export const logExperimentEvent = (
  experimentId: string,
  variant: Variant,
  eventType: ExperimentEventType,
  sessionId: string,
): void => {
  EventServices.post("", {}, { experimentId, variant, eventType, sessionId }).catch(
    () => {
      // Intentionally silent: see docstring.
    },
  );
};

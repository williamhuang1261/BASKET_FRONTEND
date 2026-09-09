/**
 * @description Shows how many people currently have the same collaborative
 * basket session open. Renders nothing when no session is active - see
 * docs/prd-collaborative-editing.md.
 */
interface Props {
  sessionId: string | null;
  presenceCount: number;
}

const PresenceIndicator = ({ sessionId, presenceCount }: Props) => {
  if (!sessionId) return null;

  return (
    <div className="flex w-fit items-center gap-2 rounded-sm border border-gray-200 px-3 py-1 text-sm text-dark_gray">
      <span className="h-2 w-2 rounded-full bg-green" />
      {presenceCount} {presenceCount === 1 ? "person" : "people"} viewing this
      basket
    </div>
  );
};

export default PresenceIndicator;

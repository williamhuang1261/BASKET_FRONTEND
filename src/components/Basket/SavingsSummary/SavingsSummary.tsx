import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assignVariant, getOrCreateSessionId } from "../../../utils/Experiment/assignVariant";
import { logExperimentEvent } from "../../../utils/Experiment/logExperimentEvent";
import { computeSampleSavings, SAMPLE_MAX_STORES } from "./computeSampleSavings";

export const EXPERIMENT_ID = "savings-summary-framing";

/**
 * @description A small demo screen that runs solveBasket on a fixed
 * synthetic basket and shows the savings in one of two framings, assigned
 * per session by assignVariant: variant A shows a percentage, variant B
 * shows a dollar amount. Fires an "exposure" event on mount and a
 * "conversion" event when the shopper clicks through to the full basket.
 *
 * This is the project's first UI wiring of solveBasket's output (previously
 * library-only). It is deliberately scoped to this one comparison, not the
 * full basket-checkout flow - see docs/prd-ab-testing.md.
 * @returns {JSX.Element}
 */
const SavingsSummary = () => {
  const navigate = useNavigate();
  const sessionId = useMemo(() => getOrCreateSessionId(), []);
  const variant = useMemo(
    () => assignVariant(sessionId, EXPERIMENT_ID),
    [sessionId],
  );
  const savings = useMemo(() => computeSampleSavings(), []);
  const hasLoggedExposure = useRef(false);

  useEffect(() => {
    if (hasLoggedExposure.current) return;
    hasLoggedExposure.current = true;
    logExperimentEvent(EXPERIMENT_ID, variant, "exposure", sessionId);
  }, [variant, sessionId]);

  const handleSeeFullBasket = () => {
    logExperimentEvent(EXPERIMENT_ID, variant, "conversion", sessionId);
    navigate("/basket");
  };

  const message =
    variant === "A"
      ? `You saved ${savings.savingsPercent.toFixed(0)}%`
      : `You saved $${savings.savingsAmount.toFixed(2)}`;

  return (
    <div className="flex flex-col items-center gap-3 rounded-sm border border-gray-200 p-6 shadow-xs">
      <h2 className="text-2xl font-bold">{message}</h2>
      <p className="text-sm text-dark_gray">
        by splitting this basket across {SAMPLE_MAX_STORES} stores instead of
        one
      </p>
      <button
        type="button"
        className="mt-2 w-40 rounded-sm bg-green/50 p-2 font-semibold transition hover:bg-green/80"
        onClick={handleSeeFullBasket}
      >
        See full basket
      </button>
    </div>
  );
};

export default SavingsSummary;

import React from "react";

interface CriteriaProps {
  className?: string;
  successMessage: string;
  criteria: {
    label: string;
    isValid: boolean;
  }[];
}

/**
 * @description Component that displays a list of  criteria and their validation status
 * @param {Object} props - Component props
 * @param {Array<{label: string, isValid: boolean}>} props.criteria - Array of criteria objects with label and validation status
 * @returns {JSX.Element} A list of  criteria with visual validation indicators
 */
const CriteriaBox: React.FC<CriteriaProps> = ({
  className,
  successMessage,
  criteria,
}) => {
  const allValid = criteria.every((criterion) => criterion.isValid);

  return (
    <ul className={className + " " + "list-disc"}>
      {criteria.map(
        (criterion) =>
          !criterion.isValid && (
            <li key={criterion.label} className="text-red-600">
              {criterion.label}
            </li>
          ),
      )}
      {allValid && <li className="text-green">{successMessage}</li>}
    </ul>
  );
};

export default CriteriaBox;

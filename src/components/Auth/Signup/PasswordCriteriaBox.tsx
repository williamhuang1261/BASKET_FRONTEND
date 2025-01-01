import React from "react";

interface PasswordCriteriaProps {
  criteria:{
    label: string;
    isValid: boolean;
  }[]
}

/**
 * @description Component that displays a list of password criteria and their validation status
 * @param {Object} props - Component props
 * @param {Array<{label: string, isValid: boolean}>} props.criteria - Array of criteria objects with label and validation status
 * @returns {JSX.Element} A list of password criteria with visual validation indicators
 */
const PasswordCriteriaBox: React.FC<PasswordCriteriaProps> = ({criteria}) => {
  return (
    <ul className="mx-7 list-disc">
      {criteria.map((criterion, index) => (
        <li
          key={index}
          className={`${criterion.isValid ? "text-green" : "text-red-600"}`}
        >
          {criterion.label}
        </li>
      ))}
    </ul>
  );
};

export default PasswordCriteriaBox;

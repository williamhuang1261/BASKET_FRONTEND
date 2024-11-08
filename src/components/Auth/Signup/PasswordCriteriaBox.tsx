import React from "react";

interface PasswordCriteriaProps {
  criteria:{
    label: string;
    isValid: boolean;
  }[]
}

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

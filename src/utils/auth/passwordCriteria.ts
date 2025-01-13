const passwordCriteria = (password: string, confirmPassword: string, email: string) => {
  const criteria = [
    {
      label: "Contains 8 to 128 characters",
      isValid: password.length >= 8 && password.length <= 128,
    },
    {
      label: "Contains an uppercase letter",
      isValid: /[A-Z]/.test(password),
    },
    {
      label: "Contains a lowercase letter",
      isValid: /[a-z]/.test(password),
    },
    { label: "Contains a number", isValid: /\d/.test(password) },
    {
      label:
        'Contains any of the following special characters: !@#$%^&*(),.?":{}|<>-',
      isValid: /[!@#$%^&*(),.?":{}|<>-]/.test(password),
    },
  ];

  const isSamePassword = [
    {
      label: "Passwords match",
      isValid: password === confirmPassword && password.length > 0,
    },
  ];

  const allValid =
    criteria.every((c) => c.isValid) &&
    isSamePassword[0].isValid &&
    email.length > 0;

  return { criteria, isSamePassword, allValid };

};

export default passwordCriteria;

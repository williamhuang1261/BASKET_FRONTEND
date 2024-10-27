const methToUnit = (method: string) => {
  switch (method) {
    case "volume":
    case "unit":
      return "unit";
    case "weight_100g":
      return "g";
    case "weight_kg":
      return "kg";
    case 'weight_lb':
      return 'lb'
    default:
      return undefined;
  }
};

export default methToUnit
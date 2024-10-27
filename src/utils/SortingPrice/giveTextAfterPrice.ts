const giveTextAfterPrice = (method: string) => {
  switch (method) {
    case "weight_100g":
       return "$ / 100g";
    case "weight_kg":
       return "$ / kg";
    case "weight_lb":
       return "$ / lb";
    case "volume":
    case "unit":
       return "$";
    default:
      return undefined;
  }
};

export default giveTextAfterPrice;
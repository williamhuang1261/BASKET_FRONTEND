import CardProps from "../../../interface/CardProps";

const ShowNormal = ({ suppliers }: CardProps) => {
  const output: {
    supplier: string;
    normalPrice: string;
  }[] = [];
  if (!suppliers || suppliers.length === 0) return undefined;
  for (const sup of suppliers) {
    const { supplier, pricing } = sup;
    const { normal, method } = pricing;

    // Getting the correct measurement
    let textAfterPrice: string;
    switch (method) {
      case "weight_100g":
        textAfterPrice = "$/100g";
        break;
      case "weight_kg":
        textAfterPrice = "$/kg";
        break;
      case "weight_lb":
        textAfterPrice = "$/lb";
        break;
      case "volume":
      case "unit":
      default:
        textAfterPrice = "$";
    }

    output.push({
      supplier: supplier,
      normalPrice: `${normal} ${textAfterPrice}`,
    });
  }

  return output;
};

export default ShowNormal;

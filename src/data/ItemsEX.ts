import image from "../assets/AdExample(1_1).jpg";
import { CardProps } from "../interface/CardProps";

/**
 * Example product items with detailed information including pricing, suppliers, and promotions
 * @type {Array<{
 *   id: string,
 *   name: {fr: string, en: string, size: string},
 *   ref: {standard: string, code: string},
 *   amount: {isApprox: boolean, method: string, units: string, quantity: number},
 *   description: string,
 *   suppliers: Array<{
 *     supplier: string,
 *     pricing: {
 *       normal: number,
 *       method: string,
 *       limited?: Array<{
 *         typeOfRebate: string,
 *         X?: number,
 *         Y?: number,
 *         C: number,
 *         method: string,
 *         start: number,
 *         end: number,
 *         onlyMembers: boolean
 *       }>
 *     }
 *   }>,
 *   image: string,
 *   categories: categoriesType[]
 * }>}
 */
const items: CardProps[] = [
  {
    id: "66f3853cbe017003c58fced5",
    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "45678",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce", "Bio"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 1,
              Y: 10,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 1,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },

              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fced6",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "12345",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 6,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 1,
              Y: 10,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fced7",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "23456",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 36,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 1,
              Y: 25,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 1.0,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fced8",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "34567",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 1,
              Y: 1000000000,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 1,
              Y: 1,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "C",
              C: 0.01,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fced9",

    name: {
      fr: "Pomme avec beaucoup de miel sur le dessus pour l'Halloween",
      en: "Apple with a lot of honey on top for Halloween",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "56789",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fceda",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "7891",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcedb",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "89123",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 10000,
              Y: 1000000,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcedc",

    name: {
      fr: "Pomme",
      en: "An apple a day keeps the doctor away",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "91234",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 999999,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 10000,
              Y: 100000,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcedd",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "54321",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcede",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "4321",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 10000,
              Y: 1000000,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 2.56,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 2.57,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcedf",

    name: {
      fr: "Pomme",
      en: "An apple a day keeps the doctor away",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "32101",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 999999,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 10000,
              Y: 100000,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
    ],
    image: image,
  },
  {
    id: "66f3853cbe017003c58fcee0",

    name: {
      fr: "Pomme",
      en: "Apple",
      size: "S",
    },
    ref: {
      standard: "PLU",
      code: "21012",
    },
    amount: {
      isApprox: true,
      method: "weight",
      units: "g",
      quantity: 250,
    },
    description: {
      en: "An apple a day keeps the doctor away",
      fr: "Une pomme par jour éloigne le médecin pour toujours"
    },
    categories: ["Produce"],
    suppliers: [
      {
        supplier: "Provigo",
        brand: "Sunkiss",
        pricing: {
          normal: 10,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYforC",
              X: 2,
              Y: 1,
              C: 0,
              method: "unit",
              timeframe: {
                start: Date.now(),
                end: Date.now() + 200000000,
              },
              onlyMembers: false,
            },
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "Metro",
        brand: "Selection",
        pricing: {
          normal: 10,
          method: "weight_kg",
          limited: [
            {
              typeOfRebate: "buyXgetYatC",
              X: 5,
              Y: 2,
              C: 1,
              method: "unit",
              timeframe: {
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
              },
              onlyMembers: false,
            },
          ],
        },
      },
      {
        supplier: "IGA",
        brand: "Compliments",
        pricing: {
          normal: 10,
          method: "weight_kg",
        },
      },
    ],
    image: image,
  },
];

export default items;

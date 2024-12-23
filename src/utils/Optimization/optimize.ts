import { Matrix } from "./genMatrix";

interface SetupProp {
  itemRef: {
    code: string;
    standard: string;
  };
  supplier: string;
  cost: number;
}

interface CostOptProp {
  cost: number;
  setup: SetupProp[];
}

type CostProp = CostOptProp[];

const optimize = (
  matrix: Matrix,
  combinations: number[][],
): CostProp => {
  let costTransport: CostProp = [];
  let combCost: number = Infinity;
  // Calculate the price of each combination
  for (const comb of combinations) {
    const setup: SetupProp[] = [];
    let setupCost: number = 0;

    // Getting the best price for each item
    for (const item of matrix) {

      // Skip item if it is not in stock in any suppliers
      if(!item.inStock) continue;

      let itemCost: number = Infinity;
      let comparisonObject: SetupProp[] = [];
      for (const index of comb) {
        const adjIndex = index - 1;
        if (item.opts[adjIndex].cost < itemCost) {
          comparisonObject = [
            {
              itemRef: item.ref,
              supplier: item.opts[adjIndex].supplier,
              cost: item.opts[adjIndex].cost,
            },
          ];
          itemCost = item.opts[adjIndex].cost;
        } else if (item.opts[adjIndex].cost === itemCost && item.opts[adjIndex].cost !== Infinity) {
          comparisonObject.push({
            itemRef: item.ref,
            supplier: item.opts[adjIndex].supplier,
            cost: item.opts[adjIndex].cost,
          });
        }
      }
      setupCost = setupCost + itemCost;
      setup.push(...comparisonObject);
    }
    if(setupCost < combCost) {
      costTransport = [
        {
          cost: setupCost,
          setup: setup
        }
      ];
      combCost = setupCost;
    } else if (setupCost === combCost && setupCost !== Infinity) {
      costTransport.push({
        cost: setupCost,
        setup: setup
      });
    }
  }

  return costTransport;
};

export default optimize;

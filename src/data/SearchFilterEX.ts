import { SearchFilterProps } from "../interface/SearchFilterProps";

/**
 * Example search filter configuration
 * @type {{distance: {amount: number, units: string}, categories: Array, store: Array}}
 */
const searchFilterEX: SearchFilterProps = {
  distance: {
    amount: 10,
    units: 'km'
  },
  categories: [],
  store: [],
}

export default searchFilterEX;
interface SearchFilterProps {
  distance: {
    amount: number,
    units: string
  },
  categories: string[],
  store: string[]
}

export default SearchFilterProps;
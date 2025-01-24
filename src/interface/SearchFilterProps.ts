/**
 * @description Properties for filtering search results by distance, categories, and stores
 * @interface SearchFilterProps
 */
interface SearchFilterProps {
  distance: {
    amount: number,
    units: string
  },
  categories: string[],
  store: string[]
}

export type {SearchFilterProps};
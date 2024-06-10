import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters () {
    const {filters, setFilters} = useContext(FiltersContext)
  
    //Prop drilling esta fncion de filtros la use filters que es hijo de header
    //header es hijo de APP => header => filters (filterproducts)
    const filterProducts = (products) =>{
      return products.filter(product => {
        return(
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    return {filters, filterProducts, setFilters}
  }
  
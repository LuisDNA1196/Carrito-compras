
import { createContext, useState } from "react";

//1 crear contexto este es el que se consume
export const FiltersContext = createContext()

//2 proveer el contexto este nos provee de acceso al contexto
export function FiltersProvider ({ children }){
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={{ //filterscontext de la linea 5 y su propiedad es .Provider
         filters,
         setFilters
        }}
        >
         {children}
        </FiltersContext.Provider>
    )
}
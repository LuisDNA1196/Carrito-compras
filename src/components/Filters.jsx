import {  useId } from 'react' //useid genera identificador unico no recomendable en mapeos, bueno para ids como los de este componente
import { useFilters } from '../hooks/useFilters'


export function Filters () {
    const {filters, setFilters} = useFilters() 


    //Dos fuentes de la verdad, en React solo debes tener 1
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    // console.log(
    //     minPriceFilterId,
    //     categoryFilterId
    //);

    const handleChangeCategory = (event) =>{
        //pasando funcion de acutalizar estado
        //funcion nativa de react a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div className="">
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range"
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select onChange={handleChangeCategory} id={categoryFilterId}>
                    <option value="all">Todo</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}
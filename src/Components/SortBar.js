import React from "react"

function SortBar ({sortChoice, handleSortChoice}){

    return(
    
        <select onChange={handleSortChoice} value={sortChoice} className="form-select mt-3 mb-3">
            <option>SORT BY </option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
        </select>
    )
}
export default SortBar
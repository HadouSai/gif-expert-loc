import { useEffect, useState } from "react"
import { getGiffs } from "../helpers/getGifs";

/**
 * 
 * @param {string} category 
 * @returns 
 */
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        giffs: [],
        loading: true
    })

    // cuando cambia la categorya se ejecuta
    // no pueden ser async por que experan algo sincrono
    useEffect(() => {
        getGiffs(category).then(img => setState({ loading: false, giffs: img }));
    }, [category]);

    return state;
}
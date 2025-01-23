import React from "react";

export function useLocalStorage(key, initialValue){
    const [items, setItems] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(()=>{
        setTimeout(()=>{
            try {                                
                const localStorageItems = localStorage.getItem(key)                 
                let parsedItems;
                if(!localStorageItems){
                    localStorage.setItem(key, JSON.stringify(initialValue))
                    parsedItems = initialValue
                }else{
                    parsedItems = JSON.parse(localStorageItems)
                }
                setItems(parsedItems)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setError(error)
                setLoading(false)
            }
        },2000)
    }, [])

   

    const saveItems = (newItems)=>{
        localStorage.setItem(key,JSON.stringify(newItems))
        setItems(newItems)
    }

    return {items, saveItems, loading, error}
}
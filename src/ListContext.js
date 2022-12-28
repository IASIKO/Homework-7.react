import React, { createContext, useState } from "react"

export const ListContext = createContext()

export const ListProvider = ({children}) => {
    const [list, setList] = useState([])
    const [toggleOut, setToggleOut] = useState(true)
    return <ListContext.Provider value={{list, setList, toggleOut, setToggleOut}}>{children}</ListContext.Provider>
}
import React from "react";

const AppContext = React.createContext();

export function ExtractProvider({ children }) {
    const [items, setItems] = React.useState([]);

    const addToExtract = (res) => {
        setItems((prevState) => [...prevState, res]);
    };

    return (
        <AppContext.Provider value={{ items, addToExtract}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
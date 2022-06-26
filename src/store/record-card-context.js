import React from "react";

const RecordCardContext = React.createContext({
    items: [],
    itemToEdit: {},
    addItem: (item) => {},
    removeItem: (id) => {},
    editItem: (id) => {},
    updateItem: (item) => {},
})

export default RecordCardContext;
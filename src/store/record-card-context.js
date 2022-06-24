import React from "react";

const RecordCardContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
})

export default RecordCardContext;
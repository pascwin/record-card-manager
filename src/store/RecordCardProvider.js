import { useReducer } from "react"

import RecordCardContext from "./record-card-context"

const defaultRecordCardState = {
    items: [
        { id: 1, question: "hola", answer: "hallo", stage: 1, category: "spanisch", due: true },
        { id: 2, question: "bis gleich", answer: "hasta luego", stage: 2, category: "spanisch", due: false }
    ],
}

const recordCardReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item)
        return {
            items: updatedItems
        };
    }
    if (action.type === "REMOVE") {
        let updatedItems;
        updatedItems = state.items.filter(item => {
            return item.id !== action.id;
        })
        return {
            items: updatedItems
        }
    }
    return defaultRecordCardState;
}

const RecordCardProvider = (props) => {
    const [recordCardState, dispatchRecordCardAction] = useReducer(recordCardReducer, defaultRecordCardState);

    const addItemToRecordCardsHandler = (item) => {
        dispatchRecordCardAction({ type: "ADD", item: item })
    }

    const removeItemFromRecordCardsHandler = (id) => {
        dispatchRecordCardAction({ type: "REMOVE", id: id })
    }

    const recordCardContext = {
        items: recordCardState.items,
        addItem: addItemToRecordCardsHandler,
        removeItem: removeItemFromRecordCardsHandler
    }

    return (
        <RecordCardContext.Provider value={recordCardContext}>
            {props.children}
        </RecordCardContext.Provider>
    )
}

export default RecordCardProvider;
import { useReducer } from "react"

import RecordCardContext from "./record-card-context"

const defaultRecordCardState = {
    items: [
        { id: 1, question: "hola", answer: "hallo", stage: "1", category: "spanisch", due: true },
        { id: 2, question: "bis gleich", answer: "hasta luego", stage: "2", category: "spanisch", due: false }
    ],
    itemToEdit: {}
}

const recordCardReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item)
        return {
            items: updatedItems,
            itemToEdit: {}
        };
    }
    if (action.type === "REMOVE") {
        let updatedItems;
        updatedItems = state.items.filter(item => {
            return item.id !== action.id;
        })
        return {
            items: updatedItems,
            itemToEdit: {}
        }
    }
    if (action.type === "EDIT") {
        const itemToUpdate = state.items.filter(item => {
            return item.id === action.id;
        })
        //and also an onRouteChangeT
        return {
            itemToEdit: itemToUpdate[0],
            items: state.items
        }
    } if (action.type === "UPDATE") {
        const existingRecordCardItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        let updatedItems = [...state.items];
        updatedItems[existingRecordCardItemIndex] = action.item;
        return {
            items: updatedItems,
            itemToEdit: {},
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

    const editItemfromRecordCardsHandler = (id) => {
        dispatchRecordCardAction({ type: "EDIT", id: id })
    }

    const updateItemsRecordCardHandler = (item) => {
        dispatchRecordCardAction({type: "UPDATE", item: item})
    }

    const recordCardContext = {
        items: recordCardState.items,
        itemToEdit: recordCardState.itemToEdit,
        addItem: addItemToRecordCardsHandler,
        removeItem: removeItemFromRecordCardsHandler,
        editItem: editItemfromRecordCardsHandler,
        updateItem: updateItemsRecordCardHandler,
    }

    return (
        <RecordCardContext.Provider value={recordCardContext}>
            {props.children}
        </RecordCardContext.Provider>
    )
}

export default RecordCardProvider;
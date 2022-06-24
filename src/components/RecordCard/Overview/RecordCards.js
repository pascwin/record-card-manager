import { useContext } from "react";
import RecordCardContext from "../../../store/record-card-context";

const RecordCards = () => {
    const recordCardCtx = useContext(RecordCardContext)

    const recordCardRemoveHandler = (id) => {
        recordCardCtx.removeItem(id);
    }

    const recordCards = recordCardCtx.items.map(item => {
        return <li key={item.id}>
            <p>
                {item.question}, {item.answer}
            </p>
            <button onClick={recordCardRemoveHandler.bind(null, item.id)}>Remove Card</button>
        </li>
    })

    return (
        <ul>
            {recordCards}
        </ul>
    )
}

export default RecordCards;
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../UI/Card/Card"
import classes from './EditRecordCardForm.module.css';
import Button from '../../UI/Button/Button';
import TextArea from "../../UI/TextArea/TextArea";
import RecordCardContext from "../../../store/record-card-context";


const EditRecordCardForm = () => {
    const recordCardCtx = useContext(RecordCardContext);

    const [question, setQuestion] = useState(recordCardCtx.itemToEdit.question);
    const [answer, setAnswer] = useState(recordCardCtx.itemToEdit.answer);

    const history = useHistory()

    const questionInputHandler = (event) => {
        setQuestion(event.target.value)
    }

    const answerInputHandler = (event) => {
        setAnswer(event.target.value)
    }

    const updateRecordCardItem = (event) => {
        event.preventDefault();
        const updatedItem = {...recordCardCtx.itemToEdit, question: question, answer: answer}
        recordCardCtx.updateItem(updatedItem)
        history.push("/")
    }

    return (
            <Card className={classes.login} header="Edit record card">
                <form onSubmit={updateRecordCardItem}>
                    <div className={classes["textarea-container"]}>
                        <TextArea name="Question" value={question} onChangeTextarea={questionInputHandler}/>
                        <TextArea name="Answer" value={answer} onChangeTextarea={answerInputHandler}/>
                    </div>
                    <div className={classes.actions}>
                        <Button type="submit" className={classes.btn}>Update Card</Button>
                    </div>
                </form>
            </Card>
    );
};

export default EditRecordCardForm;
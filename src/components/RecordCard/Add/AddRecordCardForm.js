import { useContext, useState } from "react";

import Card from "../../UI/Card/Card"
import classes from './AddRecordCardForm.module.css';
import Button from '../../UI/Button/Button';
import TextArea from "../../UI/TextArea/TextArea";
import RecordCardContext from "../../../store/record-card-context";

const AddRecordCardForm = () => {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    const recordCardCtx = useContext(RecordCardContext);

    const questionInputHandler = (event) => {
        setQuestion(event.target.value)
    }

    const answerInputHandler = (event) => {
        setAnswer(event.target.value)
    }

    const addRecordCardItem = (event) => {
        event.preventDefault()
        const newRecordCard = {id: Math.random(), question: question, answer: answer, category: "spanish", stage: "1" }
        recordCardCtx.addItem(newRecordCard)
        setQuestion("");
        setAnswer("")
    }
    return (
            <Card className={classes.login} header="Add a new record card">
                <form onSubmit={addRecordCardItem}>
                    <div className={classes["textarea-container"]}>
                        <TextArea name="Question" value={question} onChangeTextarea={questionInputHandler}/>
                        <TextArea name="Answer" value={answer} onChangeTextarea={answerInputHandler}/>
                    </div>
                    <div className={classes.actions}>
                        <Button type="submit" className={classes.btn}>
                            Add Card
                        </Button>
                    </div>
                </form>

            </Card>
    );
};

export default AddRecordCardForm;
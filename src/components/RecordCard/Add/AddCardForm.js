import Card from "../../UI/Card/Card"
import classes from './AddCardForm.module.css';
import Button from '../../UI/Button/Button';
import TextArea from "../../UI/TextArea/TextArea";

const AddCardForm = () => {

    return (
            <Card className={classes.login} header="Add a new record card">
                <form>
                    <div className={classes["textarea-container"]}>
                        <TextArea name="Question" />
                        <TextArea name="Answer"/>
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

export default AddCardForm;
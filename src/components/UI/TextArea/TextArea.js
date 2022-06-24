import classes from "./Textarea.module.css"

const TextArea = (props) => {
    return (
        <div className={classes.control}>
        <label>{props.name}</label>
            <textarea rows="10" cols="40"> </textarea>
        </div>      
    )
}

export default TextArea;
import { useContext } from "react";

import classes from "./HeaderCartButton.module.css"
import RecordCardContext from "../../store/record-card-context";

const HeaderCartButton = props => {
    const recordCardCtx = useContext(RecordCardContext)
    
    const numberOfRecordCardItems = recordCardCtx.items.length;
    
    return <button className={classes.button} onClick={props.show}>
        <span className={classes.icon}>
        </span>
        <span>
            Total Amount of Card's
        </span>
        <span className={classes.badge}>
            {numberOfRecordCardItems}
        </span>
    </button>
}

export default HeaderCartButton;
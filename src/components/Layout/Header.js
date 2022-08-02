import { Fragment } from "react"
import { Link } from "react-router-dom"

import HeaderCartButton from "./HeaderCartButton"
import classes from "./Header.module.css"

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Palle'sRecordCardManager</h1>
                <Link to="/add-records">Add Record Cards</Link>
                <Link to="/"><HeaderCartButton/></Link>
            </header>
        </Fragment>
    )
}

export default Header;
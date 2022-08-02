import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#220e17",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const RecordsTableRow = (props) => {
    return (
        <StyledTableRow>
            <StyledTableCell>{props.question}</StyledTableCell>
            <StyledTableCell>{props.answer}</StyledTableCell>
            <StyledTableCell align="right">{props.category}</StyledTableCell>
            <StyledTableCell align="right">{props.stage}</StyledTableCell>
            <StyledTableCell align="center">
                <Link to={`/edit-record/${props.id}`}><button onClick={props.edit.bind(null, props.id)}>Edit</button></Link>
                <button onClick={props.remove.bind(null, props.id)}>Delete</button>
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default RecordsTableRow;
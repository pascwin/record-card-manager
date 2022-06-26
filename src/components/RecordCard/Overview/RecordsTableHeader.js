import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
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

const RecordsHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Question</StyledTableCell>
                <StyledTableCell >Answer</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Stage</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export default RecordsHeader;
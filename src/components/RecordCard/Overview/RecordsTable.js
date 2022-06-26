import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import RecordsHeader from './RecordsTableHeader';
import RecordsTableRow from './RecordsTableRow';
import RecordCardContext from '../../../store/record-card-context';

const RecordsTable = () => {

    const recordCardCtx = useContext(RecordCardContext);

    const recordCards = recordCardCtx.items.map((item) => {
        const obj = { id: item.id, question: item.question, answer: item.answer, category: item.category, stage: item.stage }
        return obj
    })

    const recordCardRemoveHandler = (id) => {
        recordCardCtx.removeItem(id);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <RecordsHeader />
                <TableBody>
                    {
                        recordCards.map((card) => {
                            return (
                                <RecordsTableRow
                                    key={card.id}
                                    id={card.id}
                                    question={card.question}
                                    answer={card.answer}
                                    category={card.category}
                                    state={card.stage}
                                    remove={recordCardRemoveHandler}
                                 />
                            )

                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RecordsTable;
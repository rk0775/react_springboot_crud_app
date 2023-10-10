import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getStudents } from '../../apis/student';
import { Pagination, Stack } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function ShowStudentData() {
    const [rows, setRows] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages,setTotalPages] = React.useState(1);

    React.useEffect(() => {
        const init = async () => {
            getStudents(pageNumber).then((res) => {
                console.log(res.students.content);
                setRows(res.students.content);
                setTotalPages(res.totalPages);
            })
        }
        init();
        return () => {

        }
    }, [pageNumber])
    return (
        <>
            <TableContainer component={Paper} mb={2} >
                <h2 className='center gray'>STUDENTS</h2>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell align="left">ADDRESS</TableCell>
                            <TableCell align="left">CITY</TableCell>
                            <TableCell align="left">COUNTRY</TableCell>
                            <TableCell align="left">PINCODE</TableCell>
                            <TableCell align="left">SAT SCORE</TableCell>
                            <TableCell align="left">RESULT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row) => {
                            return (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.address}</TableCell>
                                    <TableCell align="left">{row.city}</TableCell>
                                    <TableCell align="left">{row.country}</TableCell>
                                    <TableCell align="left">{row.pincode}</TableCell>
                                    <TableCell align="left">{row.satScore}</TableCell>
                                    <TableCell align="left" className={row.passed === 'Pass' ? 'text-success' : 'text-error'}>{row.passed}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </TableContainer>
            <div className="right">
                <Stack spacing={2}>
                    <Pagination color="primary" count={totalPages} page={pageNumber} onChange={(e, v) => setPageNumber(v)} />
                </Stack>
            </div>
        </>
    );
}


import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow className="tableHead">
                        <TableCell>Title </TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(row => (
                        <TableRow key={row.title}>
                            <TableCell>
                                {row.title}
                            </TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.priority}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <Link to={{ pathname: '/createTask', state: row }}><TableCell>edit</TableCell></Link>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Home;
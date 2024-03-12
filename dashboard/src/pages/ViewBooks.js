import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import "./ViewBooks.css";


import Navbar from './Navbar';
function ViewBooks() {

    const [books, setbooks] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:1337/viewbook")
            .then((response) => {
                setbooks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching book data:", error);
            });
    }, []);

    return (

        <>
            <Navbar></Navbar>
            <div className="Title">
            <h2 >LIST OF BOOKS INCLUDED</h2>
            </div>
<div className="Table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Book ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Author</TableCell>
                            <TableCell align="center">Publication Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.B}>
                                <TableCell align="center">{book.BookID}</TableCell>
                                <TableCell align="center">{book.Title}</TableCell>
                                <TableCell align="center">{book.Author}</TableCell>
                                <TableCell align="center">{book.PublicationYear}</TableCell>
                   

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>

        </>
    )
}

export default ViewBooks
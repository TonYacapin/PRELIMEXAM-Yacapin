import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from './Navbar';
import axios from 'axios';
import './AddBooks.css'


function AddBooks() {


    const [BookID, setBookID] = useState("");
    const [Title, setTitle] = useState("");
    const [Author, setAuthor] = useState("");
    const [PublicationYear, setPublicationYear] = useState("");

    async function handleAddBook() {
        const BookData = {
            BookID,
            Title,
            Author,
            PublicationYear
        };

        try {
            const addBookResponse = await axios.post("http://localhost:1337/addbook", BookData);

            const result = addBookResponse.data;

            if (result.success) {
                setBookID("");
                setTitle("");
                setAuthor("");
                setPublicationYear("");

                alert(result.message);
            } else {
                alert("Failed to add book");
            }
        } catch (error) {
            console.error("Error adding book:", error);
        }
    }


    return (
        <>
            <Navbar></Navbar>

            <div className="AddBooks">
                <h2>
                    ADD BOOKS
                </h2>

                <div>
                    <TextField
                        label="Book ID"
                        value={BookID}
                        onChange={(e) => setBookID(e.target.value)}
                    >
                    </TextField>
                </div>

                <br></br>
                <div>
                    <TextField
                        label="Title"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </TextField>
                </div>
                <br></br>
                <div>
                    <TextField
                        label="Author"
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                    </TextField>
                </div>
                <br></br>
                <div>
                    <TextField
                        label="Publication Year"
                        value={PublicationYear}
                        onChange={(e) => setPublicationYear(e.target.value)}
                    >
                    </TextField>
                </div>
                <br></br>


                <Button
                    variant='contained' colors='primary' onClick={handleAddBook} >
                    Add Book


                </Button>


            </div>

        </>

    )
}

export default AddBooks
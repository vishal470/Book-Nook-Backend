const router = require("express").Router();
const bookModel = require("../models/booksModel");

//POST Resquest
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: " Book Added Succesfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

//GET REQUEST

router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books })
    } catch (error) {
        console.log(error);
    }
});


//GET REQUEST By ID

router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

//Delete
router.delete("/deleteBook/:id", async (req, res)=> {
    const id = req.params.id;
    try{
        await bookModel
        .findByIdAndDelete(id)
        .then(() => res.status(201).json({ message: "DELETE" }));
    }
    catch(error) {
        console.log(error);
    }
});
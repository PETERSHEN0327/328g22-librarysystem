const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const BorrowRecord = require('../models/BorrowRecord');

// 借阅书籍
router.get('/borrow/:bookId', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const book = await Book.findById(req.params.bookId);
    if (!book || !book.available) {
      return res.send('Book is not available for borrowing');
    }

    const borrowRecord = new BorrowRecord({
      userId: req.session.userId,
      bookId: book._id,
      borrowDate: new Date()
    });
    await borrowRecord.save();

    book.available = false;
    await book.save();

    res.send('Book borrowed successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// 归还书籍
router.get('/return/:bookId', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const book = await Book.findById(req.params.bookId);
    if (!book || book.available) {
      return res.send('Book is not borrowed');
    }

    await BorrowRecord.findOneAndUpdate(
      { userId: req.session.userId, bookId: book._id, returnDate: null },
      { returnDate: new Date() }
    );

    book.available = true;
    await book.save();

    res.send('Book returned successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

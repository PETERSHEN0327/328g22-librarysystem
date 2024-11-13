const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const BorrowRecord = require('../models/BorrowRecord');

// 借阅书籍
router.post('/:bookId', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const book = await Book.findById(req.params.bookId);
    if (!book || !book.available) {
      return res.send('Book is not available for borrowing');
    }

    // 创建新的借阅记录
    const borrowRecord = new BorrowRecord({
      userId: req.session.userId,
      bookId: book._id,
      borrowDate: new Date()
    });
    await borrowRecord.save();

    // 更新书籍的可用状态
    book.available = false;
    await book.save();

// 或者重定向到借阅记录页面
    res.send('Book borrowed successfully'); 
  } catch (error) {
    console.error('Error borrowing book:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 查看借阅记录路由
router.get('/borrowRecords', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    // 查找当前用户的借阅记录，并填充书籍信息
    const borrowRecords = await BorrowRecord.find({ userId: req.session.userId }).populate('bookId');
    const successMessage = req.query.message; // 获取查询参数中的消息
    res.render('borrowRecords', { borrowRecords, successMessage });
  } catch (error) {
    console.error('Error fetching borrow records:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 归还书籍
router.post('/return/:bookId', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const book = await Book.findById(req.params.bookId);
    if (!book || book.available) {
      return res.send('Book is not borrowed');
    }

    // 更新借阅记录的归还日期
    const borrowRecord = await BorrowRecord.findOneAndUpdate(
      { userId: req.session.userId, bookId: book._id, returnDate: null },
      { returnDate: new Date() }
    );

    if (!borrowRecord) {
      return res.send('No active borrow record found for this book');
    }

    // 更新书籍的可用状态
    book.available = true;
    await book.save();

    // 重定向到借阅记录页面，并添加成功消息
    res.redirect('/api/borrow/borrowRecords?message=Book returned successfully');
  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

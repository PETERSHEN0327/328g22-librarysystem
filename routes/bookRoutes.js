const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// 显示书籍列表页面
router.get('/books', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login'); // 检查是否已登录
  }
  
  try {
    const books = await Book.find(); // 从数据库获取书籍数据
    res.render('books', { books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 添加书籍
router.post('/books', async (req, res) => {
  try {
    const { title, author, isbn } = req.body;
    const newBook = new Book({ title, author, isbn, available: true });
    await newBook.save();
    res.send('Book added successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// 更新书籍信息
router.put('/books/:id', async (req, res) => {
  try {
    const { title, author, isbn } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, author, isbn });
    res.send('Book updated successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// 删除书籍
router.delete('/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book deleted successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

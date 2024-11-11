const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// 显示书籍列表页面
router.get('/', async (req, res) => {  // 直接使用 '/'，因为在 server.js 中已经挂载到 '/books'
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
router.post('/', async (req, res) => {  // 直接使用 '/' 路径
  try {
    const { title, author, isbn } = req.body;
    const newBook = new Book({ title, author, isbn, available: true });
    await newBook.save();
    res.redirect('/books'); // 添加书籍后重定向到书籍列表页面
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 更新书籍信息
router.put('/:id', async (req, res) => {  // 使用 '/:id' 路径
  try {
    const { title, author, isbn } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, author, isbn });
    res.send('Book updated successfully');
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 删除书籍
router.delete('/:id', async (req, res) => {  // 使用 '/:id' 路径
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book deleted successfully');
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

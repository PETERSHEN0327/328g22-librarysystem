const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 注册页面路由
router.get('/signup', (req, res) => {
  const errorMessage = req.session.errorMessage || null;
  const successMessage = req.session.successMessage || null;

  // 清除 session 中的消息
  req.session.errorMessage = null;
  req.session.successMessage = null;

  res.render('signup', { errorMessage, successMessage }); // 渲染注册页面，并传递消息
});

// 注册逻辑路由
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 检查用户名是否已存在
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      req.session.errorMessage = 'Username already exists';
      return res.redirect('/signup'); // 重定向到注册页面以显示错误消息
    }

    // 创建新用户
    const newUser = new User({ username, password });
    await newUser.save();

    // 注册成功，将成功消息存储在 session 中
    req.session.successMessage = 'Signup successful! Please log in.';
    res.redirect('/login'); // 注册成功后重定向到登录页面
  } catch (error) {
    console.error('Signup error:', error);
    req.session.errorMessage = 'Internal Server Error';
    res.redirect('/signup');
  }
});

// 登录页面路由
router.get('/login', (req, res) => {
  const successMessage = req.session.successMessage || null;
  const errorMessage = req.session.errorMessage || null;

  // 清除 session 中的消息
  req.session.successMessage = null;
  req.session.errorMessage = null;

  // 渲染登录页面，并传递成功和错误消息
  res.render('login', { successMessage, errorMessage });
});

// 登录逻辑路由
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 检查用户名和密码
    const user = await User.findOne({ username, password });
    if (!user) {
      req.session.errorMessage = 'Invalid username or password';
      return res.redirect('/login'); // 重定向到登录页面以显示错误消息
    }

    // 登录成功，设置 session
    req.session.userId = user._id;
    res.redirect('/dashboard'); // 登录成功后重定向到主页面
  } catch (error) {
    console.error('Login error:', error);
    req.session.errorMessage = 'Internal Server Error';
    res.redirect('/login');
  }
});

// Dashboard 路由
router.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login'); // 如果没有登录，重定向到登录页面
  }

  // 渲染主页面
  res.render('dashboard');
});

// 查看个人信息
router.get('/profile', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const user = await User.findById(req.session.userId);
    res.render('profile', { user });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// 编辑个人信息
router.post('/profile', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  try {
    const { username, password } = req.body;
    await User.findByIdAndUpdate(req.session.userId, { username, password });
    res.send('Profile updated successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// 注销路由
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.redirect('/login'); // 注销成功后重定向到登录页面
  });
});

module.exports = router;

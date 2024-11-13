require('dotenv').config(); 
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// 路由导入
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

// 创建Express应用
const app = express();
const PORT = process.env.PORT || 4000; // 使用 Render 的环境变量 PORT 或默认端口 4000

// 设置视图引擎
app.set('view engine', 'ejs');
app.set('views', './views');

// 配置 express-session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // 注意：开发环境下 secure 应为 false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 连接到 MongoDB 数据库
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// 根路径重定向到登录页面
app.get('/', (req, res) => {
  res.redirect('/login');
});

// 路由配置
app.use('/', userRoutes); // 将 userRoutes 挂载到根路径
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

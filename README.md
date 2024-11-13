Library System

Project Overview
This is a library management system built using Node.js and Express. Users can search, borrow, and return books, while administrators can manage book information.

Project Structure
server.js: The main server file, responsible for configuring routes, middleware, connecting to the database, and starting the server.
package.json: The project's dependency configuration file, listing required npm packages and scripts.
README.md: Provides an overview of the project, file descriptions, cloud URL, and usage instructions.
public: Contains static assets for the front end (e.g., CSS files).
views: Contains EJS templates for generating dynamic HTML pages.
models: Defines Mongoose models for interacting with MongoDB.

Project URL
https://three81g22-librarysystem.onrender.com

Installation and Setup
Clone the repository:
git clone https://github.com/PETERSHEN0327/381g22-librarysystem.git

Navigate to the project directory:
cd 381project-group22

Install dependencies:
npm install

Configure environment variables:
In the project root, create a .env file and set up the MongoDB connection URI and server port:
MONGODB_URI=mongodb+srv://admin:Sqw20020327@cluster0.4u5v6.mongodb.net/projectgroup23library?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

Start the server:
npm start

Function description
Book search: Search by title or author name is supported.
Library management: Administrators can add, edit, and delete book information.
Book borrowing and returning: Users can borrow and return books, and the system will update the status of the book.

Operation guide
After visiting the home page, users can choose to log in or register.
Once logged in, users can browse the list of books in the Library and use the search function to find books.
Click the "Borrow" button to borrow books.
The administrator can Add books through the "Add New Book" button and Edit the book information through the "Edit" button.
The system will automatically update the available status of the book according to user actions.
Check the book information in My Borrow Records and click the "Return" button to return the book.


项目介绍
这是一个基于 Node.js 和 Express 构建的图书管理系统。用户可以通过该系统搜索、借阅、归还图书，管理员可以管理图书信息。

项目文件结构
server.js: 项目主服务器文件，负责配置路由和中间件，连接数据库，并启动服务器。
package.json: 项目的依赖配置文件，包含所需的 npm 包和脚本。
README.md: 项目介绍、文件说明、云端地址和操作指南。
public: 包含前端的静态资源（如 CSS 文件）。
views: 包含 EJS 模板文件，用于生成动态 HTML 页面。
models: 定义 Mongoose 模型，用于与 MongoDB 进行交互。

项目URL
https://three81g22-librarysystem.onrender.com

安装与运行
克隆项目：
git clone https://github.com/PETERSHEN0327/381g22-librarysystem.git

进入项目目录：
cd 381project-group22

安装依赖：
npm install

配置环境变量：
在项目根目录创建一个 .env 文件，配置 MongoDB 连接 URI 和服务器端口：
MONGODB_URI=mongodb+srv://admin:Sqw20020327@cluster0.4u5v6.mongodb.net/projectgroup23library?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

启动服务器：
npm start

功能说明
图书搜索：支持按书名或作者名称进行搜索。
图书管理：管理员可以添加、编辑、删除图书信息。
图书借阅与归还：用户可以借阅和归还图书，系统会更新图书的状态。

操作指南
访问首页后，用户可以选择登录或注册。
登录后，用户可以在Library浏览图书列表，使用搜索功能查找图书。
点击“Borrow”按钮借阅图书.
管理员可通过“Add New Book”按钮添加图书，通过“Edit”按钮编辑图书信息。
系统会自动根据用户操作更新图书的可用状态。
在My Borrow Records中查看借阅图书信息，点击“Return”按钮归还图书。
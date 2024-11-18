Library System

Project Info / 项目信息

Group info / 小组信息:
Group Number / 组号:  Group 22

Members / 成员:
Name: SHEN Qiwen, SID: 13673791
Name: Lau Tak Hing, SID: 13694497
Name: ZHOU Chenyu, SID: 13520854
Name: Wang Yan Qian, SID: 13694589
Name: Chan Chung Kit, SID: 

Project File Intro / 项目文件介绍
server.js: A brief summary of functionalities it provided / 功能简述

Provides server configuration, route handling, session management, and middleware setup. / 提供服务器配置、路由处理、会话管理和中间件设置。
package.json: Lists of dependencies / 依赖列表

Includes libraries like Express for server handling, Mongoose for MongoDB connection, and others needed for application functionality. / 包含 Express、Mongoose 等库，以处理服务器和 MongoDB 连接。
public (folder): Static files included / 静态文件

Contains styles, scripts, and other static assets such as CSS files. / 包含 CSS 文件等静态资源。
views (folder): EJS or UI files included / 界面文件

Contains EJS templates used for rendering dynamic pages, including books.ejs, borrowRecords.ejs, dashboard.ejs, login.ejs, and signup.ejs. / 包含用于渲染动态页面的 EJS 模板，如 books.ejs、borrowRecords.ejs、dashboard.ejs、login.ejs 和 signup.ejs。
models (folder): Model files included / 模型文件

Book.js: Defines the schema for books, including title, author, ISBN, availability, etc. / 定义书籍的数据库模式，包含书名、作者、ISBN、可用性等。
BorrowRecord.js: Defines the schema for borrow records, tracking book borrowing and returning. / 定义借阅记录的数据库模式，用于跟踪书籍的借出和归还。
User.js: Defines the schema for users, managing login details, sessions, etc. / 定义用户的数据库模式，管理登录信息、会话等。


 Cloud-based Server URL / 云端服务器 URL
Example / 示例:
https://three81g22-librarysystem.onrender.com

Installation and Setup
Clone the repository:
git clone https://github.com/PETERSHEN0327/381g22-librarysystem.git

Install dependencies:
npm install

Configure environment variables:
In the project root, create a .env file and set up the MongoDB connection URI and server port:
MONGODB_URI=mongodb+srv://admin:Sqw20020327@cluster0.4u5v6.mongodb.net/projectgroup23library?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

Start the server:
npm start

Operation Guides / 操作指南
The use of Login/Logout pages / 登录/注销页面的使用
Login:
URL: /login
Users input valid credentials to log in. Upon successful login, users are redirected to the dashboard. / 用户输入有效凭据登录。登录成功后，将重定向至仪表板。

Logout:
URL: /logout
Logs the user out and redirects to the login page. / 注销用户并重定向至登录页面。

The use of your CRUD web pages / CRUD 页面使用
Create (Add Book):
Button: "Add New Book" button in books.ejs
Description: Allows users to add new books to the library database. / 允许用户将新书添加到图书馆数据库。

Read (View Books):
Button/UI: "Search","Show All Books"button in books.ejs; Book list in books.ejs
Description: Displays a list of available books. Users can search by title or author. / 显示可用书籍的列表。用户可以按书名或作者搜索。

Update (Edit Book):
Button: "Edit" button next to each book entry in books.ejs
Description: Allows users to edit book details, such as title, author, ISBN, and availability. / 允许用户编辑书籍详情，如书名、作者、ISBN 和可用性。

Delete (Remove Book):
Button: "Delete" button next to each book entry in books.ejs
Description: Allows users to delete books from the library database. / 允许用户从图书馆数据库中删除书籍。

The use your RESTful CRUD services / RESTful CRUD 服务
List of APIs / API 列表:
Login: POST /api/login
Register: POST /api/register
Borrow Book: POST /api/borrow/:bookId
Return Book: POST /api/borrow/return/:bookId
View Borrow Records: GET /api/borrow/borrowRecords
Search Books: POST /api/books/read
Add Book: POST /api/books/create
Update Book: PUT /api/books/:id
Delete Book: DELETE /api/books/:id

HTTP Request Types / HTTP 请求类型:
GET: Used for retrieving resources, such as viewing books and borrow records. / 用于检索资源，如查看书籍和借阅记录。
POST: Used for creating new records, such as adding books or borrowing books. / 用于创建新记录，如添加书籍或借阅书籍。
PUT: Used for updating existing records, such as editing book details. / 用于更新现有记录，如编辑书籍详情。
DELETE: Used for deleting records, such as removing books. / 用于删除记录，如删除书籍。

Path URI and CURL Testing Commands / 路径 URI 和 CURL 测试命令:
Login:
curl -X POST http://localhost:3000/api/login -d "username=user&password=pass"
Register:
curl -X POST http://localhost:3000/api/register -d "username=user&password=pass"
Borrow Book:
curl -X POST http://localhost:3000/api/borrow/12345
Return Book:
curl -X POST http://localhost:3000/api/borrow/return/12345
Add Book:
curl -X POST http://localhost:3000/api/books/create -d "title=NewBook&author=AuthorName"
Update Book:
curl -X PUT http://localhost:3000/api/books/12345 -d "title=UpdatedBook"
Delete Book:
curl -X DELETE http://localhost:3000/api/books/12345







Project name：Library System

Group info
S381F GROUP22
SHEN Qiwen 13673791
Lau Tak Hing 13694497
ZHOU Chenyu 13520854
Chan Chung Kit 
Wang Yan Qian 13694589

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
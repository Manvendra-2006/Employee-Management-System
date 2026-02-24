<div align="center">

# 👨‍💼 Employee Management System

### A modern, role-based task management system built with React.js
*Manage employees, assign tasks, and track progress — all in one place.*

![Language](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![Bundler](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite)
![Type](https://img.shields.io/badge/Type-Personal%20Project-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

### 🌐 [Live Demo — Click Here](https://employee-management-system-sqbl.vercel.app/)

</div>

---

## 📌 About This Project

**Employee Management System** is a React.js based web application that provides a complete task management solution with two separate role-based dashboards — one for **Admins** and one for **Employees**. Admins can create and assign tasks, while employees can view and manage their assigned work in real time.

---

## ✨ Features

### 🛡️ Admin Dashboard
- ➕ **Create New Tasks** — Assign tasks to any employee with title, category, and due date
- 📊 **Overview** — See all employees and their task status at a glance

### 👤 Employee Dashboard
- 📋 **Task Summary Cards** — Quick count of:
  - 🟡 New Tasks
  - 🔵 Active Tasks
  - ✅ Completed Tasks
  - ❌ Failed Tasks
- 📝 **Detailed Task List** — Each task shows:
  - 📌 Title
  - 🏷️ Category
  - 📅 Due Date
  - 🔖 Status — `New` / `Active` / `Completed` / `Failed`

---

## 🖥️ Screenshots

> *(Add your screenshots here)*
```
Admin Dashboard    →  /screenshots/admin-dashboard.png
Employee Dashboard →  /screenshots/employee-dashboard.png
```

---

## 📁 Folder Structure

```
EMS/
│
├── src/
│   ├── Auth/
│   │   └── Login.jsx
│   │
│   ├── AuthContext/
│   │   └── AuthProvider.jsx
│   │
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   │
│   ├── TaskList/
│   │   ├── AcceptTask.jsx
│   │   ├── Completed.jsx
│   │   ├── FailedTask.jsx
│   │   └── NewTask.jsx
│   │
│   ├── Utilis/
│   │   └── LocalStorage.jsx
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── others/
│   │   ├── AllTask.jsx
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   ├── TaskCountBox.jsx
│   │   └── TaskList.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```



---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Manvendra-2006/Employee-Management-System.git

# Navigate to project folder
cd Employee-Management-System

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | admin@me.com | 123 |
| 👤 Employee | employee@1example.com | 123 |

> *(Update these with your actual credentials)*

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| ⚛️ React.js | Frontend UI |
| ⚡ Vite | Build Tool & Dev Server |
| 🎨 Tailwind CSS / CSS | Styling |
| 📦 Context API | State Management |
| 💾 Local Storage | Data Persistence |

---

## 🔮 Future Improvements

- [ ] Backend integration with Node.js & MongoDB
- [ ] Real-time notifications
- [ ] Employee attendance tracking
- [ ] Salary management module
- [ ] Export reports as PDF

---

## 👨‍💻 Developer

<div align="center">

**Made with ❤️ by Manvendra**

[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-yellow?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/Manvendra-2006)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-Profile-darkgreen?style=for-the-badge&logo=geeksforgeeks)](https://www.geeksforgeeks.org/profile/manvendrabi3gd)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/Manvendra-2006)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)

</div>

---

<div align="center">

### ⭐ If you liked this project, please give it a star!
*It motivates me to build more cool stuff.* 🚀

</div>

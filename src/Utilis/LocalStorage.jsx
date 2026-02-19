export const employees = [
  {
    id: "EMP001",
    name: "Amit Sharma",
    email: "amit@company.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskCategory: "Design",
        taskTitle: "Login Page UI",
        taskDescription: "Create responsive login page design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskAssignDate: "2026-02-10",
        taskDeadline: "2026-02-20"
      },
      {
        taskCategory: "Bug Fix",
        taskTitle: "Navbar Issue",
        taskDescription: "Fix alignment issue in navbar",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskAssignDate: "2026-02-08",
        taskDeadline: "2026-02-18"
      },
      {
        taskCategory: "Testing",
        taskTitle: "Form Validation",
        taskDescription: "Test login form validation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskAssignDate: "2026-02-05",
        taskDeadline: "2026-02-12"
      },
      {
        taskCategory: "Backend",
        taskTitle: "API Error",
        taskDescription: "Fix 500 error in login API",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskAssignDate: "2026-02-01",
        taskDeadline: "2026-02-07"
      }
    ]
  },

  {
    id: "EMP002",
    name: "Priya Verma",
    email: "priya@company.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskCategory: "Frontend",
        taskTitle: "Dashboard UI",
        taskDescription: "Create admin dashboard UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskAssignDate: "2026-02-12",
        taskDeadline: "2026-02-25"
      },
      {
        taskCategory: "Testing",
        taskTitle: "API Testing",
        taskDescription: "Test user API endpoints",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskAssignDate: "2026-02-09",
        taskDeadline: "2026-02-19"
      },
      {
        taskCategory: "Deployment",
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to production",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskAssignDate: "2026-02-02",
        taskDeadline: "2026-02-10"
      },
      {
        taskCategory: "Design",
        taskTitle: "Profile Page",
        taskDescription: "Design user profile page",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskAssignDate: "2026-01-20",
        taskDeadline: "2026-01-30"
      }
    ]
  },

  {
    id: "EMP003",
    name: "Rahul Singh",
    email: "rahul@company.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        taskCategory: "Backend",
        taskTitle: "User Authentication",
        taskDescription: "Implement JWT authentication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskAssignDate: "2026-02-14",
        taskDeadline: "2026-02-28"
      },
      {
        taskCategory: "Database",
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB query performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskAssignDate: "2026-02-05",
        taskDeadline: "2026-02-15"
      },
      {
        taskCategory: "Bug Fix",
        taskTitle: "Session Timeout",
        taskDescription: "Fix session auto logout issue",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskAssignDate: "2026-02-03",
        taskDeadline: "2026-02-12"
      },
      {
        taskCategory: "Security",
        taskTitle: "Password Encryption",
        taskDescription: "Encrypt user passwords",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskAssignDate: "2026-01-30",
        taskDeadline: "2026-02-08"
      }
    ]
  },
  {
  id: "EMP004",
  name: "Sneha Kapoor",
  email: "sneha@company.com",
  password: "123",

  taskCount: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 1
  },

  tasks: [
    {
      taskCategory: "UI/UX",
      taskTitle: "Landing Page Redesign",
      taskDescription: "Redesign company landing page with modern layout",
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskAssignDate: "2026-02-15",
      taskDeadline: "2026-03-01"
    },
    {
      taskCategory: "Frontend",
      taskTitle: "Responsive Fixes",
      taskDescription: "Fix mobile responsiveness issues",
      active: true,
      newTask: false,
      completed: false,
      failed: false,
      taskAssignDate: "2026-02-12",
      taskDeadline: "2026-02-22"
    },
    {
      taskCategory: "Testing",
      taskTitle: "Cross Browser Testing",
      taskDescription: "Test website on different browsers",
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskAssignDate: "2026-02-05",
      taskDeadline: "2026-02-14"
    },
    {
      taskCategory: "Bug Fix",
      taskTitle: "Footer Alignment",
      taskDescription: "Fix footer alignment issue",
      active: false,
      newTask: false,
      completed: false,
      failed: true,
      taskAssignDate: "2026-01-28",
      taskDeadline: "2026-02-05"
    }
  ]
}

]

export const admin = [
  {
    id: "ADM001",
    email: "admin@company.com",
    password: "123"
  }
]
export function getlocalstorage(){
  const employee = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
    return {employee ,admin}
    
}


 export function setlocalstorage(){
  if(!localStorage.getItem('employees')){
        localStorage.setItem('employees',JSON.stringify(employees))
  }
  if(!localStorage.getItem('admin')){
    localStorage.setItem('admin',JSON.stringify(admin))
  }
}
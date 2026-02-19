import React, { useState } from 'react'

const CreateTask = () => {
    const [tasktittle, settasktittle] = useState('')
    const [taskdescription, settaskdescription] = useState('')
    const [taskCategory, settaskCategory] = useState('')
    const [taskassign, settaskassign] = useState('')
    const [AssignDate, setAssignDate] = useState('')
    const [CompletedDate, setCompletedDate] = useState('')

    function TaskHandler(event) {
        event.preventDefault()

        const taskObj = {
            taskCategory,
            taskdescription,
            tasktittle,
            AssignDate,
            CompletedDate
        }

        const data = JSON.parse(localStorage.getItem('employees')) || []

        const updatedData = data.map((elem) => {
            if (taskassign.trim().toLowerCase() === elem.name.toLowerCase()) {
                return {
                    ...elem,
                    tasks: [...(elem.tasks || []), taskObj],
                    taskCount: {
                        ...elem.taskCount,
                        newTask: (elem.taskCount?.newTask || 0) + 1
                    }
                }
            }
            return elem
        })

        localStorage.setItem('employees', JSON.stringify(updatedData))

        settasktittle('')
        settaskdescription('')
        settaskCategory('')
        settaskassign('')
        setAssignDate('')
        setCompletedDate('')
    }

    const inputStyle = {
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
        width: "100%"
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg,#667eea,#764ba2)"
        }}>

            <form onSubmit={TaskHandler}
                style={{
                    width: "900px",
                    padding: "40px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(15px)",
                    display: "flex",
                    gap: "40px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    color: "white"
                }}
            >

                {/* Left Section */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>

                    <h2 style={{ marginBottom: "10px" }}>Create New Task 🚀</h2>

                    <div>
                        <label>Task Title</label>
                        <input
                            value={tasktittle}
                            onChange={(e) => settasktittle(e.target.value)}
                            type="text"
                            placeholder="Enter Task Title"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label>Assign To</label>
                        <input
                            value={taskassign}
                            onChange={(e) => settaskassign(e.target.value)}
                            type="text"
                            placeholder="Enter Employee Name"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label>Task Category</label>
                        <input
                            value={taskCategory}
                            onChange={(e) => settaskCategory(e.target.value)}
                            type="text"
                            placeholder="Development / Design"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label>Assign Date</label>
                        <input
                            value={AssignDate}
                            onChange={(e) => setAssignDate(e.target.value)}
                            type="date"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label>Completion Deadline</label>
                        <input
                            value={CompletedDate}
                            onChange={(e) => setCompletedDate(e.target.value)}
                            type="date"
                            style={inputStyle}
                        />
                    </div>

                </div>

                {/* Right Section */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <label>Task Description</label>
                        <textarea
                            value={taskdescription}
                            onChange={(e) => settaskdescription(e.target.value)}
                            rows={12}
                            placeholder="Describe the task..."
                            style={{
                                ...inputStyle,
                                resize: "none"
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "12px",
                            borderRadius: "12px",
                            border: "none",
                            background: "linear-gradient(135deg,#ff512f,#dd2476)",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "700",
                            cursor: "pointer",
                            marginTop: "auto",
                            transition: "0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    >
                        Create Task
                    </button>

                </div>

            </form>
        </div>
    )
}

export default CreateTask

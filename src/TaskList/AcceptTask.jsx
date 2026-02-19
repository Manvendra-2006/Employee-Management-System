import React from 'react'

const AcceptTask = ({ data }) => {

  if (!data) return null

  return (
    <div style={cardStyle("#007bff")}>

      <div style={headerStyle}>
        <button style={buttonStyle("#007bff")}>{data.taskCategory}</button>
        <div>
          <div>Assign: {data.taskAssignDate}</div>
          <div>Deadline: {data.taskDeadline}</div>
        </div>
      </div>

      <div>
        <h3>{data.taskTitle}</h3>
        <p>{data.taskDescription}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={buttonStyle("green")}>Completed</button>
        <button style={buttonStyle("red")}>Failed</button>
      </div>

    </div>
  )
}

export default AcceptTask
const cardStyle = (borderColor) => ({
  borderRadius: "1rem",
  height: "260px",
  width: "300px",
  border: `3px solid ${borderColor}`,
  padding: "1rem",
  flexShrink: "0",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
})

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const buttonStyle = (bg) => ({
  padding: "6px 10px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: bg,
  color: "white",
  fontWeight: "600"
})

import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthProvider'

const AllTask = () => {
    const data = useContext(AuthContext)

    return (
        <div style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center"
        }}>

            <div style={{
                width: "1000px",
                background: "white",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}>

                <h2 style={{
                    marginBottom: "20px",
                    fontWeight: "800",
                    color: "#333"
                }}>
                    Employee Task Overview 📊
                </h2>

                <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center"
                }}>

                    <thead>
                        <tr style={{
                            background: "linear-gradient(135deg,#667eea,#764ba2)",
                            color: "white"
                        }}>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Active</th>
                            <th style={thStyle}>Completed</th>
                            <th style={thStyle}>New</th>
                            <th style={thStyle}>Failed</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.employee?.map((item, index) => (
                            <tr
                                key={index}
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    transition: "0.3s"
                                }}
                                onMouseOver={(e) =>
                                    e.currentTarget.style.background = "#f5f5f5"
                                }
                                onMouseOut={(e) =>
                                    e.currentTarget.style.background = "white"
                                }
                            >
                                <td style={tdStyle}>{item.name}</td>
                                <td style={tdStyle}>{item.taskStats.accepted}</td>
                                <td style={tdStyle}>{item.taskStats.completed}</td>
                                <td style={tdStyle}>{item.taskStats.new}</td>
                                <td style={tdStyle}>{item.taskStats.failed}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

const thStyle = {
    padding: "12px",
    fontWeight: "700"
}

const tdStyle = {
    padding: "12px",
    fontWeight: "500"
}

export default AllTask

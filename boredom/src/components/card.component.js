import React from 'react'


export default function Card({button, title,onDelete}) {
    return (
        <div className="container mt-3" style={{width:"300px",margin:"0"}}> 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a onClick={(id)=>onDelete(button.id)} className="btn btn-primary">Remove</a>
                </div>
                </div>
        </div>
    )
}

import React from 'react'

export default function GuaranteesBox(props) {
    return (
        <div className="col-md-6">
            <div className="guarantees-item">
            <img src={props.imgUrl} alt="" />
            <h3 className="guarantees-header">
            {props.header}
            </h3>
            <p className="guarantees-title">
            {props.title}
            </p>
            </div>
        </div>
    )
}

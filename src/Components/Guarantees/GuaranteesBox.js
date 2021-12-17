import React from 'react'

<<<<<<< HEAD
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
=======
export default function GuaranteesBox({imgUrl,header,title,toggled}) {
    return (
        <div className="col-md-6">
            <div className="guarantees-item">
            <img src={imgUrl} alt="" />
            <h3 className={`guarantees-header${toggled ? "" : " text-dark-main"}`}>
            {header}
            </h3>
            <p className={`guarantees-title${toggled ? "" : " text-second-dark"}`}>
            {title}
>>>>>>> 12e087d3533f4a8192aa5d9a0a5352c5a08ba5dc
            </p>
            </div>
        </div>
    )
}

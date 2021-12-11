import React from 'react'

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
            </p>
            </div>
        </div>
    )
}

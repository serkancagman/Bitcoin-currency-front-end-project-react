import React from 'react'

export const ServiceItem = ({serviceIcon,serviceHeader,serviceInfo}) => {
    return (
        <div className="col-md-6">
            <div className="services d-flex">
              <img className="img-fluid service-icon" src={serviceIcon} alt="" />
              <div className="service-inner">
                <h3 className="service-header">{serviceHeader}</h3>
                <p className="service-info">
                  {serviceInfo}
                </p>
              </div>
            </div>
          </div>
    )
}

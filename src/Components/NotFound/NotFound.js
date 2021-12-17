import Logo from "../../images/main-logo.png";
import "./notfound.css";
export const NotFound = () => {
  return (
    <section className="not-found">
      <div className="error-main">
      <div className="error-layout">
      
      
        <div className="container-lg">
          <div className="col-lg-12 text-center">
            <div className="area-404 mx-auto py-5 text-center">
              <img width={125} src={Logo} alt="" />
              <h1 className="main-error-text py-3">404</h1>
              <h3 className="oops py-3">OOPS ! ... PAGE NOT FOUND</h3>
              <p className="found-info py-3">
                THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS
                NAME CHANGED, OR IS TEMPORARILY UNAVAILABLE.
              </p>
              <a className="return-home" href="/">
                HOMEPAGE
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

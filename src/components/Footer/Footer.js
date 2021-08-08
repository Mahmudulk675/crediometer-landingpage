import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper ">
        <footer
          style={{ backgroundColor: "rgb(31, 31, 28)" }}
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Stay connected with Crediometer</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Crediometer
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, deserunt? Quisquam voluptatibus error sequi
                    architecto ratione libero aliquid dolore? Quia?
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset text-muted">
                      Credio reader
                    </a>
                  </p>
                </div>
                {/*  */}

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      FAQ
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      Customers
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                  <p className="mb-1 ">
                    <a href="#!" className="text-reset">
                      about
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              Crediometer
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

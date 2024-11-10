// import { useState } from 'react'

function Login() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-xxl">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 mx-auto">
                  <div className="card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                      <div className="text-center p-3">
                        <a href="index.html" className="logo logo-admin">
                          <img
                            src="assets\images\logo-sm.png"
                            height="50"
                            alt="logo"
                            className="auth-logo"
                          />
                        </a>
                        <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                          Let's Get Started Rizz
                        </h4>
                        <p className="text-muted fw-medium mb-0">
                          Sign in to continue to Rizz.
                        </p>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <form className="my-4" action="index.html">
                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="userpassword">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="userpassword"
                            placeholder="Enter password"
                          />
                        </div>

                        <div className="form-group row mt-3">
                          <div className="col-sm-6">
                            <div className="form-check form-switch form-switch-success">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="customSwitchSuccess"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customSwitchSuccess"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 text-end">
                            <a
                              href="auth-recover-pw.html"
                              className="text-muted font-13"
                            >
                              <i className="dripicons-lock"></i> Forgot
                              password?
                            </a>
                          </div>
                        </div>

                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid mt-3">
                              <button className="btn btn-primary" type="button">
                                Log In{" "}
                                <i className="fas fa-sign-in-alt ms-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="text-center  mb-2">
                        <p className="text-muted">
                          Don't have an account ?{" "}
                          <a
                            href="auth-register.html"
                            className="text-primary ms-2"
                          >
                            Free Resister
                          </a>
                        </p>
                        <h6 className="px-3 d-inline-block">Or Login With</h6>
                      </div>
                      <div className="d-flex justify-content-center">
                        <a
                          href=""
                          className="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2"
                        >
                          <i className="fab fa-facebook align-self-center"></i>
                        </a>
                        <a
                          href=""
                          className="d-flex justify-content-center align-items-center thumb-md bg-info-subtle text-info rounded-circle me-2"
                        >
                          <i className="fab fa-twitter align-self-center"></i>
                        </a>
                        <a
                          href=""
                          className="d-flex justify-content-center align-items-center thumb-md bg-danger-subtle text-danger rounded-circle"
                        >
                          <i className="fab fa-google align-self-center"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

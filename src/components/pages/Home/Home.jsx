import React from "react";
import Layout from "../../layouts/Layout";
import screenshot from "../../../assets/spam5.png"; 

const Home = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#f1f3f5", 
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1rem",
        }}
      >
        <div className="text-center p-5 rounded-4" style={{ maxWidth: "900px", width: "100%" }}>
          <h1 className="display-4 fw-bold text-body-emphasis">Welcome to Spam Detector</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
              Protect yourself from unwanted messages! Our Spam Detection system helps
              you identify and filter spam SMS to keep your inbox clean and secure.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
                What is Spam SMS?
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Check Spam SMS
              </button>
            </div>
          </div>

          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
              <img
                src={screenshot}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Screenshot"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;


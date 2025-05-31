




import Layout from "../../layouts/Layout";
import screenshot from "../../../assets/spam5.png";
import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  const handleCheckClick = () => {
    navigate("/model");
  };
  const handleSpamClick = () => {
    navigate("/about-spam");
  };

  return (
    <Layout>
      <div
        style={{
          
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1rem",
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-center"
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent black box
            borderRadius: "1rem",
            padding: "2rem",
          }}
        >
          <h1 className="display-4 fw-bold">Welcome to Spam Detector</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
              Protect yourself from unwanted messages! Our Spam Detection system
              helps you identify and filter spam SMS to keep your inbox clean
              and secure.
            </p>
            <div
              className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
                onClick={handleSpamClick}
              >
                What is Spam SMS?
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={handleCheckClick}
              >
                Check Spam SMS
              </button>
            </div>
          </div>

          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
              {/* Uncomment to show screenshot if needed */}
              {/* <img
                src={screenshot}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Screenshot"
                width="700"
                height="500"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

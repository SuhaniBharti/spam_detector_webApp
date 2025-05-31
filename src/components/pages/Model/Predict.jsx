import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";


const Predict = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://spam-sms-classifier-backend.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text }),
      });
      const data = await response.json();
      navigate('/predict', { state: { result: data.prediction, message: text } });
    } catch (error) {
      console.error("Error:", error);
      navigate("/predict", { state: { result: "Error" } });
    }
  };

  return (
    <Layout>
      <div
        style={{
          minHeight: "100vh",
          //backgroundColor: "#e9ecef", // soft gray background
          // backgroundImage:`url(${backimg})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
           // backgroundColor: "#fff",
             backgroundColor:"rgba(0, 0, 0, 1)",
             //backgroundImage:`url(${backimg})`,
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            padding: "40px",
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "28px",
              //color: "#212529",
            }}
          >
            📩 Spam SMS Detector
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "500",
               // color: "#495057",
                fontSize: "16px",
              }}
            >
              Enter your SMS message:
            </label>
            <textarea
              placeholder="Type your message here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              style={{
                width: "100%",
                height: "140px",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ced4da",
                fontSize: "16px",
                marginBottom: "25px",
                resize: "none",
                backgroundColor: "#f8f9fa",
                color: "#212529",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#007bff",
                border: "none",
                color: "white",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              🔍 Check Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Predict;

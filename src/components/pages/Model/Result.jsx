import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from "../../layouts/Layout";

const Result = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <Layout>
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1>Prediction Result</h1>
      <p style={{
        fontSize: '28px',
        fontWeight: 'bold',
       color: result?.toLowerCase() === 'spam' ? 'red' : result?.toLowerCase() === 'ham' ? 'green' : 'gray'

      }}>
        {result ? `This message is: ${result.toUpperCase()}` : 'No result'}
      </p>
    </div>
    </Layout>
  );
};

export default Result;

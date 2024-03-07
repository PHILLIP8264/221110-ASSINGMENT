import React from 'react';

const Home = () => {
  return (
    <div className="container text-center" style={{ color: 'black' }}>
      <h1>Welcome to Helloworld Business Statistics Web App</h1>
      <p>This web app provides valuable insights into business data through interactive charts and graphs.</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Key Features:</h2>
          <ul>
            <li>Visualize monthly sales revenue</li>
            <li>Analyze website traffic sources</li>
            <li>Monitor stock prices over time</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>About Us:</h2>
          <p>The Helloworld Business Web App provides valuable insights into business data through interactive charts and graphs. It is designed to enhance collaboration and project management efficiency for small teams, empowering them with visual data representations for making well-informed decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

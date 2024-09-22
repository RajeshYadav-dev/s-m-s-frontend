import React from "react";

const Home = () => {
  return (
    <>
      <div className="row shadow">
        <div className="col-md-12 ">
          <h1 className="text-center">Welcome to Student Management System</h1>
          <div className="d-flex flex-row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="/src/assets/img1.png" alt="Avatar" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="/src/assets/img1.png" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

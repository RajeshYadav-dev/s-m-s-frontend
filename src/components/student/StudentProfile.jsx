import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StudentProfile = () => {
  const [student, setStudent] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const navigator = useNavigate();

  const { id } = useParams();

  const fetchStudent = async () => {
    const response = await axios.get(
      `http://localhost:8080/students/student/${id}`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    if (response.status === 302) {
      setStudent(response.data);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);

  console.log(student);

  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card shadow">
              <div className="card-title">
                <h1 className="text-center">Student Profile</h1>
              </div>
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <img
                          style={{ width: "350px", height: "350px" }}
                          className="rounded float-start img-fluid"
                          src={"/src/assets/pic.avif"}
                          alt="Avatar"
                        />
                      </div>
                      <h4 className="text-center">
                        {student.firstName}
                        {student.lastName}
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h5>
                          Name:{student.firstName}
                          {student.lastName}{" "}
                        </h5>
                        <h5>Email:{student.email}</h5>
                        <h5>Department:{student.department}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StudentProfile;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
  const navigator = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { id } = useParams();

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (event) => {
    setStudent((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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

  const handleOnFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/students/update/${id}`, student);
      navigator("/view-students");
    } catch (error) {
      // setLoading(false);
      // setError(error);
      console.log(error);
    }

    setStudent({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  const handleClear = () => {
    setStudent({
      firstName,
      lastName,
      email,
      department,
    });
  };

  return (
    <>
      <div className="col-md-8 offset-md-2 py-2 px-5 shadow">
        <h1 className="text-center m-2">Edit Student</h1>
        <form onSubmit={(event) => handleOnFormSubmit(event)}>
          <div className="input-group mb-5">
            <label htmlFor="firstName" className="input-group-text">
              First Name
            </label>
            <input
              className="form-control col-md-6"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name."
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-5">
            <label htmlFor="lastName" className="input-group-text">
              Last Name
            </label>
            <input
              className="form-control col-md-6"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name."
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-5">
            <label htmlFor="email" className="input-group-text">
              Email
            </label>
            <input
              className="form-control col-md-6"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email."
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-5">
            <label htmlFor="department" className="input-group-text">
              Department
            </label>
            <input
              className="form-control col-md-6"
              type="text"
              name="department"
              id="department"
              placeholder="Enter your department."
              value={department}
              onChange={handleInputChange}
            />
          </div>
          <div
            className="btn-group mb-3 "
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="submit" className="btn btn-danger m-3 btn-lg ">
              save
            </button>
            <button
              onClick={handleClear}
              className="btn btn-success m-3 btn-lg"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateStudent;

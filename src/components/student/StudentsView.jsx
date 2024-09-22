import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddStudent from "./AddStudent";
import Search from "./Search";
import Pagination from "./pagination";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  //pagination related
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = itemPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const indexOfCurrentItem = students.slice(indexOfFirstItem, indexOfLastItem);

  console.log(indexOfCurrentItem, indexOfFirstItem, indexOfLastItem);

  const handleOnPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students", {
        validateStatus: () => {
          return true;
        },
      });
      if (response.status === 302) {
        setStudents(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleOnDelete = async (id) => {
    await axios.delete(`http://localhost:8080/students/delete/${id}`);
    fetchStudents();
  };

  if (loading)
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>{error.message()}</h1>
      </div>
    );

  return (
    <>
      <section>
        <Search search={search} setSearch={setSearch} />
        <table className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {indexOfCurrentItem && indexOfCurrentItem.length > 0
              ? indexOfCurrentItem
                  .filter((std) => std.firstName.toLowerCase().includes(search))
                  .map((student, index) => (
                    <tr key={student.id}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.email}</td>
                      <td>{student.department}</td>
                      <td className="mx-2">
                        <Link
                          className="btn btn-info"
                          to={`/view-students-profile/${student.id}`}
                        >
                          View
                        </Link>
                      </td>
                      <td className="mx-2">
                        <Link
                          className="btn btn-warning"
                          to={`/update/${student.id}`}
                        >
                          Update
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleOnDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
              : null}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPage={Math.ceil(students.length) / itemPerPage}
          pageOnChange={handleOnPageChange}
        />
      </section>
    </>
  );
};

export default StudentsView;

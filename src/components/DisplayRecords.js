import React from 'react'
import './displayRecord.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const cors = require("cors");



export default function DisplayRecords() {
  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    displayRecords()
  }, [])

  const displayRecords = () => {
    axios.get('http://localhost:8082/courses/')
      .then((res) => {
        setCourseData(res.data)
        console.log("Records: ", res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteRecord = (id) => {
    axios.delete(`http://localhost:8082/courses/${id}`)
      .then((res) => {
        console.log("Record Deleted");
        window.location.reload(false);
        setCourseData(res.data);
      })
      .catch((err) => {
        console.log("Record can't be deleted");
        console.log(err);
      })

  }

  const updateRecord = (id) => {
    // alert(id);
  }
  return (
    <>
      <div className='displayRecords'>
        <table>
          <tr>
            <th>Course ID</th>
            <th>Course TITLE</th>
            <th>Course Desc</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
          {courseData.map((record) => (
            <tr key={record.id} className="displayRecordData">
              <td><li>{record.id}</li></td>
              <td><li>{record.title}</li></td>
              <td><li>{record.description}</li></td>
              <td><li><button className='deleteRecordBtn' onClick={() => deleteRecord(record.id)}>DELETE</button></li></td>
              <td>
                <li>
                  <Link to={`/${record.id}`}>
                    <button className='updateRecordBtn' onClick={() => updateRecord(record.id)}>UPDATE</button>
                  </Link>
                </li>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );

}

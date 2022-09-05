import React from 'react'
import './createRecord.css'
import { useState } from 'react';
import axios from 'axios'

export default function CreateRecords() {

  const initialRecord = Object.freeze({
    id: "",
    title: "",
    description: ""
  })

  const [newRecord, setNewRecord] = useState(initialRecord);

  const handleChange = (e) => {
    e.preventDefault();
    setNewRecord({
      ...newRecord, [e.target.name]: e.target.value.trim()
    })
  }

  const createRecord = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8082/courses/', newRecord)
      .then((res) => {
        console.log("New record has been added successfully");
        console.log("This is new item : ", newRecord);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log('Some error');
        console.log(newRecord);
      }
      )

  }

  return (
    <div>
      <img src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/271645612_803604191041004_934499575832737502_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3LQdZ9BIyqsAX8ucIP7&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT8scCO5MZJNbJLJUmWHo3xLGJvb6Fc_rvSIGaBt-SxgYQ&oe=631AE8CB" alt="" />
      <h1>ADD MORE COURSES</h1>
      <div>
        <form action="" className='addRecordForm' onSubmit={createRecord}>
          <div className='form-group'>
            <label htmlFor="">COURSE ID</label>
            <input type="text" name="id" id="courseId" className='courseId' required
              style={{ position: "relative", left: '120px' }} onChange={handleChange} /><br />
          </div>
          <div className='form-group'>
            <label htmlFor="">COURSE TITLE</label>
            <input type="text" name="title" id="courseTitle" className='courseTitleText' required
              style={{ position: "relative", left: '92px' }} onChange={handleChange} /><br />
          </div>
          <div className='form-group'>
            <label htmlFor="">COURSE DESCRIPTION</label>
            <input type="text" name="description" id="courseDesc" className='courseDescText' style={{ position: "relative", left: '25px' }} required onChange={handleChange} />
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  )
}

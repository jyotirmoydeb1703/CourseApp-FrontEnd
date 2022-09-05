import React, { useState, useEffect } from 'react'
import './updateRecord.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


function UpdateRecord() {
  const initialData = Object.freeze({
    id: '',
    title: '',
    description: ''
  })
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  useEffect(() => {
    getRecord();
  }, [])

  const getRecord = (e) => {
    //e.preventDefault();
    axios.get(`http://localhost:8082/courses/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value.trim()
    })
  }

  const upDateRecord = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8082/courses/${id}`, data)
      .then((res) => {
        setData(res.data)
        console.log(data);
        alert("Record updated successfully");
        window.location.href = 'http://localhost:3000'
      })
      .catch((err) => {
        alert(err);
        console.log(data);
      })
  }

  return (
    <>
      <h1 style={{textAlign:"center"}}>CLAPSELF ONLINE COURSE MANAGEMENT</h1>
      <img src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/271645612_803604191041004_934499575832737502_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3LQdZ9BIyqsAX8ucIP7&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT8scCO5MZJNbJLJUmWHo3xLGJvb6Fc_rvSIGaBt-SxgYQ&oe=631AE8CB" alt="" />

    <div className="upDateForm">
      <h1>UPDATE THIS COURSE</h1>
      <form action="" onSubmit={upDateRecord}>
        <div className='form-group'>
          <label htmlFor="">COURSE ID</label>
          <input type="text" name="id" id="courseId" className='courseId' required
            style={{ position: "relative", left: '120px' }} value={data.id} onChange={handleChange} /><br />
        </div>

        <div className='form-group'>
          <label htmlFor="">COURSE TITLE</label>
          <input type="text" name="title" id="courseTitle" className='courseTitleText' required
            style={{ position: "relative", left: '92px' }} value={data.title} onChange={handleChange} /><br />
        </div>

        <div className='form-group'>
          <label htmlFor="">COURSE DESCRIPTION</label>
          <input type="text" name="description" id="courseDesc" value={data.description} style={{ position: "relative", left: '25px' }} className='courseDescText' required onChange={handleChange} />
        </div>
        <input type="submit" value="UPDATE" />

        <Link to="/">
          <input type="button" value="CANCEL" />
        </Link>

      </form>
    </div>
    </>
  )
}

export default UpdateRecord
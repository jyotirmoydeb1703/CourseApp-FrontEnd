import React from 'react'
import CreateRecords from '../components/CreateRecords'
import DisplayRecords from '../components/DisplayRecords'
import './Home.css'

export default function Home() {
  return (
    <div>
      <h1 className='headerStyle'>CLAP SELF ONLINE COURSE DASHBOARD</h1>

     <div className="courseMain">
        <div className='displayRecordMain' style={{
          width:"45%"}}>
        <DisplayRecords/>
       </div>

        <div className='createRecords' style={{
          width: "45%"
        }}>
        <CreateRecords />
      </div>
    </div>

    </div>
  )
}

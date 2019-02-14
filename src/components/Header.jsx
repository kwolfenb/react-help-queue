import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div>
      <style jsx>{`
        div {
          background-color: #E0DFFF;
        }
        h1 {
          margin-left: auto;
          margin-right: auto;
          width: 33%;
          border: solid gray 2px;
          background: #e8f0ff;
          border-radius: 7px;
          padding: 5px;
          text-align: center
        }
        h6 {
          font-weight: bold;
          font-size: 1em;
        }
      `}
      </style>
      <h1>Help Queue</h1>
      <h6>
        <Link to='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>
      </h6>
    </div>
  )
}

export default Header
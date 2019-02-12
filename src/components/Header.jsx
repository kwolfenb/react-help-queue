import React from 'react'

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
      `}
      </style>
      <h1>Help Queue</h1>
    </div>
  )
}

export default Header
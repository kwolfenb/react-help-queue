import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props) {
  return (
    <div>
      <style jsx>
        {`
        div {
          background-image: linear-gradient(to right, #D4FFF7, white);
          border-radius: 4px;
          margin-right: 5%;
        }
        h4 {
          padding-top: 6px;
          margin-left: 8px;
        }
        p {
          font-size: 12px;
          margin-left: 3%;
        }
      `}
      </style>
      <h4> { props.location } - { props.names }</h4>
      <p><em> { props.issue }</em></p>
      <hr/>
    </div>
  )
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket
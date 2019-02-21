import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';


function Admin(props){
  console.log(props.currentRouterPath);

  return (
    <div>
      <h2>Admin</h2>
      <TicketList 
        ticketList={props.ticketList} 
        currentRouterPath={props.currentRouterPath}
        />
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
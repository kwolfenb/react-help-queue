import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import Admin from './Admin'

import { Switch, Route } from 'react-router-dom'
import NewTicketControl from './NewTicketControl'
import Error404 from './Error404';
import { v4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newTicketId = v4()
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />

          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
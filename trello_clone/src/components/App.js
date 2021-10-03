import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions"
import styled from "styled-components";

import { LandingPage } from './login/LandingPage';
import SignIn from './login/signIn';
import SignUp from './login/signUp';
import { Link } from "react-router-dom";


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  `

  const styles = {
    button: {
      position: "fixed",
      top: '12px',
      right: '30px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      transition: '0.5s',
      backgroundColor: '#aab3da',
      color: '#ffffff'
    },
  };

class App extends Component {

  onDragEnd = (result) => {
    // reordering logic
    const { destination, source, draggableId, type} = result;

    if(!destination){
      return;
    }
    
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      //need one props
      <BrowserRouter>
        <LandingPage/>
        <Switch>
          <Route exact path = "/login" component = {SignIn} />
          <Route exact path = "/signup" component = {SignUp} />

        <DragDropContext onDragEnd={this.onDragEnd} > 
          <div className= "App">
            <h2>Trello clone</h2>
            <Link to = "/login">

              <Button style={styles.button}>
                log out
              </Button>

            </Link>
            <Droppable droppableId="all" direction="horizontal" type="list">
              {provided => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                  { lists.map((list, index) => (
                  <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index}/>
                  ))}
                  {provided.placeholder}
                  <TrelloActionButton list />
                </ListContainer>  
              )}
            </Droppable>
            </div>
        </DragDropContext>  

        </Switch>  
        </BrowserRouter>

    );
  }
}


const mapStateToProps = state => ({
  lists: state.lists //reduce index.js
});

export default connect(mapStateToProps)(App);
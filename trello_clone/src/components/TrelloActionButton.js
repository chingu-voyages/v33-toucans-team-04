import React from "react";
import Icon  from "@material-ui/core/Icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

import { TextField } from "@material-ui/core";

class TrelloActionButton extends React.Component {

  state = {
    formOpen: false,

  }

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
  
    if(text) {
      this.setState({
        text: " "
      })
      dispatch(addList(text))
    }
    return;
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if(text) {
      this.setState({
        text: " "
      })
      dispatch(addCard(listID, text)) 
    }
  }
  

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "add another list" : "add another card"


    return(
      <div 
      onClick={this.openForm}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "enter list title" : "enter a title for card";
    const buttonText = list ? "add list" : "add card";
    


    return <div>
      <Card style={{
        overflow: "visible",
        minHeight: 80,
        minWidth: 272,
        padding: "6px 8px 2px"
      }}
      >
        <TextareaAutosize 
        placeholder={placeholder}
        autoFocus
        onBlur={this.closeForm}
        value={this.state.text}
        onChange={this.handleInputChange}
        style={{
          resize: "none",
          width: "100%",
          outline: "none",
          border: "none"
        }}
        />
      </Card>

      <div>
        <Button 
        onMouseDown={list ? this.handleAddList : this.handleAddCard}
        variant="contained" 
        style={{color: "white", backgroundColor: "#5aac44"}}
        > {buttonText} {" "} </Button>
        <Icon style={{ marginLeft: 8, cursor: "pointer"}}></Icon>
      </div>
    </div>
  }


  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}


export default connect() (TrelloActionButton);
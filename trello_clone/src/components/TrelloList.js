import React from 'react'; 
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';
import { Droppable, Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`

const TrelloList = ({ title, cards, listID, index}) => { 
  return ( 
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
          <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
          <Droppable droppableId={String(listID)}> 
          {provided => ( 
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h4>{title}</h4> 
              {cards.map((card, index) => ( 
              <TrelloCard key={card.id} index={index} text={card.text} id={card.id}/> 
              ))} 
              {provided.placeholder} 
              <TrelloActionButton listID={listID} /> 
              </div>
              )} 
          </Droppable> 
          </ListContainer>
      )}
    </Draggable>
    );


}; 
  
  export default TrelloList;


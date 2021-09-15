import React from 'react'; 
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title, cards, listID}) => { 
  return ( 
    <div >
        <h4>{title}</h4> 
        { cards.map(card => (
          <TrelloCard key={card.id} text={card.text} user={card.user} />
        ) ) }
      <TrelloActionButton listID={listID} />
    </div> 
  ); 
}; 

  
  export default TrelloList;


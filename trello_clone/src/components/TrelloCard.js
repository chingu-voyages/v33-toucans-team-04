import React from "react";
import TrelloList from "./TrelloList";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const TrelloCard = ({text, user}) => {
  return(
    <Card >
      <CardContent>
      <Typography 
      gutterBottom>
        {text} 
      </Typography>
      <Typography variant="body1">
        {user}
      </Typography>
      </CardContent>
  </Card>
  );
};


export default TrelloCard;
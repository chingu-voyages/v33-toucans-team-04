import { CardMedia } from "@material-ui/core";
import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 3;

const initialState = [
  {
    title: "TODO",
    id: 0,
    cards: [
      {
        id: 0,
        text: "create a static list and a static card",
        user: "user1"
      },
      {
        id: 1,
        text: "we used a mix between material Ul React and styled componenets",
        user: "user1"
      }
    ]
  },
  {
    title: "DOING",
    id: 1,
    cards: [
      {
        id: 0,
        text: "doing1",
        user: "user2"
      },
      {
        id: 1,
        text: "doing2",
        user: "user1"
      },
      {
        id: 2,
        text: "doing3",
        user: "user2"
      }
    ]
  }
]

const listsReducer = (state = initialState , action) => {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      }
      cardID += 1
      const newState = state.map(list => {
        if(list.id === action.payload.listID){
          return{
            ...list, 
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      });
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
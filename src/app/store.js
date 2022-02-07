import { configureStore } from "@reduxjs/toolkit";
//import { v4 as uuidv4 } from "uuid";
//let uniqueId = uuidv4();
//console.log(uniqueId);
import topicsReducer from "../features/topics/TopicsSlice";
import quizzesReducer from "../features/quizzes/QuizzesSlice";
import cardsReducer from "../features/cards/CardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});

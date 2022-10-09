import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  question: '',
  optiones: [],
  response : '',
  flag: '',
  score: 0,
};

export const quizSlice = createSlice({
  name : 'quizCountry',
  initialState,
  reducers : {
    questionResponse: (state,action)=>{
      return action.payload;
    },
    totalScore: (state,action)=>{
      return void{
        ...state,
        score : state.score++
      };
    },
    restarScore: (state,action)=>{
      return {
        ...state,
        score: action.payload
      }
    }
  }
});

export const { questionResponse, totalScore, restarScore } = quizSlice.actions;

export default quizSlice.reducer;
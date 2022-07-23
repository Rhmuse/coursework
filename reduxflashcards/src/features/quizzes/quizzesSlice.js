import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

const options = {
    name: 'quizzes',
    initialState: { quizzes: { }},
    reducers: {
        addQuiz(state, action) {
            return {...state,
                quizzes: {
                    ...state.quizzes,
                        [action.payload.id]: {
                            id: action.payload.id,
                            name: action.payload.name,
                            topicId: action.payload.topicId,
                            cardIds: action.payload.cardIds
                        }
                }
            }
        },
    }
}

export const createQuiz = (payload) => {
    return dispatch => {
        dispatch(addQuiz(payload));
        dispatch(addQuizIdToTopic(payload));
    }
}

export const quizzesSlice = createSlice(options); 

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions; 
export default quizzesSlice.reducer; 
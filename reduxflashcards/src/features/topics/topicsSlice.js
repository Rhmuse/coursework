import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic(state, action) {
            return {...state, 
                topics: { 
                    ...state.topics,
                        [action.payload.id]: { 
                        id: action.payload.id,
                        name: action.payload.name,
                        icon: action.payload.icon,
                        quizIds: []
                    }
                }
            }
        }
    }
}
export const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics.topics; 
export const { addTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;


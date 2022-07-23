import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'topics',
    initialState: { topics: {
        '123': {
            id: '123',
            name: 'example topic',
            icon: 'icon url',
            quizIds: ['456']
        }
    }},
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
        },
        addQuizIdToTopic(state, action) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }
}

export const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics.topics; 
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;


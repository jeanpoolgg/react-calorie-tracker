import type { Activity } from "../types"

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}


export type ActivityActions =  { type: 'save-activity', payload: { newActivity: Activity } } 

export const activityReducer = (state: ActivityState = initialState , action: ActivityActions) => {
    switch(action.type){

        case 'save-activity':
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }

        default:
            return state;
    }
}
import {Channels} from '../actions/constants'

const defaultState={
    channels:[]
}

export const channelReducer=(state=defaultState,action)=>{
    switch(action.type){
        case Channels.fetchChannels:
            return state
        case Channels.fetchChannelsSuccess:
            return{
                ...state,
                channels:action.payload
            }
        default:
            return defaultState
    }
}

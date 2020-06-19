import {combineReducers} from 'redux';
import {channelReducer} from './channelReducer';


const rootReducer =combineReducers({
    channels: channelReducer,
});
export default rootReducer;
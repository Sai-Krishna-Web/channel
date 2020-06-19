import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas/channelSaga';

const sagaMiddleWare=createSagaMiddleware();
export default ()=>{
    let store=createStore(rootReducer,applyMiddleware(sagaMiddleWare));
    sagaMiddleWare.run(rootSaga);
   return{
        store
    }
}

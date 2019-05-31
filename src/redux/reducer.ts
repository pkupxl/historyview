import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
     fetchHistory
} from './action';
import { combineReducers } from 'redux';
import { HistoryResult} from '../model';
import { show } from 'js-snackbar';

function showError(message: string) {
  show({
    text: message,
    pos: 'bottom-center',
    duration: 1000
  });
}

function withError<V>(message: string, value: V): V {
  showError(message);
  return value;
}

export interface HistoryResultState{
    fetching:boolean;
    query:string;
    result?:HistoryResult[];
}

export interface RootState {
  historyResult:HistoryResultState;
}


const historyResult =
    reducerWithInitialState<HistoryResultState>({fetching: false, query: ''})
        .case(fetchHistory.started, (state, payload) => ({fetching: true, query: payload.query}))
        .case(fetchHistory.done, (state, payload) => ({ fetching: false, query: payload.params.query, result: payload.result
        }))
        .case(fetchHistory.failed, (state, payload) =>
            withError('Failed to present', {fetching: false, query: payload.params.query}));


export const appReducer = combineReducers({
    historyResult
});
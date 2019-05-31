import * as $ from 'jquery';
import actionCreatorFactory from 'typescript-fsa';
import bindThunkAction from 'typescript-fsa-redux-thunk';
import {HistoryResult} from '../model';
import {HISTORY_SEARCH_URL} from '../config';

const actionCreator = actionCreatorFactory();

export const fetchHistory = actionCreator.async<{ project: string, query: string ,type:string}, HistoryResult[]>('FETCH_HISTORY');
export const fetchHistoryWorker = bindThunkAction(
    fetchHistory ,
    async (params) => {
        return await $.post(HISTORY_SEARCH_URL, params);
    }
);


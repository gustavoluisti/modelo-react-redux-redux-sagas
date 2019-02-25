import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put } from 'redux-saga/effects'
import URL_RUNS from './api/runs'

export function* getRuns(){
    const token = localStorage.getItem('token')
    const runs = yield axios.get(URL_RUNS, {
       headers:{
           Authorization: 'Bearer '+token
       } 
    })
    yield put(ActionCreators.getRunsSuccess(runs.data.data))
}

export function* createRun(action) {
    const token= localStorage.getItem('token')
    const runs = yield axios.post(URL_RUNS, action.run, {
        headers:{
            Authorization: 'Bearer '+token
        }
    })
}
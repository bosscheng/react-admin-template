import {stringify} from 'querystring';
import {history, Reducer, Effect} from 'umi';

import {login} from "@/api/login";


export interface StateType {
  status?: 'ok' | 'error';
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {

    * login({payload}, {call, put}) {
      const response = yield call(login, payload);
      yield put({
        type: '',
        payload: 'ok'
      })


    }
  },
  reducers: {
    changeLoginStatus(state, {payload}) {
      return {
        ...state,
        status: payload.status
      }
    }
  }
};

export default LoginModel;

import {Effect, Reducer} from 'umi';

import {getProfile} from "@/api/profile";

export interface CurrentUser {
  token?: string,
  name?: string,
  role?: {},
  mcdUserId?: string
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchProfile: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}


const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
  },
  effects: {

    * fetchProfile(_, {call, put}) {
      const response = yield call(getProfile);
      yield put({
        type: 'saveCurrentUser',
        payload: response
      })
    }
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {}
      }
    }
  }
}


export default UserModel;

import AuthService from '../../services/AuthService';
import { IActions, IMutations, IState, User } from '../interface';

const state = {
  user: null
};

const getters = {
};

const mutations: IMutations = {
  SET_USER(state: IState, payload: User) {
    state.user = Object.assign({}, payload);
  }
};

const actions: IActions = {
  login({ commit }, payload) {
    return AuthService.login(payload).then((res: any) => {
      return res;
    }).catch((err: any) => {
      throw err;
    })
  },

  register({ commit }, payload) {
    return AuthService.register(payload).then((res: any) => {
      return AuthService.sendVerificationEmail()?.then((data: any) => {
        return data;
      });
    }).catch((err: any) => {
      throw err;
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

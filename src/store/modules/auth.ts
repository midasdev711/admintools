import AuthService from '../../services/AuthService';
import { IActions, IMutations, IState, User } from '../interface';
import fb from '../../firebase/init';

const state = {
  user: null,
  user_id: null
};

const getters = {
};

const mutations: IMutations = {
  SET_USER(state: IState, payload: User) {
    state.user = Object.assign({}, payload);
  },
  SET_USER_ID(state: IState, payload: string) {
    state.user_id = payload;
  },
};

const actions: IActions = {
  login({ commit }, payload) {
    return AuthService.login(payload).then((res: any) => {
      return res;
    }).catch((err: any) => {
      return err;
    })
  },

  register({ commit }, payload) {
    return AuthService.register(payload).then((res: any) => {
      return AuthService.sendVerificationEmail()?.then((data: any) => {
        return data;
      });
    }).catch((err: any) => {
      return err;
    })
  },

  async loadCurrentUser({ commit }) {
    await fb.auth.onAuthStateChanged((user: any) => {
      commit('SET_USER_ID', user.uid)
      let payload = {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid
      }
      commit('SET_USER', payload)
      return user;
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

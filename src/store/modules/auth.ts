import AuthService from '../../services/AuthService';
import { IActions, IMutations, IState, IGetters, User } from '../interface';
import fb from '../../firebase/init';

const dbUsers = fb.db.collection("Users");

const state: IState = {
  user: null,
  user_id: null
};

const getters: IGetters = {
  userId: () => state.user_id
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
      commit('SET_USER_ID', res.user.uid)
      let payload = {
        displayName: res.user.displayName,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        uid: res.user.uid
      }
      localStorage.setItem("uid", res.user.uid);
      commit('SET_USER', payload)
      return res;
    }).catch((err: any) => {
      return err;
    })
  },

  register({ commit }, payload) {
    return AuthService.register(payload).then((res: any) => {
      console.log(res);
      return AuthService.sendVerificationEmail()?.then((data: any) => {
        return res;
      });
    }).catch((err: any) => {
      return err;
    })
  },

  logout({ commit }) {
    return AuthService.logout().then((res: any) => {
      localStorage.removeItem("uid");
      return res;
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
      localStorage.setItem("uid", user.uid);
      commit('SET_USER', payload)
      return user;
    })
  },

  setProfile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      dbUsers.doc(payload?.uid).set(payload);
      resolve(true);
    })
  },

  getProfile({ commit }, uid) {
    return new Promise((resolve, reject) => {
      dbUsers.doc(uid).get().then(snapshot => {
        resolve(snapshot.data());
      })
      .catch(error => {
        reject(error);
      })
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

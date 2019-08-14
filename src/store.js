import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: '',
    },
    // backendError って変数を用意すべきかは分からない
    backendError: '',
  },
  getters: {
    user(state) {
      return state.user;
    },
    backendError(state) {
      return state.backendError;
    },
  },
  mutations: {
    // mutation の命名規則分からず
    setUser(state, email) {
      state.user.email = email;
    },
    setBackendError(state, error) {
      state.backendError = error;
    },
    removeBackendError(state) {
      state.backendError = '';
    },
  },
  actions: {
    // action も命名規則分からず
    login({ commit }, email, password) {
      // ここでバックエンドAPIと通信
      if (password === 'password') {
        commit('setUser', email);
      } else {
        commit('setBackendError', 'パスワードが間違っています');
      }
    },
    removeBackendError({ commit }) {
      commit('removeBackendError');
    },
  },
});

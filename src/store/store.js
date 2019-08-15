import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // NOTE: state の型定義めっちゃしたくなる……
    user: {
      email: '',
    },
    // NOTE: errorMessages って変数を用意すべきかは分からない
    errorMessages: [],
  },
  getters: {
    user(state) {
      return state.user;
    },
    errorMessages(state) {
      return state.errorMessages;
    },
  },
  mutations: {
    // FIXME: mutation の命名規則分からず
    setUser(state, email) {
      state.user.email = email;
    },
    pushToErrorMessages(state, error) {
      state.errorMessages.push(error);
    },
    truncateErrorMessages(state) {
      state.errorMessages = [];
    },
  },
  actions: {
    // FIXME: action も命名規則分からず
    login({ commit }, email, password) {
      // TODO: ここでバックエンドAPIと通信
      if (password === 'password') {
        commit('setUser', email);
      } else {
        commit('pushToErrorMessages', 'パスワードが間違っています');
      }
    },
    appendToErrorMessages({ commit }, message) {
      commit('pushToErrorMessages', message);
    },
    truncateErrorMessages({ commit }) {
      commit('truncateErrorMessages');
    },
  },
});

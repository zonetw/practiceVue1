import api from "../../api/imgur";
import qs from "qs";

const state = {
    token: window.localStorage.getItem("imgur_token"),
};

const getters = {
    isLoggedIn(state) {
        return !!state.token;
    }
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    }
};

const actions = {
    login() {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        const cbResult = qs.parse(hash.replace("#", ""));
        commit("setToken", cbResult.access_token);
        window.localStorage.setItem("imgur_token", cbResult.access_token);
    },
    logout({ commit }) {
        commit("setToken", null);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
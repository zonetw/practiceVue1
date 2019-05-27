import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

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
        // navigation programatically
        router.push("/");
    },
    logout({ commit }) {
        commit("setToken", null);
        window.localStorage.removeItem("imgur_token");
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
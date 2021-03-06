import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import images from "./modules/images";

// vue is an object, maybe use this method will make some setting in Vue to chang
Vue.use(Vuex);

export default new Vuex.Store({
    modules: { auth, images }
});
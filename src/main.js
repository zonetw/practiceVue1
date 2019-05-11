import Vue from "vue"; // there is no vue.js in source folder, webpack will find it in node_modules folder
import App from "./App";

new Vue({
    // Another way to show content on screen
    // render: function (createElement) {
    //     return createElement(App);
    // }
    render: h => h(App),
});

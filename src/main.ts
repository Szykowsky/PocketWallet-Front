import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import $ from 'jquery';

const app = createApp(App);

const bsTooltip = (el: any, binding: any) => {
    const t = [];

    if (binding.modifiers.focus) t.push('focus');
    if (binding.modifiers.hover) t.push('hover');
    if (binding.modifiers.click) t.push('click');
    if (!t.length) t.push('hover');

    ($(el) as any).tooltip({
        title: binding.value,
        placement: binding.arg || 'top',
        trigger: t.join(' '),
        html: !!binding.modifiers.html,
    });
};
app.directive('tooltip', {
    mounted: bsTooltip,
    updated: bsTooltip,
    unmounted(el: any) {
        ($(el) as any).tooltip('dispose');
    }
});

app
    .use(store)
    .use(router)
    .mount("#app");

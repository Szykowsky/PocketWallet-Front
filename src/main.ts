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

const bsTooltipUpdate = (el: any, binding: any) => {
    const $el = ($(el) as any);
    $el.attr('title', binding.value).tooltip('fixTitle');

    const data = $el.data('bs.tooltip');
    if (binding.modifiers.live) { // update live without flickering (but it doesn't reposition)
        if (data.$tip) {
            if (data.options.html) data.$tip.find('.tooltip-inner').html(binding.value);
            else data.$tip.find('.tooltip-inner').text(binding.value);
        }
    } else {
        if (data.inState.hover || data.inState.focus || data.inState.click) $el.tooltip('show');
    }
};
app.directive('tooltip', {
    mounted: bsTooltip,
    updated: bsTooltipUpdate,
    unmounted(el: any) {
        ($(el) as any).tooltip('dispose');
    }
});

app
    .use(store)
    .use(router)
    .mount("#app");

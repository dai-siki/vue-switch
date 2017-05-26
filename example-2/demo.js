import 'babel-polyfill';
import mySwitch from '../switch-2.vue';

const Vue = window.Vue;

new Vue({
	el: '#app',
	data: {
		toggle: true
	},
	components: {
		'my-switch': mySwitch
	}
});

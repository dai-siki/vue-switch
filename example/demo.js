import 'babel-polyfill';
import Vue from 'vue';
import mySwitch from '../switch-dev.vue';

new Vue({
	el: '#app',
	data: {
		toggle: true
	},
	components: {
		'switch': mySwitch
	}
});

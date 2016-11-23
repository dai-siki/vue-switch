<template>
<div :class="className" @click="onClick">
	<span class="open">{{ openName }}</span>
	<span class="close">{{ closeName }}</span>
</div>

</template>

<script>
'use strict';

export default {
	props: {
		value: {
			default: true,
			twoWay: true
		},
		// sm小 md中 lg大
		size: {
			type: String,
			default: 'md中'
		},
		// blue red green orange
		color: {
			type: String,
			default: 'red'
		},
		openValue: {
			default: true
		},
		closeValue: {
			default: false
		},
		openName: {
			type: String,
			default: '是'
		},
		closeName: {
			type: String,
			default: '否'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		className() {
			let {
				value,
				openValue,
				closeValue,
				size,
				color
			} = this;
			return {
				'vue-switch': true,
				'z-on': value === openValue,
				['s-' + size]: true,
				['c-' + color]: true
			};
		}
	},
	methods: {
		onClick() {
			let {
				disabled,
				value,
				openValue,
				closeValue
			} = this;
			if (!disabled) {
				if (openValue === value) {
					this.value = closeValue;
				} else {
					this.value = openValue;
				}
			}
		}
	}
}

</script>

<style lang="sass" scoped>@import "./scss/switch.scss"</style>

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
		}
	},
	computed: {
		//	日期二维数组（3*4），渲染用
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
		// 年份+月份选择
		onClick() {
			let {
				value,
				openValue,
				closeValue
			} = this;
			if (openValue === value) {
				this.value = closeValue;
			} else {
				this.value = openValue;
			}
		}
	}
}

</script>

<style lang="sass" scoped>@import "./scss/switch.scss"</style>

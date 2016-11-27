# vue-switch

a beautiful switch component for vue. (vue触发器组件)

## demo

[click me](http://dai-siki.github.io/vue-switch/example/demo.html).


## Env

vue.js@1.0 + webpack + es6 + scss


## install

#### npm

```shell
$ npm install vue-switch
```

## Usage

#### 相关参数

| 名称              | 类型               | 默认             | 说明                                         |
| ----------------- | ----------------- | ---------------- | --------------------------------------------- |
| value             | twoWay            |                  | 要绑定的变量    |
| open-value             |             | true               | 激活时绑定值                   |
| close-value            |             | false     | 关闭时绑定值                                    |
| open-name             | String            | "是"               | 激活时显示文字                   |
| close-name            | String            | "否"     | 关闭时显示文字                                    |
| size           | String           | "md"            | sm lg              |
| color       | String            | "red"               | red/blue/orange/green                                     |
| disabled       | Bollean            | false               | as u know                                    |


#### 示例(vue@1.0+)

```html

<div id="app">
	<label for="myDate">Do u love me ?</label>
	<div class="wrap">
		<switch size="sm" :value.sync="toggle"></switch>
	</div>
	<div class="wrap">
		<switch size="sm" :value.sync="toggle" color="blue" :disabled="true"></switch>
	</div>
	<div class="wrap">
		<switch size="sm" :value.sync="toggle" color="orange"></switch>
	</div>
	<div class="wrap">
		<switch size="sm" :value.sync="toggle" color="green"></switch>
	</div>
	<div class="wrap">
		<switch :value.sync="toggle"></switch>
	</div>
	<div class="wrap">
		<switch open-name="Yes" close-name="No" color="blue"
			 :value.sync="toggle"></switch>
	</div>
	<div class="wrap">
		<switch open-name="爱哦" close-name="不爱" size="lg" color="orange"
			 :value.sync="toggle"></switch>
	</div>
	<div class="wrap">
		<switch open-name="Love" close-name="Hate" size="lg" color="green"
			 :value.sync="toggle"></switch>
	</div>
</div>

<script>
	import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
	import Vue from 'vue';
	import mySwitch from 'vue-switch';

	new Vue({
		el: '#app',
		data: {
			toggle: true
		},
		components: {
			'switch': mySwitch
		}
	});
</script>

```

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <keep-alive>
    	<router-view></router-view>
    </keep-alive> -->
    <keep-alive>
	    <router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
	// inject:['roload'],
  	name: 'App',
}
</script>

<style >
</style>

<template>
	<div id="app">
		<Navbar />
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

:root {
	--green: #a0fed1;
	--light-green: #b3f5f1;
	--dark-green: #6be8d1;
}
html,
body {
	margin: 0;
	padding: 0;
	border-width: 0;
}
body {
	background: var(--light-green);
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 65px;
}
</style>

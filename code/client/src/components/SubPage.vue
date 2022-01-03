<template>
	<div class="subpage-fullscreen" v-if="!hidden" @click="$emit('hide')">
		<div class="subpage-container" @click.stop>
			<h2 v-if="title != ''">{{ title }}</h2>
			<div v-if="title != ''" class="divider"></div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SubPage",
	props: {
		hidden: {
			type: Boolean,
			default: true,
		},
		title: String,
	},
};
</script>

<style>
.subpage-fullscreen {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	background: rgba(0, 0, 0, 0.7);
	z-index: 100;
	padding-block: 10vh;
}

.subpage-container {
	flex-direction: column;
	display: flex;
	min-height: 20vh;
	padding-inline: 1.5rem;
	padding-bottom: 2rem;
	min-width: 20%;
	max-width: 50%;
	background: rgb(255, 255, 255);
	z-index: 101;
	border-radius: 30px;
}
h2 {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.divider {
	margin-bottom: 1rem;
	content: "";
	display: block;
	position: relative;
	height: 2px;
	left: -1.5rem;
	width: calc(100% + 3rem);
	background: gray;
}
</style>
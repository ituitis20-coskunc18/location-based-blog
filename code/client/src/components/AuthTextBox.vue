<template>
	<input
		:type="type"
		:name="name"
		@input="$emit('input', $event.target.value)"
		:maxlength="maxLength"
	/>
</template>

<script>
export default {
	name: "AuthTextBox",
	props: {
		type: {
			type: String,
			default: "textbox",
		},
		name: String,
		maxLength: {
			type: Number,
			default: 60,
		},
		defaultVal: {
			type: String,
			default: "",
		},
	},
};
</script>

<style scoped>
input {
	background: var(--light-green);
	padding-inline: 0.7rem;
	border: 3px solid black;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 60px;
	height: 3rem;
	width: 16rem;
	font-size: 16px;
}

input:focus {
	outline: none;
	background: #d8f7f5;
}

input:hover {
	background: #d8f7f5;
}
</style>
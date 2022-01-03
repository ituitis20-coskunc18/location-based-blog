<template>
	<button
		type="submit"
		:disabled="disabled"
		:class="disabled ? 'disabled' : ''"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "AuthButton",
	props: {
		text: String,
		disabled: Boolean,
	},
};
</script>

<style scoped>
button {
	cursor: pointer;
	background: var(--green);
	border: 3px solid black;
	border-radius: 61px;
	height: 3rem;
	width: 10rem;
}

button:disabled {
	color: initial;
}

.disabled {
	cursor: default;
	background: #333333;
}
</style>
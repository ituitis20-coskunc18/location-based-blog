<template>
	<div>
		<div class="login-page">
			<div class="login-title-container">
				<h1 class="login-title">LOCATION<br />BASED<br />BLOG</h1>
			</div>
			<div class="login-form-container">
				<h1 class="login-form-title">Log In</h1>
				<form @submit.prevent="login" class="login-form">
					<div class="form-item">
						<label for="name" class="form-label">Username</label>
						<AuthTextBox type="text" name="name" v-model="name" />
					</div>
					<div class="form-item">
						<label for="password" class="form-label"
							>Password</label
						>
						<AuthTextBox
							type="password"
							name="password"
							v-model="password"
						/>
					</div>
					<AuthButton text="Login" />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import AuthServices from "../services/AuthServices";
import AuthTextBox from "../components/AuthTextBox.vue";
import AuthButton from "../components/AuthButton.vue";
export default {
	name: "LoginPage",
	components: {
		AuthTextBox,
		AuthButton,
	},
	data() {
		return {
			name: "",
			password: "",
		};
	},
	methods: {
		async login() {
			console.log("login call");
			const res = await AuthServices.login({
				name: this.name,
				password: this.password,
			})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(res);
		},
	},
};
</script>

<style scoped>
.login-page {
	position: relative;
	display: flex;
	height: calc(100vh - 65px);
}
.login-title-container {
	height: 100%;
	display: flex;
	width: 50%;
	margin: 0;
}
.login-title {
	margin: 0;
	position: relative;
	top: 5%;
	left: 10%;
	height: fit-content;
	max-width: 100%;
	font-weight: normal;
	position: relative;
	text-align: left;
	font-family: Roboto;
	font-size: 120px;

	color: #000000;

	text-shadow: 6px 9px 10px rgba(0, 0, 0, 0.6);
}

.login-form-container {
	flex-direction: column;
	margin: 0;
	background: #6be8d1;
	width: 50%;
	border-radius: 0 0 0 166px;
	display: flex;
	align-items: center;

	padding-top: 3rem;
}

.login-form {
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0;
}

.login-form-title {
	font-size: 36px;
	font-family: Roboto, sans-serif;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 0;
	margin-bottom: 1rem;
}

.form-item {
	margin-block: 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.form-label {
	margin-left: 0.5rem;
	margin-bottom: 1rem;
	font-size: 24px;
	font-weight: 600;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
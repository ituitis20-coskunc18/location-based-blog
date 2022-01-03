<template>
	<div>
		<div class="signup-page">
			<div class="signup-title-container">
				<h1 class="signup-title">LOCATION<br />BASED<br />BLOG</h1>
			</div>
			<div class="signup-form-container">
				<h1 class="signup-form-title">Sign Up</h1>
				<form @submit.prevent="register" class="signup-form">
					<div class="form-item">
						<label for="name" class="form-label">Username</label>
						<div class="confirmable-box">
							<AuthTextBox
								type="text"
								name="name"
								v-model="name"
							/>
							<ConfirmSign
								:show="name != ''"
								:correct="this.validName"
								class="confirm-sign"
							></ConfirmSign>
						</div>
					</div>
					<div class="form-item">
						<label for="password" class="form-label">
							Password
						</label>
						<div class="confirmable-box">
							<AuthTextBox
								type="password"
								name="password"
								v-model="password"
							/>
							<ConfirmSign
								:show="password != ''"
								:correct="this.validPassword"
								class="confirm-sign"
							></ConfirmSign>
						</div>
					</div>
					<div class="form-item">
						<label for="confirm" class="form-label"
							>Confirm Password</label
						>
						<div class="confirmable-box">
							<AuthTextBox
								type="password"
								name="confirm"
								v-model="confirm"
							/>
							<ConfirmSign
								:show="confirm != ''"
								:correct="this.validConfirm"
								class="confirm-sign"
							></ConfirmSign>
						</div>
					</div>
					<div class="form-item">
						<label class="terms-span"
							>Agree To
							<span
								@click.stop.prevent="termsHidden = false"
								class="terms-link"
							>
								Terms and Conditions
							</span>
							<input
								type="checkbox"
								name="terms"
								v-model="terms"
								class="terms-checkbox"
							/>

							<span class="terms-checkmark"> </span>
						</label>
					</div>
					<div class="form-item-centered">
						<div class="confirmable-box">
							<AuthButton
								:disabled="!validFields"
								text="Sign Up"
							/><ConfirmSign
								:show="this.error != null"
								:correct="this.error == null"
								class="confirm-sign"
							></ConfirmSign>
						</div>
					</div>
				</form>
			</div>
		</div>

		<FrontSubPage
			@hide="termsHidden = true"
			:hidden="termsHidden"
			title="Terms and Conditions"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
			autem veritatis facilis asperiores cumque. Dolore, consectetur esse
			nisi, quidem eius repellendus id laborum nam, sed dolorum
			exercitationem iusto? Quas excepturi distinctio nobis harum labore
			sed rem cum maiores recusandae tempora.
		</FrontSubPage>
	</div>
</template>

<script>
import AuthServices from "../services/AuthServices";
import AuthTextBox from "../components/AuthTextBox.vue";
import AuthButton from "../components/AuthButton.vue";
import ConfirmSign from "../components/ConfirmSign.vue";

import FrontSubPage from "../components/SubPage.vue";

export default {
	name: "SignupPage",
	components: {
		AuthTextBox,
		AuthButton,
		FrontSubPage,
		ConfirmSign,
	},
	data() {
		return {
			name: "",
			password: "",
			confirm: "",
			terms: false,
			termsHidden: true,
			validName: false,
			validPassword: false,
			validConfirm: false,

			has_minimum_lenth: false,
			has_number: false,
			has_lowercase: false,
			has_uppercase: false,
			has_special: false,
			error: null,
		};
	},
	methods: {
		async register() {
			this.error = "slm";
			if (!this.validate()) return;

			try {
				const user = await AuthServices.register({
					name: this.name,
					password: this.password,
				});
				this.$store.dispatch("login", user.body);
				this.$router.push("/");
			} catch (err) {
				console.log("Couldn't reach api endpoint.");
			}
		},

		validate() {
			this.validateName();
			this.validatePassword();
			this.validateConfirm();
			return (
				this.validName &&
				this.validPassword &&
				this.validConfirm &&
				this.terms
			);
		},

		validateName() {
			this.validName = Boolean(this.name);
			return this.validName;
		},

		validatePassword() {
			this.has_minimum_lenth = this.password.length > 8;
			this.has_number = /\d/.test(this.password);
			this.has_lowercase = /[a-z]/.test(this.password);
			this.has_uppercase = /[A-Z]/.test(this.password);
			this.has_special = /[!@#$%^&*?)(+=._-]/.test(this.password);

			this.validPassword =
				this.has_minimum_lenth &&
				this.has_number &&
				this.has_lowercase &&
				this.has_uppercase &&
				this.has_special;
			return this.validPassword;
		},
		validateConfirm() {
			this.validConfirm = this.password === this.confirm;
			return this.validConfirm;
		},
	},
	computed: {
		validFields() {
			return this.validate();
		},
	},
};
</script>

<style scoped>
.signup-page {
	position: relative;
	display: flex;
	height: calc(100vh - 65px);
}
.signup-title-container {
	height: 100%;
	display: flex;
	width: 50%;
	margin: 0;
}
.signup-title {
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

.signup-form-container {
	flex-direction: column;
	margin: 0;
	background: var(--dark-green);
	width: 50%;
	border-radius: 0 0 0 166px;
	display: flex;
	align-items: center;
	padding-top: 3rem;
}

.signup-form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.signup-form-title {
	font-size: 36px;
	font-family: Roboto, sans-serif;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 0;
	margin-bottom: 1rem;
}

.form-item {
	margin-block: 1rem;
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: flex-start;
}

.form-item-centered {
	display: flex;
	justify-content: center;
}

.form-label {
	margin-left: 0.5rem;
	margin-bottom: 1rem;
	font-size: 24px;
	font-weight: 600;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.terms-span {
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	user-select: none;
}

.terms-checkbox {
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
}

.terms-checkmark {
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
	border-radius: 25%;
}

.terms-span:hover .terms-checkbox ~ .terms-checkmark {
	background-color: #ccc;
}

.terms-checkmark:after {
	content: "";
	position: absolute;
	display: none;
}
.terms-checkbox:checked ~ .terms-checkmark::after {
	display: block;
}
.terms-checkmark::after {
	left: 9px;
	top: 3.5px;
	width: 4px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}

.terms-link {
	display: inline-block;
	text-decoration: underline;
	transform: scale(1);
	transition: ease-in-out 0.15s;
}
.terms-link:hover {
	transform: translate(-2px, -2px);
}

.terms-span .terms-link:hover ~ .terms-checkmark {
	background-color: #eee;
}

.terms-span .terms-checkbox:checked ~ .terms-checkmark {
	background-color: var(--green);
}

.confirmable-box {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.confirm-sign {
	position: relative;
	top: 2px;
	margin-left: 1rem;
}
</style>
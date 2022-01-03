<template>
	<div class="navbar">
		<div class="navbar-left">
			<router-link to="/" class="navbar-element navbar-link"
				>Home</router-link
			>
		</div>
		<div v-if="!this.$store.state.isLoggedIn" class="navbar-right">
			<div class="navbar-element search-container">
				<form @submit.prevent="search" class="search-box">
					<input
						type="text"
						name="searchText"
						v-model="searchText"
						placeholder="Search..."
						class="search-box-text"
					/>
					<button class="search-button">
						<img
							alt="Search Icon"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/256px-Search_Icon.svg.png"
						/>
					</button>
				</form>
			</div>
			<router-link to="/signup" class="navbar-element navbar-link">
				Sign up
			</router-link>
			<router-link to="/login" class="navbar-element navbar-link"
				>Log in</router-link
			>
		</div>
		<div v-if="this.$store.state.isLoggedIn" class="navbar-right">
			<div class="navbar-element search-container">
				<form @submit.prevent="search" class="search-box">
					<input
						type="text"
						name="searchText"
						v-model="searchText"
						placeholder="Search..."
						class="search-box-text"
					/>
					<button class="search-button">
						<img
							alt="Search Icon"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/256px-Search_Icon.svg.png"
						/>
					</button>
				</form>
			</div>
			<router-link to="/logout" class="navbar-element navbar-link"
				>Logout</router-link
			>
			<router-link to="/saved" class="navbar-element navbar-link"
				>Saved Posts</router-link
			>
			<router-link
				:to="{ path: '/profile', query: { user: userId } }"
				class="navbar-element navbar-link"
			>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 60 60"
					class="profile-svg"
					fill="white"
				>
					<defs>
						<clipPath id="circular-border">
							<circle cx="30" cy="30" r="27" />
						</clipPath>
					</defs>

					<circle cx="30" cy="30" r="30" fill="black" />
					<circle cx="30" cy="23" r="11.5" />
					<circle
						cx="30"
						cy="55"
						r="20.5"
						clip-path="url(#circular-border)"
					/>
				</svg>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			searchText: "",
			userId: 0,
		};
	},
	methods: {
		search() {
			const { searchText } = this;
			console.log(searchText);
		},
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.navbar {
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	flex-direction: row;
	width: 100%;
	height: fit-content;
	background-color: var(--green);
	z-index: 100;
	height: 65px;
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	border-radius: 0px 0px 20px 20px;
	align-items: center;
}

.navbar-element {
	display: flex;
	margin-inline: 1rem;
	align-items: center;
	height: 100%;
}

.navbar-left {
	display: flex;
	align-items: center;
	height: fit-content;
	position: relative;
	margin-right: auto;
	margin-left: 1rem;
}
.navbar-right {
	display: flex;
	align-items: center;
	height: fit-content;
	position: relative;
	margin-left: auto;
	margin-right: 1rem;
}

.navbar-link {
	color: black;
	text-decoration: none;
}

.navbar-link:hover {
	cursor: pointer;
}

.search-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
}
.search-box {
	height: fit-content;
	display: flex;
	border: 2px solid black;
	padding: 4px;
	border-radius: 30px;
	background: #b3f5f1;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
.search-box-text {
	background: transparent;
	border: 0;
	width: 3rem;
	transition: ease-in-out 0.3s;
}
.search-button {
	width: 18px;
	height: auto;
	padding: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: 0;
	margin-right: 5px;
	transition: ease-in-out 0.3s;
}
.search-box-text:focus {
	outline: 0;
	width: 8rem;
}
.search-box-text:focus ~ .search-button {
	width: 24px;
}

.search-button > img {
	width: inherit;
}
.profile-svg {
	width: 50px;
}
.profile-svg * {
	width: 100%;
	height: 100%;
}
</style>
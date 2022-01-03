<template>
	<div
		class="confirm-box"
		:style="'width: ' + width + '; height: ' + width + ';'"
	>
		<svg
			v-if="show && !correct"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			:width="width"
			viewBox="0 0 503.021 503.021"
			style="enable-background: new 0 0 503.021 503.021"
			xml:space="preserve"
			class="cross"
		>
			<g fill="currentColor" stroke="none">
				<path
					d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407    c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328    c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814    c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815    C506.815,115.49,506.815,90.845,491.613,75.643z"
				/>
			</g>
		</svg>
		<svg
			v-if="show && correct"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			:width="width"
			viewBox="0 0 342.357 342.357"
			style="enable-background: new 0 0 342.357 342.357"
			xml:space="preserve"
			class="tick"
		>
			<polygon
				fill="currentColor"
				points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "
			/>
		</svg>
		<div v-if="show" class="checks-container">
			<span
				v-for="check in checks"
				:key="check.message"
				class="check-span"
			>
				<svg
					v-if="check.value"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					:width="width"
					viewBox="0 0 342.357 342.357"
					style="enable-background: new 0 0 342.357 342.357"
					xml:space="preserve"
					class="tick span-svg"
				>
					<polygon
						fill="currentColor"
						points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "
					/>
				</svg>
				<svg
					v-if="!check.value"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					:width="width"
					:height="width"
					viewBox="0 0 503.021 503.021"
					style="enable-background: new 0 0 503.021 503.021"
					xml:space="preserve"
					class="cross span-svg"
				>
					<g fill="currentColor" stroke="none">
						<path
							d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407    c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328    c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814    c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815    C506.815,115.49,506.815,90.845,491.613,75.643z"
						/>
					</g>
				</svg>
				{{ check.message }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		correct: Boolean,
		show: {
			type: Boolean,
			default: true,
		},
		width: {
			type: String,
			default: "20px",
		},
		checks: {
			type: JSON,
			default: [
				{
					message: "Default Check",
					value: false,
				},
				{
					message: "Default Check Message 2",
					value: false,
				},
			],
		},
	},
	watch: {
		correct() {
			console.log("slm");
		},
	},
};
</script>

<style scoped>
.cross {
	color: red;
}
.tick {
	color: green;
}

.checks-container {
	position: absolute;
	display: flex;
	bottom: calc(100% + 20px);

	font-size: 15px;
	flex-direction: column-reverse;

	padding-block: 10px;
	padding-inline: 5px;
	background: white;
	width: 10rem;
}

.check-span {
	display: flex;
	flex-direction: row;
	height: fit-content;
}

.span-svg {
	margin-right: 10px;
	width: 20px;
}
</style>
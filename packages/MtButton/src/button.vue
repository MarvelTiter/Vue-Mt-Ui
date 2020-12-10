<template>
	<button class="mt-button" @click="handleClick" :type="nativeType" :class="[
      size ? size :'',
      type ?  type : '',
    ]">
		<MtIcon :name="icon" v-if="icon"></MtIcon>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>

<script>
import MtIcon from "./../../MtIcon";
export default {
	name: "MtButton",
	data() {
		return {};
	},
	props: {
		type: {
			type: String,
			default: "default",
		},
		size: String,
		icon: {
			type: String,
			default: "",
		},
		nativeType: {
			type: String,
			default: "button",
		},
		acceptEnter: Boolean,
		acceptKey: String,
	},
	components: {
		MtIcon,
	},
	computed: {},
	methods: {
		handleClick(e) {
			this.$emit("click", e);
		},
		InputStatus() {
			var nodes = document.querySelector(":focus");
			return nodes != null;
		},
		keyEvent(e) {
			var isOnInput = this.InputStatus();
			if (this.acceptEnter) {
				if (e.keyCode === 13) this.$emit("click", e);
			} else if (this.acceptKey) {
				if (isOnInput) return;
				var kc = this.acceptKey.toUpperCase().charCodeAt(0);
				if (e.keyCode === kc) {
					this.$emit("click", e);
				}
			}
		},
	},
	mounted() {
		window.addEventListener("keydown", this.keyEvent);
	},
	destroyed() {
		window.removeEventListener("keydown", this.keyEvent);
	},
};
</script>
<style scoped lang="scss">
.mt-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 10px 15px;
	font-size: 14px;
	border-radius: 4px;
	* {
		vertical-align: middle;
	}
	&:hover {
		color: #409eff;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
	&:active {
		color: #3a8ee6;
		border-color: #3a8ee6;
		outline: none;
	}
	&.primary {
		color: #fff;
		background-color: #409eff;
		border-color: #409eff;
		&:hover {
			background: #66b1ff;
			border-color: #66b1ff;
			color: #fff;
		}
		&:active {
			background: #3a8ee6;
			border-color: #3a8ee6;
			color: #fff;
		}
	}
	&.success {
		color: #fff;
		background-color: #67c23a;
		border-color: #67c23a;
		&:hover {
			background: #85ce61;
			border-color: #85ce61;
			color: #fff;
		}
		&:active {
			background: #5daf34;
			border-color: #5daf34;
			color: #fff;
		}
	}

	&.medium {
		padding: 9px 14px;
		font-size: 12px;
		border-radius: 3px;
	}

	&.small {
		padding: 7px 12px;
		font-size: 12px;
		border-radius: 3px;
	}

	&.mini {
		padding: 4px 10px;
		font-size: 12px;
		border-radius: 3px;
	}
	&.text {
		border-color: transparent;
		color: #409eff;
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		&:hover {
			color: #66b1ff;
			border-color: transparent;
			background-color: transparent;
		}
		&:active {
			color: #3a8ee6;
			background-color: transparent;
		}
	}
}
</style>

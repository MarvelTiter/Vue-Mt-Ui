<template>
	<transition name="fade" @after-leave="handleLeave">
		<div :class="[
        'mt-message',
        type ? `mt-message__${ type }` : '',
        center ? 'is-center' : ''
      ]" :style="top" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
			<slot>
				<MtIcon :name="icon"></MtIcon>
				<p v-if="!dangerouslyUseHTMLString" class="mt-message__content">{{ message }}</p>
				<p v-else v-html="message" class="mt-message__content"></p>
			</slot>
		</div>
	</transition>
</template>

<script>
import MtIcon from "./../../MtIcon";
const Icon = {
	success: "success1",
	error: "error_3",
	warning: "warning1",
	info: "info1",
};
export default {
	name: "MtMessage",
	data() {
		return {
			visible: false,
			verticalOffset: 20,
			duration: 3000,
			message: "",
			timer: null,
			onClose: null,
			type: "info",
			dangerouslyUseHTMLString: false,
			center: false,
			closed: false,
		};
	},
	watch: {
		closed(newVal) {
			if (newVal) {
				this.visible = false;
			}
		},
	},
	computed: {
		top() {
			return {
				top: `${this.verticalOffset}px`,
			};
		},
		icon() {
			return Icon[this.type];
		},
	},
	components: {
		MtIcon,
	},
	methods: {
		handleLeave() {
			this.$destroy(true);
			if (this.$el.parentNode != null)
				this.$el.parentNode.removeChild(this.$el);
		},
		close() {
			this.closed = true;
			if (typeof this.onClose === "function") {
				this.onClose(this);
			}
		},
		clearTimer() {
			clearTimeout(this.timer);
		},

		startTimer() {
			if (this.duration > 0) {
				this.timer = setTimeout(() => {
					if (!this.closed) {
						this.close();
					}
				}, this.duration);
			}
		},
	},
	mounted() {
		if (document.body != null) document.body.appendChild(this.$el);
		this.startTimer();
	},
};
</script>
<style scoped lang="scss">
.mt-message {
	min-width: 300px;
	box-sizing: border-box;
	border-radius: 4px;
	border: 1px solid #ebeef5;
	position: fixed;
	left: 50%;
	top: 20px;
	transform: translateX(-50%);
	background-color: #edf2fc;
	transition: opacity 0.3s, transform 0.4s, top 0.4s;
	overflow: hidden;
	padding: 15px 15px 15px 20px;
	display: flex;
	align-items: center;
	z-index: 3001;

	p {
		margin: 0;
		margin-left: 15px;
	}
	.mt-message__content {
		padding: 0;
		font-size: 14px;
		line-height: 1;
	}
}
.mt-message__success {
	background-color: #f0f9eb;
	border-color: #e1f3d8;
	.mt-message__content {
		color: #67c23a;
	}
	.mt-icon {
		color: #67c23a;
	}
}

.mt-message__error {
	background-color: #fef0f0;
	border-color: #fde2e2;
	.mt-message__content {
		color: #f56c6c;
	}
	.mt-icon {
		color: #f56c6c;
	}
}

.mt-message__warning {
	background-color: #fdf6ec;
	border-color: #faecd8;
	.mt-message__content {
		color: #e6a23c;
	}
	.mt-icon {
		color: #e6a23c;
	}
}

.mt-message__info {
	background-color: #fef0f0;
	border-color: #fde2e2;
	.mt-message__content {
		color: #909399;
	}
	.mt-icon {
		color: #909399;
	}
}
</style>

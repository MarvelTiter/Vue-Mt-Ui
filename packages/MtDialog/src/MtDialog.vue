<template>
	<transition name="fade">
		<div class="mt-dialog-wrapper" v-show="show" style="z-index: 2001" @click.self="blankClose">
			<div class="mt-dialog" :style="style">
				<div class="mt-dialog-header" :class="{ 'mt-dialog-center': isCenter }">
					<slot name="header">
						<span class="mt-dialog-title">{{ digTitle }}</span>
					</slot>
					<input class="mt-dialog-headerbtn" type="button" value="X" @click.self="close" />
				</div>
				<div class="mt-dialog-body">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>

</template>

<script>
export default {
	name: "MtDialog",
	props: {
		title: {
			type: String,
			default: "",
		},
		top: {
			type: String,
			default: "15vh",
		},
		center: {
			type: Boolean,
			default: true,
		},
		visible: {
			type: Boolean,
			required: true,
		},
		width: {
			type: String,
			default: "50%",
		},
		abortOutOfAreaClick: Boolean,
	},
	data: function () {
		return {
			show: this.visible,
			horCenter: this.center,
			topVh: this.top,
			digTitle: this.title,
		};
	},
	watch: {
		visible: function (v) {
			this.show = v;
		},
		title: function (v) {
			this.digTitle = v;
		},
	},
	computed: {
		isCenter: function () {
			return this.horCenter;
		},
		style: function () {
			var s = {};
			s.width = this.width;
			s["margin-top"] = this.top;
			return s;
		},
	},
	methods: {
		close: function () {
			this.show = false;
			this.$emit("update:visible", this.show);
		},
		blankClose() {
			if (!this.abortOutOfAreaClick) {
				this.close();
			}
		},
	},
};
</script>

<style scope>
.mt-dialog-wrapper {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: auto;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.3);
	/* display: none; */
}

.mt-dialog {
	position: relative;
	margin: 0 auto 50px;
	box-sizing: border-box;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	background-color: #fff;
}

.mt-dialog-header {
	padding: 20px 20px 10px;
}

.mt-dialog-header span,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 24px;
	font-size: 18px;
	color: #303133;
}

.mt-dialog-title {
	line-height: 24px;
	font-size: 18px;
	color: #303133;
}

.mt-dialog-headerbtn {
	position: absolute;
	top: 20px;
	right: 20px;
	padding: 0;
	background: 0 0;
	border: none;
	outline: 0;
	cursor: pointer;
	font-size: 16px;
	color: #909399;
}

.mt-dialog-center {
	text-align: center;
}

.mt-dialog-body {
	padding: 30px 20px;
	color: #606266;
	font-size: 14px;
	word-break: break-all;
}

.mt-dialog-fade-enter-active {
	transition: all 0.3s ease;
}
.mt-dialog-fade-enter, .mt-dialog-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
	opacity: 0;
}
</style>

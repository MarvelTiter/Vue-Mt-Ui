<template>
	<div>
		<div>
			<slot></slot>
		</div>
		<div class="mt-image-preview-wrapper" v-show="show" ref="ImgBoardContainer">
			<div class="mt-image-preview" @click.self="close">
				<div v-mt-loading="loading" style="position:absolute;" class="waiting" v-show="loading"></div>
				<img draggable="false" :src="ShowImage" ref="ImgBoard" @click.stop :style="style" @mousewheel="Scale" @mousedown="drag" />
				<div class="mt-image-preview-nav pre" @click.stop="index--"></div>
				<div class="mt-image-preview-nav next" @click.stop="index++"></div>
			</div>
			<div class="mt-image-preview-message" @click.stop>
				<p>
					<slot name="detial" :item="currentItem"></slot>
				</p>
				<p>{{ index + 1 }} / {{ list.length }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MtImagePreview",
	props: ["imageList", "visible", "activeIndex", "src"],
	data: function () {
		return {
			show: this.visible,
			index: this.activeIndex,
			list: this.imageList,
			loading: true,
			style: {
				left: null,
				top: null,
			},
			Pos: {
				Left: 0,
				Top: 0,
			},
			offset: {
				X: 0,
				Y: 0,
			},
			enabledDrag: false,
		};
	},
	watch: {
		show: function (newValue) {
			this.$emit("update:visible", newValue);
		},
		visible: function (newValue) {
			this.show = newValue;
		},
		activeIndex: function (newValue) {
			this.index = newValue;
		},
		index: function (newValue) {
			this.style.left = null;
			this.style.top = null;
			if (newValue < 0) this.index = this.imageList.length - 1;
			else if (newValue >= this.imageList.length) this.index = 0;
		},
		imageList: function (newValue) {
			this.list = newValue;
			this.loading = this.list.length == 0;
		},
	},
	computed: {
		ShowImage: function () {
			var img = this.list[this.index];
			if (typeof img === "object") img = this.list[this.index][this.src];
			return img;
		},
		currentItem: function () {
			return this.list[this.index] || {};
		},
	},
	methods: {
		close: function () {
			this.show = false;
			var img = this.$refs["ImgBoard"];
			img.src = "";
		},
		Scale: function (e) {
			var img = this.$refs["ImgBoard"];
			var w = img.width;
			img.style.width = (1 + e.wheelDelta / 1200) * w + "px";
		},
		drag: function (e) {
			var img = this.$refs["ImgBoard"];
			//var diffX = e.clientX - img.offsetLeft;
			//var diffY = e.clientY - img.offsetTop;
			var diffX = e.clientX - this.offset.X; //this.style.left.replace('px','');
			var diffY = e.clientY - this.offset.Y; //this.style.top.replace('px', '');
			var callBack = function (event) {
				this.Pos.Left = event.clientX - diffX;
				this.Pos.Top = event.clientY - diffY;
				this.style.left = this.Pos.Left + "px";
				this.style.top = this.Pos.Top + "px";
			}.bind(this);
			var body = document.body;
			body.addEventListener("mousemove", callBack);
			var remove = function () {
				this.offset.X = this.Pos.Left;
				this.offset.Y = this.Pos.Top;
				body.removeEventListener("mousemove", callBack);
			}.bind(this);
			img.addEventListener("mouseup", remove);
			img.addEventListener("mouseout", remove);
		},
	},
};
</script>

<style scope lang="scss">
.mt-image-preview-wrapper {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
}

.mt-image-preview {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.waiting {
		position: relative;
		width: 100%;
	}
	img {
		position: relative;
		width: 80%;
		&:hover {
			cursor: move;
		}
	}
}

.mt-image-preview-nav {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	position: absolute;
	border: 1px solid #c7bfbf;
}

.mt-image-preview-nav.pre {
	left: 5%;
}

.mt-image-preview-nav.next {
	right: 5%;
}

.mt-image-preview-nav.pre::after {
	content: "";
	display: block;
	width: 30px;
	height: 30px;
	box-sizing: border-box;
	border-top: 6px solid #c7bfbf;
	border-left: 6px solid #c7bfbf;
	transform: translate(20px, 15px) rotate(-45deg);
}

.mt-image-preview-nav.next::after {
	content: "";
	display: block;
	width: 30px;
	height: 30px;
	box-sizing: border-box;
	border-bottom: 6px solid #c7bfbf;
	border-right: 6px solid #c7bfbf;
	transform: translate(10px, 15px) rotate(-45deg);
}

.mt-image-preview-nav:hover {
	box-shadow: 0 0 5px #c7bfbf;
	cursor: pointer;
}

.mt-image-preview-message {
	position: relative;
	bottom: 10%;
	font-size: 20px;
	color: #fff;
	text-align: center;
}
</style>

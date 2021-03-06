<template>
	<div class="mt-upload">
		<input type="file" hidden ref="file" @change="selectedFile" :multiple="multiple" />
		<div style="text-align:left;">
			<mt-button @click="handleClick" type="primary" :disabled="files.length === limit">选择文件</mt-button>
			<mt-button v-if="!autoUpload" @click="upload" type="info">上传</mt-button>
			<slot name="tip"></slot>
		</div>
		<div style="text-align:left;">
			<ul class="file-list">
				<li v-for="(f,i) of files" :key="i">
					<MtIcon name="files"></MtIcon>
					<span class="right">
						<MtIcon name="success1" :class="{done:f.done}"></MtIcon>
						{{f.process | Format}}
					</span>
					<span>{{f.file.name}}</span>
					<span class="close" @click="remove(f)">
						<MtIcon name="error"></MtIcon>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import MtButton from "./../../MtButton";
import MtInput from "./../../MtInput";
import MtIcon from "./../../MtIcon";
import AjaxFile from "./ajax";
export default {
	name: "MtUpload",
	props: {
		accept: String,
		multiple: Boolean,
		autoUpload: Boolean,
		action: String,
		limit: Number,
		headers: Array,
		beforeUpload: {
			type: Function,
			default: function () {
				return function () {
					return true;
				};
			},
		},
	},
	data() {
		return {
			files: [],
			uploader: {},
		};
	},
	filters: {
		Format(value) {
			return value.toFixed(0) + "%";
		},
	},
	computed: {},
	components: { MtButton, MtInput, MtIcon },
	methods: {
		GetUploadOption(file) {
			return {
				onProgress: (e) => {
					file.process = e.percent;
					if (e.percent >= 100) {
						file.done = true;
					}
					this.$emit("on-progress", e);
				},
				onError: (e) => {
					this.$emit("on-error", e);
				},
				onSuccess: (res) => {
					this.$emit("on-success", res, file, this.files);
				},
				headers: this.headers,
				action: this.action,
				data: {},
				filename: file.name,
				file: file.file,
			};
		},
		handleClick() {
			this.uploader.click();
		},
		upload() {
			var check = this.beforeUpload(this.files);
			if (!check) return;
			this.files.map((f) => {
				if (f.done) return;
				this.post(f);
			});
		},
		post(file) {
			var opt = this.GetUploadOption(file);
			AjaxFile(opt);
		},
		remove(file) {
			var index = this.files.indexOf(file);
			if (index > -1) {
				this.files.splice(index, 1);
				this.$emit("on-remove", file, this.files);
			}
		},
		selectedFile() {
			var fs = this.uploader.files;
			if (fs.length + this.files.length > this.limit) {
				alert("选择文件数量超出限制!");
				return;
			}
			fs.forEach((f) => {
				if (!this.exit(f)) {
					this.files.push({
						done: false,
						process: 0.0,
						file: f,
					});
				}
			});
			if (this.autoUpload) {
				this.upload();
			}
		},
		exit(file) {
			var exit = false;
			this.files.forEach((ff) => {
				var f = ff.file;
				if (
					f.name === file.name &&
					f.lastModified === file.lastModified
				) {
					exit = true;
				}
			});
			return exit;
		},
	},
	mounted() {
		this.uploader = this.$refs["file"];
	},
};
</script>
<style scoped lang="scss">
.mt-button {
	margin-right: 10px;
}
.file-list {
	span {
		margin-left: 5px;
	}

	.right {
		* {
			font-size: 12px;
		}
	}

	.done {
		color: #67c23a;
	}
	.close {
		margin-left: 20px;
		* {
			font-size: 12px;
		}
		&:hover {
			cursor: pointer;
			color: crimson;
		}
	}
}
</style>

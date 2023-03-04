<template>
	<view class="pics">
		
		<!-- 左侧分类栏 -->
		<scroll-view class="left" scroll-y="true" >
			<view @click="leftClickHandle(index,cat.cat_id)" :class="active===index?'active':''"  v-for="(cat,index) in categories" :key="cat.cat_id">
				{{cat.cat_name}}
			</view>
		</scroll-view>
		
		<!-- 右侧详情 -->
		<scroll-view class="right" scroll-y="true" >
			<view v-for="(cat,index) in info" :key="cat.cat_id">
				<text> {{cat.children[0].cat_name}} </text>
				<image @click="previewImg(cat.children[0].cat_icon)" :src="cat.children[0].cat_icon"></image>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories:[],
				info:[],
				active:0
			}
		},
		onLoad() {
			this.getPicsCate()
			this.leftClickHandle(0)
		},
		methods: {
			// 获取分类数据
			getPicsCate() {
				const res = this.$myRequest({
					url: '/v1/categories'
				}).then(result => {
					this.categories = result.data.message;
					// console.log(this.info);
				})
			},
			// 获取右侧数据
			leftClickHandle(index) {
				this.active = index
				const res = this.$myRequest({
					url: '/v1/categories'
				}).then(result => {
					this.info = result.data.message[index].children;
					// console.log(this.info);
				})
			},
			// 点击预览图片
			previewImg(current) {
				const urls = this.info.map(item => {
					return item.children[0].cat_icon
				})
				// console.log(urls);
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.pics {
		display: flex;
		height: 100%;
		.left {
			width: 220rpx;
			border-right: 1px solid #eee;
			// height: 100%;
			view {
				// margin-right: 5px;
				height: 50px;
				line-height: 50px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
		}
		.active {
			background-color: $shop-color;
			color: #fff;
		}
		.right {
			width: 600rpx;
			height: 100%;
			text-align: center;
			text {
				display: block;
				margin-top: 10px;
			}
			image {
				width: 75%;
				height: 500rpx;
				border-bottom: 2px solid #eee;
			}
		}
	}
</style>

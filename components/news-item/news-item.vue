<template>
	<view class="news">
		<view class="news_item" v-for="(item,index) in Message" :key="index" @click="navigator(index)">
			<image :src="item.image_src"></image>
			<view class="info">
				<view class="tit">
					{{item.name}}
				</view>
				<view class="type">
					{{Types[index]}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['Message','Types'],
		data() {
			return {
				
			};
		},
		methods: {
			navigator(id) {
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news {
		flex-wrap: wrap;
		width: 750rpx;
		display: flex;
		justify-content: space-between;
	}
	.news_item {
		// display: flex;
		width: 330rpx;
		margin: 10rpx 20rpx;
		text-align: center;
		border-bottom: 2px solid #eee;
		image {
			width: 255rpx;
			height: 380rpx;
		}
		.info {
			display: flex;
			justify-content: space-between;
			text-align: center;
			height: 40px;
			line-height: 40px;
		}
		.tit {
			margin-left: 25px;
			font-size: 30rpx;
		}
		.type {
			margin: 6px 16px;
			background-color: $shop-color;
			width: 35px;
			height: 25px;
			line-height: 25px;
			color: #fff;
			font-size: 22rpx;
			border-radius: 10rpx;
		}
			
	}
</style>
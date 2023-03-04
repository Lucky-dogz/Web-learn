<template>
	<view class="goods_list">
		
		<view class="goods_item" v-if="good.goods_big_logo" v-for="good in goods" :key="good.goods_id" @click="navigator(good.goods_id)">
			<image :src="good.goods_big_logo"></image>
			<view class="price">
				<text>${{good.goods_price}}</text>
				<text>$2499</text>
			</view>
			<view class="name">
				{{good.goods_name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		methods: {
			navigator(goods_id) {
				this.$emit('goGoodsDetail',goods_id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		padding: 0 15rpx;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item {
			background-color: #fff;
			width: 350rpx;
			margin: 10rpx 0;
			padding: 20rpx;
			box-sizing: border-box;
			image {
				display: block;
				width: 80%;
				height: 150px;
				margin: 5rpx auto;
			}
			.price {
				color: $shop-color;
				font-size: 36rpx;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.name {
				font-size: 28rpx;
				line-height: 45rpx;
				padding-bottom: 12rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
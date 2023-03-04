<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay interval=3000> 
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			
			<view class="nav_item" v-for="(nav,index) in navs" :key="index" @click="navItemClick(nav.path)">
					
				<text>{{nav.title}}</text>
			</view>
			
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList :goods="goods" @goGoodsDetail="goGoodsDetail"></goodsList>
		</view>
	
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{ goodsList },
		data() {
			return {
				swipers:[], // 轮播图
				goods:[], 	// 商品列表
				navs:[ 		// 路由导航
					{
						icon: "iconfont icon-ziyuan",
						title: "Tom商城",
						path: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
				
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图的数据
			getSwipers() {
				// 调用请求方法
				const res = this.$myRequest({
					url: '/v1/home/swiperdata'
				}).then(result => {
					this.swipers = result.data.message
					// console.log(this.swipers);
				})
			},
			// 获取热门商品列表数据
			getHotGoods() {
				const res = this.$myRequest({
					url: '/v1/goods/search?pagenum=1'
				}).then(result => {
					this.goods = result.data.message.goods;
					// console.log(this.goods);
				})
			},
			// 导航点击跳转
			navItemClick(path) {
				// console.log(path);
				uni.navigateTo({
					url:path
				})
			},
			// 商品详情跳转
			goGoodsDetail(goods_id) {
				// console.log(goods_id);
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?goods_id='+goods_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 100%;
			height: 380rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			padding-bottom: 10rpx;
			view { 
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 48rpx;
			}
			.icon-tupian {
				font-size: 42rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.hot_goods {
		background-color: #eee;
		overflow: hidden;
		margin-top: 10rpx;
		.tit {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 15px;
			font-weight: 600;
			background-color: #fff;
			margin: 10rpx 0;
		}
		
	}
</style>

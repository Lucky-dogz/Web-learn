<template>
	<view class="goods_detail">
		<!-- 详情轮播图 -->
		<swiper indicator-dots>
			<swiper-item  v-for="img in swipers" :key="img.pics_id" >
				<image @click="previewImg(img.pics_big)" :src="img.pics_big"></image>
			</swiper-item>
		</swiper>
		
		<!-- 商品价格和名字 -->
		<view class="box1">
			<view class="price">
				<text class="new">￥{{infos.goods_price}}</text>
				<text class="old">￥{{Math.round(infos.goods_price*(1+0.1))}}</text>
			</view>
			<view class="good_name">{{infos.goods_name}}</view>
		</view>
		
		<view class="line"></view>
		
		<view class="box2">
			<text>货号 : {{infos.goods_id}}</text>
			<text>剩余数量 : {{infos.goods_number}}</text>
		</view>
		 
		<view class="box2">
			<text>添加时间 : {{infos.add_time,5 | formatDate}}</text>
			<text>更新时间 : {{infos.upd_time,12 | formatDate}}</text>
		</view>
		
		<view class="line"></view>
		
		<view class="box3">
			<text>详细介绍</text>
			<rich-text :nodes="infos.goods_introduce" @itemclick="goImgDetials"></rich-text>
		</view>
		
		<view class="line"></view>
		
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
		
	</view>
</template>

<script>
	export default {
		// components: {uni-goods-nav}
		data() {
			return {
				id:0,
				infos:[], //商品详情
				swipers:[] ,//轮播图
				options: [
					{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'shop',
						text: '店铺',
						info: 1,
						infoBackgroundColor:'#ff0000',
						infoColor:"fff"
					},
					{
						icon: 'cart',
						text: '购物车',
						info: 3
					}],
				buttonGroup: [{
				  text: '加入购物车',
				  backgroundColor: '#ff0000',
				  color: '#fff'
				},
				{
				  text: '立即购买',
				  backgroundColor: '#ffa200',
				  color: '#fff'
				}]
			}
		},
		filters: {
			formatDate (dateNum,x) {
				// console.log(x,y);
				var date = new Date(dateNum)
				// console.log(date);
				const year = date.getFullYear() + 52
				let month = (date.getMonth() + Math.round(Math.random(5,x)*10)).toString().padStart(2,0)
				if (x === 5) month = (date.getMonth() + Math.round(Math.random(0,x)*10)).toString().padStart(2,0)
				const day = date.getDate().toString().padStart(2,0)
				// console.log(year,month,day);
				return year + '-' + month + '-' + day
			}
		},
		onLoad(options) {
			// console.log(options.goods_id);
			this.id = options.goods_id
			this.getSwipers()
		},
		methods: {
			// 轮播图
			getSwipers() {
				const res = this.$myRequest({
					url: '/v1/goods/detail?goods_id='+this.id
				}).then(result => {
					this.infos = result.data.message;
					this.swipers = result.data.message.pics
					// console.log(this.infos.goods_introduce);
				})
			},
			// 点击预览图片
			previewImg(current) {
				const urls = this.swipers.map(item => {
					return item.pics_big
				})
				// console.log(urls);
				uni.previewImage({
					current,
					urls
				})
			},
			// 富文本预览
			goImgDetials(e) {
				let item = e.detail.node;
				if (item.name == "img") {
					uni.previewImage({
						urls: [item.attrs.src],
						longPressActions: {
							itemList: ["保存到相册", "识别二维码"],
							itemColor: "#007AFF",
							success: function(data) {
								let {
									tapIndex,
									index
								} = data;
								// tapIndex 第几个按钮
								// index 第几张图片
								//#ifdef APP-PLUS
								if (tapIndex == 0) {
									// 保存到相册
									plus.gallery.save(item.attrs.src, () => {
										uni.showToast({
											icon: "none",
											title: "保存成功!"
										})
									}, () => {
										uni.showToast({
											icon: "none",
											title: "保存失败!"
										})
									})
		
								} else {
									// 现将文件下载到本地
									uni.downloadFile({
										url: item.attrs.src,
										success: (args) => {
											// 扫描二维码
											plus.barcode.scan(
												args.tempFilePath,
												(code, url) => {
													// 如果识别成功
													if (code == 0) {
														// 打开扫描结果
														plus.runtime.openURL(url)
													}
												},
												(err) => {
													uni.showToast({
														icon: 'none',
														title: "图中没有可识别的二维码"
													})
													console.log(err, 'err');
												},
												[plus.barcode.QR],
												true)
										},
										fail: () => {
		
										}
									})
								}
								//#endif
							}
						}
					})
				}
			},
			
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
		    buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.box1 {
			padding: 10px;
			.price {
				line-height: 80rpx;
				.new {
					font-size: 40rpx;
					color: red;
				}
				.old {
					margin-left: 10px;
					font-size: 32rpx;
					color: #ccc;
					text-decoration: line-through;
				}
			}
			.good_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.box2 {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 30rpx;
			color: #757575;
			text {
				margin: 10px 10px;
			}
		}
		.box3 {
			padding-bottom: 15px;
			text {
				display: block;
				margin: 10px;
				color: $shop-color;
			}
		}
	}
	
	.goods_nav {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	
	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
</style>
<template>
	<view class="goods_list">
		<goodsList :goods="goods" @goGoodsDetail="goGoodsDetail"></goodsList>
		<view class="isOver" v-if="isOver">
			------ 没有啦，一边玩去吧~ ------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components: { goodsList },
		data() {
			return {
				pageindex:1,
				goods:[],
				isOver:false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		// 上拉刷新
		onReachBottom() {
			// console.log("触底啦");
			if (this.isOver) {
				return
			}
			this.pageindex++;
			this.getGoodsList();
		},
		// 下拉刷新
		onPullDownRefresh() {
			// console.log("下拉刷新了");
			this.pageindex = 1
			this.flag = false
			this.goods = []
			setTimeout(()=> {
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh() //停止刷新
				})
			}, 400);
		},
		methods: {
			// 获取商品列表数据
			getGoodsList(callback) {
				const res = this.$myRequest({
					url: '/v1/goods/search?pagenum=' + this.pageindex
				}).then(result => {
					if (this.pageindex > result.data.message.total) { //result.data.message.total
						this.isOver = true
						return
					}
					this.goods = [...this.goods,...result.data.message.goods];
					callback && callback()
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
	.goods_list {
		background-color: #eee;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>

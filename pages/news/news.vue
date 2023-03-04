<template>
	<view>
		<view>
			<newsItem @itemClick='goDetail' :Message="Message" :Types="Types"></newsItem>
		</view>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		components:{ newsItem },
		data() {
			return {
				Message:[],
				Types:[]
			}
		},
		onLoad() {
			this.getMessage()
		},
		methods: {
			// 获取数据
			getMessage() {
				const res = this.$myRequest({
					url: '/v1/home/floordata'
				}).then(result => {
					result.data.message.map(item=>{
						for (var i = 0; i < item.product_list.length; i++) {
							let x = item.product_list[i].navigator_url.indexOf('=')
							this.Types.push(item.product_list[i].navigator_url.substring(x+1,item.product_list[i].length))
							this.Message.push(item.product_list[i])
						}
					})
					// console.log(this.Message);
				})
			},
			// 商品详情
			goDetail(id) {
				// console.log(id);
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">

</style>

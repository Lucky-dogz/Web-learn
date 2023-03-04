<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="callPhone">联系电话：400-618-9090（点击拨打）</view>
			<view>联系地址：广东省佛山市南海区狮山镇南海软件信息园桃园西路</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.028439, //经纬度
				latitude: 23.146825,
			}
		},
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber:"400-618-9090"
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		font-size: 30rpx;
		view {
			padding: 15rpx 20rpx;
			line-height: 70rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>

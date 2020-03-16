<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xeb99;</div>
		</div>
		<div class="header-input">个人信息</div>
		<div class="header-right">
			<span class="iconfont more-icon">&#xeb98;</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}	
</script>

<style lang="stylus" scoped>
	.header
		display: flex
		line-height: .86rem
		background: #00bcd4
		color: #fff
		.header-left
			width: .86rem
			float: left
			text-align: center
			
		.header-input
			flex: 1
			height: .62rem
			line-height: .62rem
			padding-left: .1rem
			padding-right: .1rem
			margin-top: .12rem
			margin-bottom: .12rem
			border-radius: .1rem
			background: #fff
			color: #ccc
			text-align: center
		.header-right
			width: .86rem
			float: right
			text-align: center
</style>
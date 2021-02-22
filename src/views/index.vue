<template>
    <div>
		<h2>
			首页 - by ctcode
		</h2>
		<!-- 加载中状态组件 -->
		<a-spin/>
	</div>
</template>

<script>
export default {
	created () {
		this.$request({
			url: "https://api.github.com/users",
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	}
}
</script>

<style>
</style>
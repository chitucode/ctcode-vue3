<template>
    <div>
		<h2>
			首页 - by ctcode
		</h2>
		<CtButton>传统按钮</CtButton>
		<CtButtonJsx>JSX按钮</CtButtonJsx>
	</div>
</template>

<script>
import CtButton from "@/components/CtButton.vue";
import CtButtonJsx from "@/components/CtButtonJsx";

export default {
    components: {
		CtButton,
        CtButtonJsx,
    },
};
</script>

<style>
</style>
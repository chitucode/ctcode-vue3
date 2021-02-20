<template>
    <button class="primary">
        <slot/>
    </button>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
    .primary {
        background: #ff0000;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 5px 15px;
        outline: none;
        cursor: pointer;
        margin: 5px;

        &:hover {
            background: darken(#ff0000, 5%)
        }
    }
</style>
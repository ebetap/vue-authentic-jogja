<template>
    <input type="submit" value="Search" class="btn-search">
</template>

<script>
    export default {
        name: 'ButtonSearch'
    }
</script>

<style scoped>
    .btn-search{
        padding: 12px 10px;
        background: #cf000f;
        width: 100px;
        border-radius: 7px;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
        cursor: pointer;
        border: 0;
        color:#fff;
    }
</style>
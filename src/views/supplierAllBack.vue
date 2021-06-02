<template>
<div class="supplierAllBack">跳轉中請稍後</div>
</template>

<script>
export default{
    mounted(){
        this.$router.replace({path:'/product',})
    }
}
</script>

<style>
.supplierAllBack{
    margin:100px auto;
    font-size:24px;
    text-align:center;
}
</style>
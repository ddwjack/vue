<template>
    <div>{{ token }}</div>
</template>

<script>
export default {
 name: 'HelloWorld',
data () {
    return {
         token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    }
}
</script>
<style scoped>
</style>
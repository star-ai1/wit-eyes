<template>
    <div class="test">
        <Header @SignIn="handleSignIn"/>
    </div>
</template>

<script>
import Header from "./"
export default {
    components:{
        Header,
    },
    methods:{
        handleSignIn(e){
            console.log(e);
        }
    }
}
</script>

<style lang="less">
@import "~@/styles/global.less";
    .test{
        width: 100%;
        height: 80px;
        border: 1px solid;
    }
</style>
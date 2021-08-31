<template>
  <div class="sign-in-container">
    <form action="" ref="form">
      <img src="@/assets/logo_ico.png" alt="" width="50px" />
      <div class="account-container">
        <label for="accountname">昵称：</label>
        <input type="text" name="" id="accountname" />
      </div>
      <div class="mail-container">
        <label for="mail">邮箱：</label>
        <input type="text" name="" id="mail" />
      </div>
      <div class="account-container">
        <label for="account">账号：</label>
        <input type="text" name="" id="account" />
      </div>
      <div class="password-container">
        <label for="password">密码：</label>
        <input type="password" name="" id="password" />
      </div>
      <div class="password-container">
        <label for="repassword">确认密码：</label>
        <input type="password" name="" id="repassword"  />
      </div>
      <div @click="handleSignUp" class="btn">注册</div>
      <div class="close" @click="handleClose">
        <span></span>
        <span></span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  methods:{
    handleClose(){
      this.$emit("SignUpClose");
    },
    handleSignUp(){
      this.$Message({
        content:'服务器繁忙',
        container:this.$refs.form,
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.sign-in-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  form {
    padding: 20px 10px 33px;
    width: 400px;
    background: #fff;
    position: absolute;
    left: 50vw;
    top: 50vh;
    // left: 50%;
    // top: 300px;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 20px;
    position: relative;
    .account-container,
    .password-container {
      height: 25px;
      line-height: 25px;
      margin: 31px 0;
    }
    label{
        width: 80px;
        display: inline-block;
    }
    input {
      outline: none;
      height: 25px;
      width: 225px;
      box-sizing: border-box;
    }
    .btn {
      width: 150px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      background: @primary;
      outline: none;
      border: none;
      border-radius: 20px;
      margin: 0 auto;
    }

    /* 关闭按钮 */
    .close {
      position: absolute;
      top: 30px;
      right: 20px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      span {
        position: absolute;
        width: 20px;
        height: 2px;
        background: #000;
        display: block;
        &:nth-of-type(1) {
          transform: rotateZ(45deg);
        }
        &:nth-of-type(2) {
          transform: rotateZ(-45deg);
        }
      }
    }
  }
}
</style>
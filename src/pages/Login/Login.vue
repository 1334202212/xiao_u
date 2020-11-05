<template>
    <div id="login-box">
           <h1>登录页</h1>
           <em>手机号:</em> <input type="text" v-model="phone"> <br>
           <em>账号:</em> <input type="text" v-model="name"> <br>
           <em>密码:</em> <input type="password" v-model="psd"><br>
              <router-link to="./register" tag="span">没有账号<i>去注册？</i></router-link>
            <button @click="login">提交</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              phone:'',
              name:'',
              psd:'',
            }
        },
        methods: {
             login(){
                 this.$http.post('/login',{phone:this.phone,password:this.psd}).then(res=>{
                      if(res.data.code == 200){
                          this.$store.commit('setuser',res.data.list)
                          this.$router.back();
                      }
                          console.log(res)
                 })
             }
        },
    }
</script>

<style lang='stylus' scoped>
#login-box
         em
           width 1.3rem
           height .5rem
           font-style normal
           display inline-block
           text-align right 
         input  
             border .01rem solid black 
         i 
          text-decoration underline
          font-style normal
         button 
               width .7rem
               height .7rem
               line-height .7rem
               text-align center
               color #fff
               background-color #e43a3d
</style>
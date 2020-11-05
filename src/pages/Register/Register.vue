<template>
    <div id="login-box">
           <h1>注册页</h1>
           <em>手机号:</em> <input type="text" v-model="phone"> <br>
           <em>账号:</em> <input type="text" v-model="name"> <br>
           <em>密码:</em> <input type="password" v-model="psd"><br>
               <router-link to="./login" tag="span">已有账号<i>去登录？</i></router-link>
            <button @click="Register">提交</button>
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
       Register(){
           if(this.phone == '' || this.name == '' || this.psd == '') return
           this.$http.post('/register',{phone:this.phone,nickname:this.name,password:this.psd}).then(res=>{
                    console.log(res)
           })
       } 
    },
    };
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
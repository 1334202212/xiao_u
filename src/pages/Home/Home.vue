<template>
    <div id="home-box">
         <header>
             <router-view></router-view>
         </header>

         <footer>
              <router-link to="/home/index" tag="div">
                    <p class="iconfont icon-shouye"></p>
                    <span>首页</span>
              </router-link>

             <router-link to="/home/car" tag="div">
                 <p class="iconfont icon-gouwuche"></p>
               <span>购物车</span>
             </router-link>

             <router-link to="/home/my" tag="div">
                    <p class="iconfont icon-denglu"></p>
                   <span>我的</span>
                
             </router-link>
         </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
 #home-box
     width 100%
     height 100%
     display flex
     flex-direction column
     header{
         flex: 1;
         overflow auto
     }
     footer 
         width 100%
         height 1rem
         display flex
         background-color #ffffff
         div
           flex 1
           text-align center
           & span
                display block
                font-size 0.3rem 
        .router-link-active
                        color orange
        p
        font-size .5rem  
</style>
<template>
    <div id="cate-box">
             <nav>
            <router-link to="/home/index" tag="i" class="iconfont icon-zuojiantou"></router-link>
            <span>商品分类</span>
            <i class="iconfont icon-gengduo"></i>
         </nav>

         <header>
               <ul class="left">
                   <li @click="left(index)" v-for="(item,index) in catelist" :key="item.id" :class="{active: index == ind}">
                       {{item.catename}}
                   </li>
               </ul>

                 <ul class="right" v-if="catelist.length > 0">
                      <li @click="right(item.id)"
                          v-for="(item,index) in catelist[ind].children" :key="item.id">
                          <p>
                             <img :src="'http://localhost:3000' + item.img" alt="">
                          </p>
                          <span>{{item.catename}}</span>
                     </li>
                 </ul>
         </header>
         </div>
</template>

<script>
    export default {
       data() {
           return {
               catelist:[],
               ind:0,
               flag:false
           }
       },
       methods: {
          left(i){
              this.ind = i
          },
          right(id){
              this.$router.push('/home/index?id='+ id)
          }
       },
       mounted() {
           this.$http.get('/getcatetree').then(res=>{
               console.log(res)
               this.catelist = res.data.list
           })
       },
    }
</script>

<style lang="stylus" scoped>
color = #f26b11
   #cate-box
           width 100%
           height 100%
           overflow hidden
           nav  
              width 100%
              height .9rem
              background color
              display flex
              justify-content space-between
              padding 0 .3rem 
              align-items center
              color white 
              .icon-gengduo
                          font-size .5rem
           header 
                width 100%
                display flex
                .left
                     width 1.6rem
                     border-right .01rem solid #d9d9d9
                     li
                       width 1.7rem
                       height .5rem
                       padding-left .2rem
                       font-size .26rem
                       color #666666
                       margin-top .3rem
                       border-left .07rem solid transparent
                       &.active
                              color color
                              border-left .07rem solid color
                .right
                     flex 1 
                     display flex
                     justify-content space-between
                     flex-wrap wrap
                     li
                       display flex
                       width 30%
                       flex-direction column
                       text-align center
                       height 2.15rem
                       margin-top 1rem 
                       p
                        width 1.6rem
                        height 1.6rem

</style>
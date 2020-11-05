<template>
    <div id="good-box">
         <ul>
             <li v-for="(item,index) in goodslist" :key="item.id">
                      <div class="left">
                          <img :src="'http://localhost:3000' + item.img" alt="">
                      </div>
                  <div class="right">
                         <p class="content">{{item.goodsname}}</p>
                         <p class="price">{{'￥' + item.price}}</p>
                         <button>立即抢购</button>
                  </div>
             </li>
         </ul>
    </div>
</template>

<script>
    export default {
        props: {
            goodslist: {
                required: true,
                type: Array,
                default: function() {
                    return []
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
*
 margin 0
 padding 0
#good-box
        li
          width 90%
          margin auto
          height 3rem
          display flex
          justify-content space-between
          box-shadow .01rem .01rem .09rem #ebebeb
          margin-top .3rem
          .left
              width 2.75rem
              height 100%
          .right
              flex 1
              padding .4rem
              .content
                     font-size .4rem
                     font-weight bold
              .price
                    color red
                    margin-top .3rem
                    margin-bottom .3rem
               button  
                    width 1.65rem
                    height .5rem
                    background #f26b11
                    color #fbfaff
                    border-radius .08rem  

</style>
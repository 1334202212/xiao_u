<template>
  <div id="detaill-box">
      <nav id="nav">
            <span class="iconfont icon-right"></span>
            <span>商品详情</span>
            <span class="iconfont icon-gengduo"></span>
      </nav>
      
       <header>
             <div class="img-box">
                 <img :src="'http://localhost:3000' + list.img" alt="">
             </div>
             <div class="content-box">
                  <p>{{list.goodsname}}</p>
                  <span>{{list.price}}</span> 
             </div>

              <div class="shopping-number">
                     <span>
                       购买数量
                    </span>

                     <p class="number">
                        <button @click="add">+</button>
                        <span class="num">{{num}}</span>
                        <button @click="cut">-</button>
                     </p>
              </div>
              <div class="nature">
                    <span>商品属性</span>
                    <em :class="{active:flag}" @click="norms"> {{list.specsattr}}</em>
                    <span>{{warn}}</span>
              </div>
       </header>

       <footer>
             <div class="left">
                     <p class="iconfont icon-gouwuche2"></p>
                     <span>购物车</span>
              </div>
              
              <div class="right">
                   <span class="addcart" @click="addcart">加入购物车</span>
                   <span class="goshoping">立即购买</span>
              </div>
      </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      id: "",
      num: 1,
      guige: "",
      flag:false,
      warn:'',
    };
  },
  methods: {
      norms(){
     this.flag = !this.flag;
     console.log(this.flag);
    },
    add(){
       this.num++

    },
    cut(){
         if(this.num == 1)return
          this.num--
    },
    addcart(){
          if(this.flag == false){
            this.warn = '请选择规格'
            return
          }  
          if(!this.user.nickname){
               setTimeout(()=>{
                     this.$router.push('/login')
                     this.warn = '两秒后自动为您跳转到登录页'
              },2000);
              return;
           }
          this.$router.push('/home/car')
        
       }
  },
  mounted() {
    this.$http
      .get("/getgoodsinfo", { id: this.$route.query.id })
      .then((res) => {
        console.log(res);
        this.list = res.data.list[0];
      });
    },
    computed: {
            user() {
                return this.$store.state.user
            }
    },
};
</script>

<style lang="stylus" scoped>
#detaill-box 
            width 100%
            height 100%
            display flex
            flex-direction column
            #nav 
                width 100%
                height 0.85rem
                display flex
                padding 0 0.3rem
                justify-content space-between
                align-items center
                background: #f26b11
                color #fff
                .icon-gengduo
                            font-size: 0.7rem
            header  
                 flex 1
                 width 100%
                 margin auto
                 .img-box
                        width 100%
                        height 7.5rem
                 .content-box
                        width 100%
                        height 2rem
                        padding .4rem
                        span 
                           color red
                 .shopping-number
                                width 100%
                                height 1rem
                                display flex
                                justify-content space-between
                                align-items center
                                padding 0 .4rem
                                .number 
                                      display flex
                                      align-items center
                                      button  
                                            width .7rem
                                            height .6rem
                                            border .01rem solid black
                                            line-height .6rem

                                      .num 
                                        width .85rem
                                        height .6rem
                                        display inline-block
                                        border .01rem solid black
                                        border-left none 
                                        border-right none 
                                        text-align center
                                        line-height .6rem
                  .nature 
                        width 100%
                        height 1rem
                        padding .4rem
                        display flex
                        justify-content space-between
                        align-items center
                        em 
                          width 1.5rem
                          height .6rem
                          color #fff
                          font-style normal
                          text-align center
                          line-height .6rem
                          background-color #e1e1e3
                         .active
                                background #e43a3d

            footer 
                 width 100%
                 height 1.15rem
                 display flex
                 .left
                     width 1.7rem
                     height 100%
                     text-align center
                     padding .15rem 0
                     color #888888
                     .icon-gouwuche2
                                   font-size .5rem
                     span 
                        font-size .3rem
                 .right
                     flex 1 
                     display flex
                     align-items center
                     color #fff
                     .addcart
                           flex 1 
                           display inline-block
                           background #f26b11   
                           height 100%
                           text-align center
                           line-height 1.15rem
                     .goshoping
                           flex 1
                           display inline-block
                           background #e43a3d
                           height 100%
                           text-align center
                           line-height 1.15rem
                
            
</style>
<template>
  <div id="index-box">
    <!-- 导航栏 -->
      <div v-if="!this.id">
              <nav>
            <p class="img-p">
              <img src="../imgs/logo.jpg" alt />
            </p>
            <p class="input-p">
              <input type="text" placeholder="寻找商品" />
            </p>
            <p class="radius-p">
              <span></span>
              <span></span>
              <span></span>
            </p>
          </nav>

    <!-- 轮播图 -->
            <div id="banner">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"
                      v-for="(item, index) in bannerlist" :key="item.id"
                  >
                      <img :src="'http://localhost:3000' + item.img" alt="">
                  </div>
                </div>
              </div>
            </div>

          <!-- 限时抢购  商品分类 -->
            <div id="cate">
              <div>
                <p>
                  <img src="../imgs/icon_1.jpg" />
                </p>
                <span>限时抢购</span>
              </div>
              <div>
                <p>
                  <img src="../imgs/icon_2.jpg" />
                </p>
                <span>积分商城</span>
              </div>
              <div>
                <p>
                  <img src="../imgs/icon_3.jpg" />
                </p>
                <span>联系我们</span>
              </div>

              <router-link to="/category" tag="div">
                      <p>
                        <img src="../imgs/icon_4.jpg" />
                      </p>
                      <span>商品分类</span>
              </router-link>
            </div>

            <div id="hot">
                <div id="goods">
                    <span :class="{active:index == ind}"
                    v-for="(item,index) in wares" :key="item.id"
                    @click="goods(index)"
                    >{{item}}</span>
              </div>
              <Goods v-if="goodslist.length > 0" :goodslist="goodslist[ind].content"/>
            </div>
      </div>

      <div v-if="this.id">
          <div id="goods-box"> 
                <router-link to="/category" tag="span" class="iconfont icon-right"></router-link>  
                 <p>
                   <img src="../imgs/logo.jpg" alt="">
                 </p>
                <span class="iconfont icon-gengduo gengduo"></span>    
          </div>

          <div id="search-box">
              <p class="search">
                  <i class="iconfont icon-fangdajing"></i>
                  <input type="text" placeholder="输入商品">
              </p>
          </div>

          <ul class="shopping">
               <li v-for="(item,index) in list" :key="item.id"
                @click="shop(item.id)">
                      <p class="list-img">
                        <img :src="'http://localhost:3000' + item.img" alt="">
                       </p> 
                       <div class="content">
                          <p>{{item.goodsname}}</p>
                          <span>{{item.price}}</span>
                          <i>3625条评论</i>
                       </div>
               </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Goods from '../../components/Goods'
export default {
  components:{
      Goods,
  },
    data() {
        return {
            bannerlist:[],
            wares:['最热商品','最新商品','全部商品'],
            ind:0,
            goodslist:[],
            id:'',
            flag:false,
            list:[]
        }
    },
    methods: {
       goods(i){
          this.ind = i
       },
       shop(i){
          this.$router.push('/details?id=' + i)
       },
       getgoodslist(){
          this.$http.get('/getindexgoods').then(res=>{
                   console.log(res)
              this.goodslist = res.data.list
            })
       }
    },
    mounted() {
            this.id = this.$route.query.id
             console.log(this.$route.query.id)
            //  货获取轮播图接口 
            this.$http.get('/getbanner').then(res =>{
                  console.log(res);
                 this.bannerlist = res.data.list
                  this.$nextTick(()=>{
                    let myswiper = new Swiper('.swiper-container',{
                       autoplay: {
                            delay: 2000
                        }
                   });
                })
            });
            // 获取商品接口
          this.getgoodslist();


              // v
          this.$http.get('/getgoods',{fid:this.id}).then(res =>{
                this.list = res.data.list
          })
    },
};
</script>

<style lang="stylus" scoped>
  color="#f26b11"
// 导航栏
#index-box {
  width: 100%;
  height: 100%;

  & nav {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid black;
  }

  .img-p {
    width: 1.7rem;
    height: 0.6rem;
    text-align: center;
    margin-left: 0.2rem;
    margin-right: 0.8rem;
  }

  .input-p {
    width: 3rem;
    height: 0.6rem;

    input {
      width: 3rem;
      height: 0.6rem;
      border: 0.01rem solid black;
      text-indent: 1rem;
    }
  }

  .radius-p {
    width: 1.5rem;
    height: 0.6rem;
    text-align: right;

    & span {
      display: inline-block;
      width: 0.1rem;
      height: 0.1rem;
      background: black;
      border-radius: 50%;
    }
  }
}
// 轮播图
#banner,.swiper-container,.swiper-wrapper
                                      width 100%
                                      height 3rem

// 限时抢购
#cate {
  width: 100%;
  height: 1.75rem;
  display: flex;
  justify-content: space-around;
  margin-bottom .3rem

  div {
    width: 1.8rem;
    height: 1.75rem;
    text-align: center;
    margin-top: 0.2rem;

    & p {
      width: 1rem;
      height: 1rem;
      margin: auto;
    }
  }

  &span {
    display: inline-block;
  }
}

// 热门推荐   发现好货
#goods
     width 90%
     height .67rem
     margin auto
     border .01rem solid #e4e4e4 
     display flex
     justify-content space-around
     line-height 0.67rem
     span 
         flex 1
         border-right .01rem solid #e4e4e4
         text-align center
         &.active 
                 background #f26b11
                 color #fbfaff

#goods-box 
         width 100%
         height .7rem
         display flex
         justify-content space-between
         align-items center
         padding 0 .3rem
         p
          width 1.45rem
          height .4rem
        .gengduo
               font-size .7rem
#search-box 
          width 100%
          height 1.7rem 
          display flex
          justify-content space-around
          align-items center
          .search
               width 6.2rem
               height .8rem
               background #f26b11
               border-radius 1rem
               position relative

               input  
                   width 100%
                   height 100%
                   background #f26b11
                   position absolute
                   border-radius 1rem
                   text-align center
                   &::-webkit-input-placeholder
                                 color #fff
                     
               i 
                position absolute
                left 2rem
                top 50%
                color #fff
                z-index 5
                margin-top -.22rem
.shopping
         width 100%
         padding 0 .3rem
         li      
           height 2rem
           border-bottom 0.01rem solid #d1d1d1   
           display flex
           justify-content space-between
           padding .2rem 0
          .list-img
                   width 1.9rem
                   height 1.7rem
          .content
                flex 1
                span 
                   color red
                   display inline-block
                   margin .2rem 0
                i 
                 display block
                 font-style normal
                 font-size .2rem

</style>
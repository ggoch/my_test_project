<template>
    <div id="home">
    <div class="container"> 
      <div class = "main-header">
          <div class = "sideshow">
            <ul>
              <li><a href="#"><img src="../assets/sideshow1.jpg" alt="" /></a></li>
              <li><a href="#"><img src="../assets/sideshow2.jpg" alt="" /></a></li>
              <li><a href="#"><img src="../assets/sideshow3.jpg" alt="" /></a></li>
              <img src="../assets/sideshow1.jpg" alt="" />
            </ul>
          </div>
          <div class = "category">
            <label class="homeMenu" for="homeMenu-switch">
                <img src="../assets/icon/menu.png" />
            </label>
            <input type="checkbox" id="homeMenu-switch" />       
            <ul :class = "active" class="category-list">
                <li><router-link class="totel" @click.native="makeActive('totel')" to="/">公仔</router-link></li>
                <li><router-link class="game" @click.native="makeActive('game')" to="/game">電玩</router-link></li>
                <li><router-link class="boutique" @click.native="makeActive('boutique')" to="/boutique">動漫精品</router-link></li>
                <li><router-link class="book" @click.native="makeActive('book')" to="/book">漫畫輕小說</router-link></li>
            </ul>
          </div>
      </div>
      <div class = "main-container">
          <router-view />             
      </div>      
    </div>
    </div>
</template>

<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            active:'totel',
        }
    },
    methods:{
        makeActive(item){
            this.active = item;
        }
    },
    components:{
    },
}

</script>
<style lang="scss">
.main-header{                          //首頁幻燈片區塊
    .sideshow{
        width:620px;
        margin:auto;    
        ul{
            width:100%;
            display:flex;
            position:relative;    
            >img{
                width:100%;
                visibility:hidden;
            }    
            li{
                position:absolute;
                top:0;
                left:0;
                opacity:0;
                width:100%;
                height:100%;
                filter:alpha(opacity=0);
                animation:silder 15s linear infinite;    
                img{
                    width:100%;
                }    
                &:nth-child(1){
                    animation-delay:0s;
                }
                &:nth-child(2){
                    animation-delay:5s;
                }
                &:nth-child(3){
                    animation-delay:10s;
                }
            }
        }
    }

    .category{
        background:#0072E3;
        padding-left:10%;

        >input[type="checkbox"],
        .homeMenu{
            display:none;
        }

        .category-list{
            display:flex;
            a{
                color:#fff;
                font-size:16px;
                font-weight:bold;
                margin:0 20px;
                display:flex;
                align-items:center;
                padding:10px;
                height:50px;
                transition:0.5s;

                &:hover{
                    background:#46A3FF;
                }
            }
        }

        ul.totel .totel,
        ul.game .game,
        ul.boutique .boutique,
        ul.book .book{
            background:#2828FF;
            color:#FFFF37;
            border-bottom:3px solid #FFFF37;
        }
    }
}
@keyframes silder{
    7%{
        opacity:1;
        filter:alpha(opacity=100);
    }
    35%{
        opacity:1;
        filter:alpha(opacity=100);
    }
    42%{
        opacity:0;
        filter:alpha(opacity=0);
    }
}
@media(max-width:620px){       /*幻燈片rwd*/
    .main-header{
        .sideshow{
            width:100%;
        }
    }
}

@media(max-width:576px){         /*首頁商品分類rwd*/
    .main-header{
        .category{
            position:relative;
            padding-left:20px;
    
            .homeMenu{
                display:flex;
                align-item:center;
                padding:10px;
    
                &:hover{
                    cursor:pointer;
                }
            }
    
            >input{
                &:checked ~ .category-list{
                        transform:translateX(0);
                }
            }
    
            .category-list{
                flex-flow:column;
                position:absolute;
                left:-20px;
                transform:translateX(-100%);
                transition:0.3s;
                a{
                    font-size:14px;
                    background:#0072E3;
                }
            }
        }    
    }
}
.main-container{
    display:flex;
    justify-content:center;
    background:#ACD6FF;
    padding:20px 0;
}
</style>
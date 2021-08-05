<template>
    <div id="home">
    <div class="container"> 
      <div class = "main-header">
          <div class = "sideshow">
            <ul>
              <li><a href="#"><img src="../assets/sideshow1.jpg" alt="" /></a></li>
              <li><a href="#"><img src="../assets/sideshow2.jpg" alt="" /></a></li>
              <li><a href="#"><img src="../assets/sideshow3.jpg" alt="" /></a></li>
              <img href="#"><img src="../assets/sideshow1.jpg" alt="" />
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
<style>
.main-header{}
.main-header .sideshow{     /*首頁幻燈片區塊*/
    width:100%;
    display:flex;
    justify-content:center;
    background:green;
}
.sideshow ul{
    width:620px;
    height:320px;
    display:flex;
    //background:blue;
    position:relative;
}
.sideshow ul>img{
    width:100%;
    height:100%;
    visibility:hidden;
}
.main-header .sideshow li {
    //display:block;
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    max-width:620px;
    max-height:320px;
    width:100%;
    height:100%;
    //background:green;
    filter:alpha(opacity=0);
    animation:silder 15s linear infinite;
}
.sideshow li img{
    //object-fit:cover;
    width:100%;
    height:100%;
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
.main-header .sideshow li:nth-child(1){
    animation-delay:0s;
}
.main-header .sideshow li:nth-child(2){
    animation-delay:5s;
}
.main-header .sideshow li:nth-child(3){
    animation-delay:10s;
}
@media(max-width:420px){       /*幻燈片rwd*/
    .sideshow ul{
      width:100%;
      height:auto;
      font-size:0;
    }
    .sideshow li img{
      object-fit:cover;
      width:100%;
    }
}
.category{
    background:#0072E3;
    padding-left:100px;
}
.category>input[type="checkbox"],
.category .homeMenu{
    display:none
}
.category .category-list{
    display:flex;
}
.category-list a{
    color:#fff;
    font-size:17px;
    font-weight:bold;
    margin:0 20px;
    display:flex;
    align-items:center;
    padding:10px;
    height:50px;
    transition:0.5s;
}
.category-list a:hover{
    background:#46A3FF;
}
@media(max-width:550px){         /*首頁商品分類rwd*/
    .category{
        position:relative;
        padding-left:20px;
    }
    .category .homeMenu{
        display:flex;
        align-item:center;
        padding:10px;
    }
    .category .homeMenu:hover{
        cursor:pointer;
    }
    .category>input:checked ~ .category-list{
        transform:translateX(0);
    }
    .category .category-list{
        flex-flow:column;
        position:absolute;
        left:-20px;
        transform:translateX(-100%);
        transition:0.3s;
    }
    .category-list a{
        font-size:14px;
        background:#0072E3;
    }
}
ul.totel .totel,
ul.game .game,
ul.boutique .boutique,
ul.book .book{
    background:#FF2D2D;
}
.main-container{
    display:flex;
    justify-content:center;
    background:#ACD6FF;
    //padding:20px 0;
    padding:20px 0;
}
</style>
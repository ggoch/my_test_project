<template>
<div id="update">
  <div class="container">
    <form>
      <div class="member-data">
       <h3>個人基本資料</h3>
       <div class="content">
         <div>
           <p>名字</p>
           <p>帳號</p>
           <p>電子郵件</p>
         </div>
         <div>
           <p>{{memberInfo.name}}</p>
           <p>{{memberInfo.account}}</p>
           <p>{{memberInfo.email}}</p>
         </div>       
       </div>
      </div>
      <div class="modify-data">
        <h3>修改會員資料</h3>
        <div class="content">
          <div>
            <label for="name">名字</label>
            <label for="password">密碼</label>
            <!-- <label for="largeImg">上傳頭貼</label> -->
          </div>
          <div>
            <input type="text" v-model="name" id="name" placeholder="請輸入想修改的名字"/>
            <input type="password" v-model="password" id="password" placeholder="請輸入想修改的密碼" />
            <!-- <input type="file" accept="image/*" @change="previewImage"> -->
          </div>
          <!-- <div v-if="preview" class="preview">
            <img :src="preview" />
            <p>file name: {{ image.name }}</p>
            <p>size: {{ image.size/1024 }}KB</p>
          </div>
          -->
        </div>
        <input type="button" @click="update" value="修改" />
      </div>
    </form>
  </div>
</div>
</template>

<script>
import {store} from '../../store.js';
import {mapGetters,mapActions} from 'vuex';

export default{
  data(){
    return{
        memberName:'',
        memberAccount:'',
        memberEmail:'',
        name:'',
        password:'',
        preview: null,
        image: null,
    }
  },
  computed:{
    ...mapGetters({
      memberStatus:'getMemberStatus',
      memberInfo:'getMemberInfo'
    })
  },
  methods:{
    ...mapActions([
      'updateMemberInfo',
    ]),
    async update(){
        let name = store.methods.xssCheck(this.name);
        let password = store.methods.xssCheck(this.password);
        let checkResult = this.checkUpdate([name,password]);


        if(checkResult == "error"){
          alert("資料未完整輸入");
          return;
        }

        let data = {
            name:name,
            password:password
        };
        
        await this.updateMemberInfo(data);
        //store.status.updateStatus = await store.router.update(data);
        if(this.memberStatus.update == "會員資料更新成功"){
            alert("會員資料更新成功"); 
            /*this.memberName = store.state.updateMember.name;
            this.name = '';
            this.password = '';*/
        }else{
            alert("會員資料更新失敗,請重新登入");
        }
    },
    previewImage: function(event) {
     var input = event.target;
     if (input.files) {
       var reader = new FileReader();
       reader.onload = (e) => {
         this.preview = e.target.result;
       }
       this.image=input.files[0];
       reader.readAsDataURL(input.files[0]);
     }
    },
    checkUpdate(dataArr){
       for(let i=0;i<dataArr.length;i++){
         if(dataArr[i] == ""){
          return "error";
         }
       }
     }
  },
  async mounted(){
    //await this.checkLogin();
    //await store.router.checkLogin();
    /*if(store.status.loginStatus !== "登入成功"){
      alert("登入失敗,請重新登入");
    }else{
      let memberData = store.state.memberInfo;
      this.memberName = memberData.name;
      this.memberAccount = memberData.account;
      this.memberEmail = memberData.email;
    }*/
  }
}
</script>

<style>
#update .container{
}
#update  form>div{
    border:2px solid #AAAAFF;
    width:1000px;
    max-width:100%;
    margin:20px 0;
}
#update form>div h3{
    background:#B9B9FF;
    color:#ECECFF;
    padding:10px;
}
#update form>div .content{
    display:flex;
    padding:30px;
}
#update form>div .content>div{
    display:flex;
    flex-flow:column;
    justify-content:space-around;
    margin-right:40px;
    line-height:30px;
}
#update form>div:last-child .content>div{
    line-height:40px;
}
.modify-data .content input{
    line-height:25px;
}
.modify-data input[type="button"]{
    width:100px;
    height:30px;
    text-align:center;
    line-height:30px;
    font-weight:bold;
    margin:0 0 30px 30px;
    background:#FF8000;
    color:#fff;
    border:1px solid #FFBB77;
    border-radius:2px;
    cursor:pointer;
}
.modify-data input[type="button"]:hover{
  box-shadow:2px 2px 3px #000;
}
.preview{
  margin-left:100px;
}
.preview img{
  max-width:150px;
  max-height:150px;
}
@media(max-width:420px){
  #update form>div .content{
    padding:10px;
  }
  #update form>div .content>div p{
    font-size:14px;
  }
  #update form>div .content>div label{
    font-size:14px;
  }
  #update form>div .content>div input{
    width:150px;
  }
}
</style>
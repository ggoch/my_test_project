import imgurl from '@/assets/arise2.jpg';
import {apiGetProduct, apiPostLogin, apiPostRegistor, apiPutMember,
    apiPostOneProduct, apiGetOrder, apiDeleteOrder, apiPostOrder, 
    apiPutOrder, apiCheckLogin, apiPostSearchProduct, apiPutCompleteOrder, 
    apiPostProductType} from './api.js';


const moment = require('moment');
const xss = require('xss'); 
//const imgurl = 'http://localhost:3000/product-img/1.jpg'

var commodity = [];
var homeCommodity = [];
var orderList=[];
var completeOrderList=[];
var searchProductList=[];

var updateMember='';
var memberInfo='';

var loginStatus = '登入失敗';
var updateStatus='';
var addOrderStatus='';
var deleteStatus='';
var updateOrderStatus='';
var completeStatus='';
var searchStatus='';


/*var commodity = [
    {
    name:'愛麗絲',
    imgurl:imgurl,
    narrate:'黏土人偶 無職轉生愛麗絲',
    price:2800
    },
    {
        name:'愛麗絲2',
        imgurl:imgurl,
    narrate:'黏土人偶 無職轉生愛麗絲',
    price:2800
    },
    {
        name:'愛麗絲3',
        imgurl:imgurl,
    narrate:'黏土人偶 無職轉生愛麗絲',
    price:2800
    },
    {
        name:'愛麗絲4',
        imgurl:imgurl,
    narrate:'黏土人偶 無職轉生愛麗絲',
    price:2800
    },
    {
        name:'愛麗絲5',
        imgurl:imgurl,
    narrate:'黏土人偶 無職轉生愛麗絲',
    price:2800
    },
];*/

var recommend = {
    hot:{
        name:'愛麗絲',
        imgurl:imgurl,
        narrate:'黏土人偶 無職轉生愛麗絲',
        price:2800
    },
    new:{
        name:'愛麗絲2',
        imgurl:imgurl,
        narrate:'黏土人偶 無職轉生愛麗絲',
        price:2800
    }
}

var test = {
    name:'免訂金【預購21年10月】代理版 GSC 黏土人 無職轉生 到了異世界就拿出真本事 艾莉絲 0411',
    imgurl:imgurl,
    price:'NT 1100',
    number:40,
    time:'2020-03-30',
    pay:['宅配/快遞100元','7-11取貨付款80元','7-11取貨60元','面交自取預付訂金300元']
}

var pretest =  `購買 說 明 ★

★ 請先詳讀以下條例，下標即表示對關於我條例無異議，無法接受請勿下標，龜毛者請勿下標。
    
★ 下標請麻煩立即結帳，超過三天者未結帳者將直接棄標投訴。
    
★ 免訂金不可與其他物品合併，需合併請先詢問，隨意合併棄標投訴處理。
    
★ 免訂金出貨皆不挑盒況，外盒有所要求或擔心因寄送造成盒損者請至門市選購。
    
★ 選用超商取貨付款到貨即直接出貨，不再另行通知，若有需求請註明。
    
★ 使用折扣碼皆不可合併，若使用折 扣碼且自行合併者將不退還任何差額。
    
★ 所有商品都會有延期的可能，是否延期可至詢問賣家詢問`;

var ss = 'fuck';
var registorStatus = '';

//顯示商品相關函式
const showProduct = async function(){

    let data = await apiGetProduct().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    
    let commodity = [];
    for(let i=0;i<data.length;i++){
        commodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }
    store.state.commodity = commodity;
}

//顯示最新商品
const showNewProduct = async function(){
    let data = await apiGetProduct().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    let commodity = [];
    for(let i=data.length-1;i>=0;i--){
        commodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }
    store.state.commodity = commodity;
}

//顯示首頁商品
const showProductType = async function(datas,number = 0){
    let data = await apiPostProductType(datas).then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    let m = number;
    if(m == 0){
        m = data.length;
    }

    let homeCommodity = [];
    for(let i=0;i<m;i++){
        homeCommodity.push(
            {
                id:data[i].id,
                name:data[i].name,
                imgurl:data[i].img,
                price:data[i].price,
                number:data[i].quantity,
                narrate:data[i].remark,
                time:data[i].create_date
            }
        );
    }
    store.state.homeCommodity = homeCommodity;
}

//顯示單一商品
const showOneProduct = async function(data){
    let result = await apiPostOneProduct(data).then(res => res.data.result[0]).catch(function(err){
        if(err){
            return console.log(err);
        }
    });

    /*let page = {
        name:result.name,
        imgurl:imgurl,
        price:result.price,
        number:result.quantity,
        time:result.create_date,
        pay:['宅配/快遞100元','7-11取貨付款80元','7-11取貨60元','面交自取(台南市)預付訂金300元']
    }*/
    return result;
}

//註冊帳號相關函式
const registor = async function(data){
    let result = await apiPostRegistor(data).then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    return  result;
}

//登入相關函式
const login = async function(data){
    let result = await apiPostLogin(data).then(res => res).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    localStorage.setItem('token', result.headers.token);
    let loginStatus = result.data.result.status;
    return loginStatus;
}

//修改會員資料相關函式
const update = async function(data){
    let result = await apiPutMember(data).then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    store.state.updateMember = result.memberUpdateData;
    return result.status;
}

//獲取訂單相關函式
const getOrderList = async function(){
    let result = await apiGetOrder().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    let list=[];
    for(let i=0;i<result.length;i++){
        if(result[i].is_complete == 1){
            continue;
        }

        list.push({
            orderID:result[i].order_id,
            productID:result[i].product_id,
            name:result[i].product_name,
            imgurl:result[i].product_img,
            totel:result[i].order_price,
            number:result[i].order_quantity,
            price:result[i].order_price / result[i].order_quantity
        });
    }
    store.state.orderList = list;
}

//獲取已完成訂單函式
const getCompleteOrderList = async function(){
    let result = await apiGetOrder().then(res => res.data.result).catch(function(err){
        if(err){
            return console.log(err);
        }
    });
    let list=[];
    for(let i=0;i<result.length;i++){
        if(result[i].is_complete == 0){
            continue;
        }
        let time = moment(result[i].complete_time).format('YYYY-MM-DD HH:mm:ss');

        list.push({
            orderID:result[i].order_id,
            productID:result[i].product_id,
            name:result[i].product_name,
            imgurl:result[i].product_img,
            totel:result[i].order_price,
            number:result[i].order_quantity,
            price:result[i].order_price / result[i].order_quantity,
            time:time
        });
    }
    store.state.completeOrderList = list;
}

//刪除訂單函式
const deleteOrder = async function(data){
    let result = await apiDeleteOrder(data).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    store.status.deleteStatus = result.status
    return result;
}

//將商品添加至購物車
const addOrder = async function(data){
    let result = await apiPostOrder(data).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    store.status.addOrderStatus = result.status;
}

//修改商品數量
const updateOrder = async function(data){
    let result = await apiPutOrder(data).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    store.status.updateOrderStatus = result.status;
}

//確認登入狀態
const checkLogin = async function(){
    let result = await apiCheckLogin().then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    if(result.status == "token錯誤"){
        store.status.loginStatus = "登入失敗";
    }else{
        store.status.loginStatus = result.status;
        store.state.memberInfo = {
            name:result.memberInfo.name,
            account:result.memberInfo.account,
            email:result.memberInfo.email
        };
    }
}

//搜尋商品函式
const searchProduct = async function(searchName){
    let data = await apiPostSearchProduct(searchName).then(res => res.data.result).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    //alert(data);
    let commodity = [];
    for(let i=0;i<data.length;i++){
      commodity.push(
          {
              id:data[i].id,
              name:data[i].name,
              imgurl:data[i].img,
              price:data[i].price,
              number:data[i].quantity,
              narrate:data[i].remark,
              time:data[i].create_date
          }
      );
    }

    if(commodity == ""){
        store.status.searchStatus = "error";
    }
    store.state.searchProductList = commodity;
    //alert(store.state.commodity[0].name);
}

//完成訂單函式
const completeOrder = async function(data){
    let result = await apiPutCompleteOrder(data).then(res => res.data.result.status).catch(function(err){
        if(err){
            console.log(err);
        }
    });
    store.status.completeStatus = result;
}

//防止xss攻擊練習函式
const xssCheck = function(string){
    let newString = xss(string);
    return newString;
}


var id='';
export  const store = {
    state:{
        commodity,
        recommend,
        test,
        pretest,
        homeCommodity,
        id,
        updateMember,
        orderList,
        completeOrderList,
        memberInfo,
        searchProductList
    },
    status:{
        registorStatus,
        loginStatus,
        updateStatus,
        addOrderStatus,
        deleteStatus,
        updateOrderStatus,
        completeStatus,
        searchStatus
    },
    router:{
        showProduct,
        showNewProduct,
        showProductType,
        registor,
        login,
        update,
        showOneProduct,
        getOrderList,
        getCompleteOrderList,
        addOrder,
        deleteOrder,
        updateOrder,
        checkLogin,
        searchProduct,
        completeOrder
    },
    methods:{
        xssCheck
    },
    check:{
    }
}
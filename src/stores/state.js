export const state = {
    count:0,
    data:{            
        commodity:[],                       //commodity物件內容id,name,imgurl,price,number,narrate,time
        homeCommodity:[],                   //同上
        memberInfo:'',                      //memberInfo物件內容name,account,email
        orderList:[],                       //order物件內容orderID,productID,name,imgurl,totel,number,price
    },
    status:{
        login:'登入失敗',
        registor:{
            status:'',
            err:'',
            registerMember:{
                name:''
            }
        },
        searchResult:'',
        order:{
            delete:'',
            update:'',
            complete:''
        }
    }
}
export const state = {
    count:0,
    data:{                                  //commodity物件內容id,name,imgurl,price,number,narrate,time
        homeCommodity:[],
        commodity:[],
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
        searchStatus:''
    }
}
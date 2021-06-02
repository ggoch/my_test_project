import axios from 'axios';

const url = 'http://localhost:3000';

const productRequest = axios.create({
    baseURL: 'http://localhost:3000'
  });

const memberRequest = axios.create({
    baseURL: 'http://localhost:3000'
  });  


const orderRequest = axios.create({
    baseURL: 'http://localhost:3000'
  });   


/*const tokenRequest = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'token':localStorage.getItem('token')}
  });*/
  
  //商品相關api  
export const apiGetProduct = () => productRequest.get('/product');

export const apiPostOneProduct = data => productRequest.post('/oneproduct',data);

export const apiPostSearchProduct = data => productRequest.post('/searchproduct',data);

export const apiPostProductType = data => productRequest.post('/product',data);

//會員相關api
export const apiPostRegistor = data => memberRequest.post('/member',data);

export const apiPostLogin = data => memberRequest.post('/member/login',data);

export const apiCheckLogin = () => memberRequest.get('/member/check_login',{headers:{'token':localStorage.getItem('token')}});

export const apiPutMember = data => memberRequest.put('/update',data,{headers:{'token':localStorage.getItem('token')}});

//訂單相關api
export const apiGetOrder = () => orderRequest.get('/order/member',{headers:{'token':localStorage.getItem('token')}});

export const apiPostOrder = data => orderRequest.post('/order',data,{headers:{'token':localStorage.getItem('token')}});

export const apiPutOrder = data => orderRequest.put('/order',data,{headers:{'token':localStorage.getItem('token')}});

export const apiDeleteOrder = data => orderRequest.delete('/order',{data:data,headers:{'token':localStorage.getItem('token')}}); 

export const apiPutCompleteOrder = data => orderRequest.put('/order/complete',data,{headers:{'token':localStorage.getItem('token')}});

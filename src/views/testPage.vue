<template>
  <div class="container">
    <div class="box">
      <div class="box-in">
        <div class="content">
          <p>測試</p>
        </div>
        <div class="content">
          <p>測試</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed:{
    ...mapGetters({
      count:'getCount',
    }),
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
    ]),
    // 其他 method call action 的方法
    callAction() {
      // example
      this.actionIncrease;
    }
  },
}
</script>
<style>
.box{
  max-width:1000px;
  width:100%;
  padding-top:34.5%;
  position:relative;
  background:red;
  margin:auto;
}
.box-in{
  width:inherit;  
  position:absolute;
  top:50%;
  bottom:50%;
  left:0;
  display:flex;
  justify-content:center;
  background:green;
}
.content{
  background:green;
  border:1x solid red;
}
</style>
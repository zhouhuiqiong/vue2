<template>
  <form novalidate="">
      <div>
      <input v-model="age" v-verify="age" placeholder="age"/>
      <label v-verified="$verify.$errors.age"></label>
    </div>
    <div>
        <input type="password" id="pwd" placeholder="密码" v-verify="pwd" v-model="pwd"/>
        <label v-verified="verifyError.pwd">21312312</label>
    </div>
    <div>
        <input type="text" placeholder="姓名" v-verify="pwd1" v-model="pwd1"/>
      <label v-verified="$verify.$errors.pwd1"></label>
    </div>
    <div>
      <input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">
      <label class="fl" v-remind="regInfo.phone"></label>
    </div>
    <button @click="submit" type="button">提交</button>
  </form>
</template>
<script>
export default {
  
  data () {
    return {
      lists: [],
      name: "wheh",
      age:"",
      pwd: "",
      pwd1: "",
      regInfo: {
          phone: ""
      }
    }
  },
  verify: {
      age:"required",
      pwd:"required",
      regInfo: {
          phone: {
            test:/^1[34578]\d{9}$/,
            message:"电话号码格式不正确"
          }
      },
      pwd1:        [
            "required",
            {
                test:function(val){
                    return this.pwd == val;
                },
                message:"不相等"
            }
        ]
  },    
  created () {
  },
  methods: {
      login(){
        this.$router.push({ path: '/' });
        this.$root.vm.$emit('userId',"2132313");
      },
      
     submit: function () {
      console.log(this.$verify.check());
    }
  },
  computed:{
        verifyError:function(){
            return this.$verify.$errors;
        }
    }
}
</script>
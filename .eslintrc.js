module.exports = {
  env:{
    browser:true,
    node:true
  },
  extends:[
    //vue 문법 검증
    //'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    //'plugin:vue/vue3-recommended', //Lv3
    //js
    'eslint:recommended'
  ],
  parserOptions:{
    parser:'babel-eslint'
  },
  rules:{

  }

}
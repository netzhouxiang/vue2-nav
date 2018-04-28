<template>  
    <div class="navx">  
        <div class="left" v-if="setting.return_hide" @click="_return"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3klEQVRYR73XURHCMBCE4V1pKCgogDpAAihAAnUAEnB2nczkqUNocrdHBOT/mpedEknHzBYAE4ATyU8rw4x+jZ/r3Ye/AjbxmWR5ieaRvsBovKhkAE9cBvDGJYBIPAyIxkMARdwNUMVdAGV8GKCODwEy4t2ArHgXIDO+CzCzK4BHXZLdYfEs688tMLMjgFe9eCE5eyKhNTSzC4BnFqJrDTMRXYDy9VmIbkAWYgiQgRgGqBEugBLhBqgQIYACEQZEERJABCEDeBFSgAchB3xB3EneWouYAtggyu/5uwVYAbK9oCHuVnLdAAAAAElFTkSuQmCC"/></div>
        <div class="title" v-if="!setting.isdiy">{{setting.title}}</div>
        <div class="diy" v-if="setting.isdiy" v-html="setting.title"></div>
        <div class="right" @click="$emit('button')" v-if="setting.isbutton">{{setting.button_text}}</div>
    </div>  
</template>  
<script>
export default {
  name: "nav",
  data() {
    return {};
  },
  props: {
    /*
    * 设置对象
    * title:设置标题(当isdiy为真，以HTML绑定)
    * return_hide:是否显示返回箭头
    * isdiy:是否DIY标题内容
    * isbutton:是否显示按钮
    * button_text:右边按钮文本
    * button(on):emit
    */
    setting: {
      title: "默认标题",
      isdiy: false,
      return_hide: true,
      isbutton: false,
      button_text: "默认文本"
    }
  },
  methods: {
    _return() {
        this.$router.go(-1);
    }
  }
};
</script> 
<style>
.navx {
  background-image: -webkit-linear-gradient(0deg, #31d375, #1cc2a0);
  height: 0.94rem;
  position: relative;
  top: 0;
  z-index: 99999;
  width: 7.5rem;
  line-height: 0.94rem;
  color: #ffffff;
  display: -webkit-box;
  font-family: "ArialMT";
}
.navx .left,
.navx .right {
  position: absolute;
  line-height: 0.94rem;
}
.navx .left {
  padding-left: 0.15rem;
}
.navx .right {
  right: 0.2rem;
  font-size: 0.32rem;
}
.navx .title {
  line-height: 0.94rem;
  width: 100%;
  text-align: center;
  font-size: 0.36rem;
}
.navx .diy {
  width: 100%;
}
.navx img {
  width: 0.32rem;
  height: 0.32rem;
  vertical-align: middle;
}
</style>
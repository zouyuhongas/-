// 在这里形成一个局部作用域，防止别人的代码影响我们自己的代码
;(function(){

  // 实现简单的jq - 小demo，可能不会太全面，会有不少考虑不周全的地方，如果自己想要把他改周全，可以自己研究

  // 实现基本的选择器
  // $(css选择器)
  function jQuery(selector){
    // 为了使用的时候更加简单一点，在new的基础上在包一层
    return new Init(selector);
  }

  // 需要把所有的方法都放在原型对象身上
  function Init(selector){    
    // jq对象要求是一个伪数组，什么是伪数组 ： 使用数字作为属性名的对象
    let dom = document.querySelectorAll(selector);
    for(let i =0; i < dom.length; i++){
      this[i] = dom[i];
    }
    // 伪数组还需要一个length
    this.length = dom.length;
  }
  Init.prototype.css = function(property,value){
    // 修改实例对象伪数组里面的样式
    // console.log(this); // 原型对象身上的方法里面的this，指向调用方法的实例对象
    // 需要遍历this伪数组，把里面的每个元素的样式都进行修改
    for(let i =0; i < this.length; i++){
      // console.log(this[i]);
      this[i].style[property] = value + 'px';
    }
  }  

  // 把封装的jQuery函数变成window的一个属性，让外面可以使用
  window.$ = window.jQuery = jQuery;
})();

# tab
ES6面向对象实现tab切换，添加，删除，修改功能

最近在重学js，学到面向对象class这块，因为之前比较少使用面向对象编程来实现交互，在这里写了个tab，算是入门吧
这里总结一下使用到的技术点
1 主要围绕着class来写，this指向是一个关键：
  a：在constructor中，this指向创建的实例对象 
  b：类里面的方法，谁调用方法，this就指向谁

2 阻止事件冒泡：
  window.event? window.event.cancelBubble = true : e.stopPropagation()

3 添加元素的方法： parentNode.insertAdjacentHTML(position,text)
  position是相对于元素的位置：
    beforebegin: 元素前
    afterbegin: 元素内部的开头
    beforeend: 元素内部的结尾
    afterend: 元素后
  text可以是html或xml
  
 4 阻止双击选中文字
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

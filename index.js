let _this
class Tab {
    constructor(id) {
        _this = this
        // 获取元素
        this.main = document.querySelector(id)
        this.addBtn = this.main.querySelector('.add')
        this.ul = this.main.querySelector('.firstnav ul')
        this.content = this.main.querySelector('.content')
        this.init()
    }
    // 初始化，绑定相关事件
    init() {
        this.getLiSection()
        // 添加时间绑定
        this.addBtn.onclick = this.addTab
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.icons[i].index = i
            this.spans[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.icons[i].onclick = this.deteleTab
            this.spans[i].ondblclick = this.edit
        }
    }
    // 获取li section icon
    getLiSection() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.icons = this.main.querySelectorAll('.icon')
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
    }
    clearClass() {
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    toggleTab() {
        _this.clearClass()
        this.className = 'current'
        _this.sections[this.index].className = 'conactive'
    }
    addTab() {
        // 生成一个li和一个section
        let li = '<li class="current"><span>addTab</span><span class="icon">x</span></li>'
        let section = '<section class="conactive">addContent'+ Math.random() +'</section>'
        _this.clearClass()
        _this.ul.insertAdjacentHTML('beforeend',li)
        _this.content.insertAdjacentHTML('beforeend',section)
        _this.init()
    }
    deteleTab(e) {
        window.event? window.event.cancelBubble = true : e.stopPropagation();
        _this.lis[this.index].remove()
        _this.sections[this.index].remove()
        _this.init()
        
        // 如果有选中状态的li，直接return
        if(document.querySelector('.current')) return
        let nodeIndex = this.index == 0 ? 0 : --this.index
        _this.lis[nodeIndex] && _this.lis[nodeIndex].click()
    }
    edit() {
        // 阻止双击选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 先将li的第一个span内容获取，然后将span的内容替换为input框，并且值为原来span的内容
        let str = this.innerHTML
        this.innerHTML = '<input type="text" style="width:82%;height:30px" />'
        let input = this.children[0]
        input.value = str
        input.select()
        // 失去焦点
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
    }
}
new Tab('#tab')
//绘制游戏标题
Scene_Title.prototype.drawGameTitle = function() {
    var x = 20;
    var y = Graphics.height / 4;
    var maxWidth = Graphics.width - x * 2;
    //获取标题数据
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 72;
    this._gameTitleSprite.bitmap.drawText(text, x+60, y, maxWidth, 48, 'center');
};
//感觉和普通的游戏开发不太一样
//一般我们使用框架开发 比如as3的渲染框架 或者unity完整的游戏框架 都是类似自己一个一个把积木拼装起来 然后框架提供的只是积木而已
//rpgmaker因为整个游戏的基本逻辑已经完全写好，然后因为是完全数据驱动,达到了一种不用编程可以做游戏的效果
//所以如果要进行编程的话 就有点变扭 类似于一堆已经拼装好的积木 然后你需要覆盖原来的积木 加上你自己的功能(覆盖原来的类 加入自己的功能)
//这和继承也不太一样..继承是派生出一个新类,他这种是直接在原来的类上添加新功能..这样才能做到主逻辑操作的还是原来的类..
//这种东西也就只有动态语言能做到了...
//如果要改变已经加入的基本逻辑 只能是修改他原来的游戏框架了 这也只有把框架源代码暴露给你才能做到了

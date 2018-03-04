var MyLayer = cc.Layer.extend({

    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});

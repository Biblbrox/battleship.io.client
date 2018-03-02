class GameBoard extends cc.TMXTiledMap {

    /**
     *
     * @param tmxFile
     */
    constructor(tmxFile) {
        super();
        this.initWithTMXFile(tmxFile);
        this.mainLayer = this.getLayer("Tile Layer 1");
        this.width     = this.mainLayer.getContentSize().width;
        this.height    = this.mainLayer.getContentSize().height;
    }

    getRect() {
        return new cc.Rect(this.getPositionX() - Math.floor(this.width / 2),
                           this.getPositionY() - Math.floor(this.height / 2),
                           Math.floor(this.width), Math.floor(this.height));
    }
}
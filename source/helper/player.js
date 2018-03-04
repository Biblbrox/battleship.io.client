export default class Player {

    constructor(id = null) {
        this.id         = id;
        this.ownBoard   = null;
        this.enemyBoard = null;
        this.enemyId    = null;
    }

}
cc.Class({
    extends: cc.Component,

    properties: {
        monster1: {
            default: null,
            type: cc.Node
        },
        
        monster2: {
            default: null,
            type: cc.Node
        },
        
        monster3: {
            default: null,
            type: cc.Node
        },
        
        boss: {
            default: null,
            type: cc.Node
        },
        
        box: {
            default: null,
            type: cc.Node
        },
    },
    
    monsterMove: function (time,monster) {
        
        var tmp = monster.y;
        
        var moveUp1 = cc.moveBy(time*(Math.abs(250-tmp)/200), cc.p(0,250-tmp));
        var moveDown = cc.moveBy(time, cc.p(0,-200));
        var moveUp2 = cc.moveBy(time*(Math.abs(tmp-50)/200), cc.p(0,tmp-50));
        return cc.repeatForever(cc.sequence(moveUp1, moveDown, moveUp2));
    },

    onLoad: function () {
        
        this.monster1.runAction(this.monsterMove(5, this.monster1));
        this.monster2.runAction(this.monsterMove(4, this.monster2));
        this.monster3.runAction(this.monsterMove(3, this.monster3));
        this.boss.runAction(this.monsterMove(2, this.boss));
    },

});

function stopAll() {

    cc.find("Canvas/firstBg/monster1").stopAllActions();
    cc.find("Canvas/firstBg/monster2").stopAllActions();
    cc.find("Canvas/firstBg/monster3").stopAllActions();
    cc.find("Canvas/firstBg/boss").stopAllActions();
}

module.exports = {
    stopAll: stopAll,
};

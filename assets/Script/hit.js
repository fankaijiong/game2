var hero = require("hero");
var monster = require("monster");
cc.Class({
    extends: cc.Component,

    properties: {
        view: {
            default: null,
            type: cc.Node
        },
        
        label: {
            default: null,
            type: cc.Label
        },
    },
    
    onLoad: function () {

    },

    onEnable: function () {
        cc.director.getCollisionManager().enabled = true;
    },
    
    onDisable: function () {
        cc.director.getCollisionManager().enabled = false;
    },
    
    onCollisionEnter: function (other, self) {
        if (self.tag === 0) {
           this.view.active = true;
           this.label.string = "you win";
           hero.removeAll();
           monster.stopAll();
        } else {
           this.view.active = true;
           this.label.string = "you lose";
           hero.removeAll();
           monster.stopAll();
        }
    }

});

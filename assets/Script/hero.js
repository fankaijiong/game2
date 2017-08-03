var accLeft = false
var accRight = false
var accUp = false
var accDown = false

cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 0,
    },
    
    setInputControl: function () {
        var self = this;
        var keyboardListener = cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        accLeft = true;
                        accRight = false;
                        break;
                    case cc.KEY.d:
                        accLeft = false;
                        accRight = true;
                        break;
                    case cc.KEY.w:
                        accUp = true;
                        accDown = false;
                        break;
                    case cc.KEY.s:
                        accUp = false;
                        accDown = true;
                        break;  
                }
            },
            
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        accLeft = false;
                        break;
                    case cc.KEY.d:
                        accRight = false;
                        break;
                    case cc.KEY.w:
                        accUp = false;
                        break;
                    case cc.KEY.s:
                        accDown = false;
                        break;  
                }
            }
        }, self.node);
    },

    onLoad: function () {
    
        accLeft = false;
        accRight = false;
        accUp = false;
        accDown = false;
        
        this.setInputControl();
    },
    
    update: function (dt) {
        if (accLeft) {
            this.node.x -= dt*this.moveSpeed;
        } else if (accRight) {
            this.node.x += dt*this.moveSpeed;
        } else if (accUp) {
            this.node.y += dt*this.moveSpeed;
        } else if (accDown) {
            this.node.y -= dt*this.moveSpeed;
        }
        
        if (this.node.y > -100) {
            this.node.y = -100;
        } else if (this.node.y < -330) {
            this.node.y = -330;
        }
    },

});

function removeAll() {
    var hero = cc.find("Canvas/hero")
    accLeft = false;
    accRight = false;
    accUp = false;
    accDown = false;
    cc.eventManager.removeListeners(hero);
}

module.exports = {
    removeAll: removeAll,
};

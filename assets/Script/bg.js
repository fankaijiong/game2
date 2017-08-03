cc.Class({
    extends: cc.Component,

    properties: {
        hero: {
            default: null,
            type: cc.Node
        },
        
        bg: {
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
        
    },

    update: function (dt) {
        
        if (this.hero.x > 350) {
            if (this.bg.x < -1920) {
                this.bg.x = -1920;
                this.hero.x = 350;
            } else if (this.bg.x >= -1920){
                this.bg.x -= (this.hero.x - 350);
                this.hero.x = 350;
            }
        } else if (this.hero.x < -350) {
            if (this.bg.x < -480) {
                this.bg.x -= (this.hero.x + 350);
                this.hero.x = -350;
            } else if (this.bg.x >= -480){
                this.bg.x = -480;
                this.hero.x = -350;
            }
        }
    },
});

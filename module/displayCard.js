

export async function displayCard(token, isHover, ctrlPressed) {



    Token.prototype.displayThreatCard = async function (imgPath) {


        if (this.actor.data.data.threatCard.useAltText === true) {
            this.card = new PIXI.Container();
            let text = new PreciseText(
                ` 
                melee :  ${this.actor.data.data.skills.unarmedCombat.value} 
                dodge : ${this.actor.data.data.skills.dodge.value} 
                unarmed : ${this.actor.data.data.skills.meleeWeapons.value} 
                toughness : ${this.actor.data.data.other.toughness} 
                intimidate : ${this.actor.data.data.skills.intimidation.value} 
                maneuver :  ${this.actor.data.data.skills.maneuver.value} 
                taunt :  ${this.actor.data.data.skills.taunt.value} 
                trick :  ${this.actor.data.data.skills.trick.value}  
                size bonus : ${this.actor.data.data.details.sizeBonus}           
                `,
                { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'left', dropShadow: true, dropShadowAngle: 0, dropShadowDistance: 0, dropShadowBlur: 15 }
            );

            text.anchor.set(0, 1);


            this.card.width = this.w * 1.5
            this.card.height = this.h * 1.5;
            this.card.position.set(this.w / 2, this.h + 2);
            console.log(this)
            this.card.addChild(text)
        }
        else {
            this.cardTexture = await loadTexture(imgPath, { fallback: CONST.DEFAULT_TOKEN });
            this.card = new PIXI.Sprite(this.cardTexture);
            this.card.anchor.set(-0.5, 0.5);
            this.card.width = this.w * 1.5
            this.card.height = this.h * 3;
        }

        // creating pixi object  from actor.data.data.cardImage
        this.card.parent = this;

        //size and position
        // this.card.anchor.set(-0.5, 0.5);

        //appending card to Token
        this.addChild(this.card);


    }

    if (game.user.isGM || (game.settings.get('torgeternity', 'playersSeeThreatCards') && !token.actor.data.data.threatCard.nightmare)) {
        if (isHover === true && token.actor.data.type === "threat") {
            let path = game.user.isGM ? token.actor.data.data.threatCard.GMSide : token.actor.data.data.threatCard.playerSide;
            if (ctrlPressed) {
                token.displayThreatCard(path);
            }
        }
        else if (isHover === false && token.card?.visible && token.actor.data.type === "threat") {
            token.card.visible = false
        }
    }
}
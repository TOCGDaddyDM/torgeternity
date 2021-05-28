

export async function displayCard(token, isHover, ctrlPressed) {



    Token.prototype.displayThreatCard = async function (imgPath) {
        // creating pixi object  from actor.data.data.cardImage
        this.cardTexture = await loadTexture(imgPath, { fallback: CONST.DEFAULT_TOKEN });
        this.card = new PIXI.Sprite(this.cardTexture);
        this.card.parent = this;
        //size and position
        this.card.anchor.set(-0.5, 0.5);
        this.card.width = this.w * 2
        this.card.height = this.h * 4;
        //appending card to Token
        this.addChild(this.card);
    }


    if (isHover === true && token.actor.data.type === "threat") {
        let path = token.actor.data.data.cardImage;
        console.log(token.actor.data)
        if (ctrlPressed) {
            token.displayThreatCard(path);
        }
    }
    else if (isHover === false && token.card?.visible && token.actor.data.type === "threat") {
        token.card.visible = false
    }

}
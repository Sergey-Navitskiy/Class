"use strict";

class Card{
    constructor(src, alt, price, oldPrice, type, description, parent){
        this.src = src;
        this.alt = alt;
        this.price = price;
        this.oldPrice = oldPrice;
        this.type = type;
        this.description = description;
        this.sale = Math.floor((this.price / this.oldPrice) * 100 - 100);
        this.parent = parent;
    }
    render() {
        document.querySelector(this.parent).insertAdjacentHTML('beforeend',
        `   
        <div class="card">
        <img class="card__img" src="${this.src}" alt="${this.alt}" />
        <div class="card__sale">${this.sale}</div>
        <div class="card__price">
        ${this.price}р<span class="card__old-Price"> <s>${this.oldPrice}</s> </span>
        </div>
        <div class="card__type">${this.type}</div>
        <div class="card__descr">${this.description}</div>
        </div>
            
        `
        )
    }
}
document.querySelector('.btn').addEventListener('click',function(){
    for(let i = 0; i < 3; i++){
        new Card("img/tv-2.png", "tv", 18000, 28500, "Старая коллекция", "Лучший телевизор на планете", ".cards").render()
    }

})
// let copyOfCard = new Card('img/tv-2.png', "tv", 18000, 28500, "Старая коллекция", "Лучший телевизор на планете", ".cards")
// copyOfCard.render()
// copyOfCard.render()
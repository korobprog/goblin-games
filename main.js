/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  constructor(counter) {
    this.counter = counter;
  }
  goblinOn(newBox) {
    if (newBox && this.counter > 0) {
      const gBox = document.getElementById(`box${newBox}`);
      gBox.className = 'box goblin';
    }
  }
  goblinOff(currentBox) {
    if (currentBox) {
      const gBox = document.getElementById(`box${currentBox}`);
      if (gBox.className === 'box goblin') {
        gBox.className = 'box';
        this.counter -= 1;
      }
      if (this.counter === 0) throw Error('Counter limitation');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/clickHandler.js
class ClickHandler {
  constructor(element) {
    this.element = document.querySelector(element);
    this.testGoblinClick = this.testGoblinClick.bind(this);
    this.testGoblinClick.bind(this);
    this.pKills = document.getElementById('goblinsKills');
    this.element.addEventListener('click', this.testGoblinClick);
    this.kills = 0;
  }
  testGoblinClick(e) {
    if (e.target.className === 'box goblin') {
      e.target.className = 'box';
      this.kills += 1;
      this.pKills.textContent = `Убито: ${this.kills}`;
    } else throw new Error('No Goblin');
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


let curBox;
let newBox;
const attemptsLimit = 5;
const goblin = new Goblin(attemptsLimit);
const click = new ClickHandler('.playground');
console.log('🚀 ~ file: app.js:9 ~ click:', click);
const gameOn = setInterval(() => {
  do {
    newBox = Math.floor(Math.random() * 16) + 1;
  } while (curBox === newBox);
  try {
    goblin.goblinOff(curBox);
  } catch (err) {
    if (err.message === 'Counter limitation') {
      alert('GAME OVER!');
      clearInterval(gameOn);
      newBox = undefined;
    }
  }
  goblin.goblinOn(newBox);
  curBox = newBox;
}, 1000);
gameOn();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
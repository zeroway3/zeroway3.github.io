"use strict";(self["webpackChunkwww"]=self["webpackChunkwww"]||[]).push([[914],{2126:function(e,s,i){i.r(s),i.d(s,{default:function(){return g}});var a=i(5976),t=i(160);const d={class:"game-container"},l={class:"game-board"},r=["onClick"],n={class:"card-inner"},p={class:"card-back"},c=["src"],o={class:"game-footer"};function h(e,s,i,h,m,u){return(0,a.uX)(),(0,a.CE)("div",d,[s[4]||(s[4]=(0,a.Lk)("h1",{class:"game-title"},"LEAON CARD GAME",-1)),(0,a.Lk)("div",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(m.cards,((e,i)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,t.C4)(["card",{flipped:e.isFlipped||e.isMatched}]),key:i,onClick:e=>u.flipCard(i)},[(0,a.Lk)("div",n,[s[1]||(s[1]=(0,a.Lk)("div",{class:"card-front"},null,-1)),(0,a.Lk)("div",p,[(0,a.Lk)("img",{src:e.image,alt:"Card Image"},null,8,c)])])],10,r)))),128))]),(0,a.Lk)("div",o,[(0,a.Lk)("p",null,"Moves: "+(0,t.v_)(m.moves),1),(0,a.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>u.resetGame&&u.resetGame(...e))},"Restart Game"),s[2]||(s[2]=(0,a.Lk)("br",null,null,-1)),s[3]||(s[3]=(0,a.Lk)("button",{class:"next-level-button"},"Next Level",-1))])])}i(4114),i(1454);var m={data(){return{images:[i(4353),i(8502),i(8611)],cards:[],flippedCards:[],moves:0}},methods:{shuffle(e){for(let s=e.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[e[s],e[i]]=[e[i],e[s]]}return e},initializeGame(){const e=[...this.images,...this.images];this.cards=this.shuffle(e.map((e=>({image:e,isFlipped:!1,isMatched:!1})))),this.flippedCards=[],this.moves=0},flipCard(e){const s=this.cards[e];if(!s.isFlipped&&!s.isMatched&&2!==this.flippedCards.length&&(s.isFlipped=!0,this.flippedCards.push(e),2===this.flippedCards.length)){this.moves++;const[e,s]=this.flippedCards,i=this.cards[e],a=this.cards[s];i.image===a.image?(i.isMatched=!0,a.isMatched=!0,this.flippedCards=[]):setTimeout((()=>{i.isFlipped=!1,a.isFlipped=!1,this.flippedCards=[]}),1e3)}},resetGame(){this.initializeGame()}},mounted(){this.initializeGame()}},u=i(1169);const f=(0,u.A)(m,[["render",h],["__scopeId","data-v-6933d4c1"]]);var g=f},4353:function(e,s,i){e.exports=i.p+"img/game1.1230b389.jpg"},8502:function(e,s,i){e.exports=i.p+"img/game2.9d796383.jpg"},8611:function(e,s,i){e.exports=i.p+"img/game3.e6b49b7d.jpg"}}]);
//# sourceMappingURL=BenefitsPage.d4a9391f.js.map
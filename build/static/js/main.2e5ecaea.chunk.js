(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Aang","image":"https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003","clicked":false},{"id":2,"name":"Katara","image":"https://vignette.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png/revision/latest?cb=20150104171449","clicked":false},{"id":3,"name":"Sokka","image":"https://vignette.wikia.nocookie.net/avatar/images/c/cc/Sokka.png/revision/latest?cb=20140905085428","clicked":false},{"id":4,"name":"Zuko","image":"https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142","clicked":false},{"id":5,"name":"Azula","image":"https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest?cb=20140905084941","clicked":false},{"id":6,"name":"Toph Beifong","image":"https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047","clicked":false},{"id":7,"name":"Iroh","image":"https://vignette.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png/revision/latest?cb=20130626131914","clicked":false},{"id":8,"name":"Ozai","image":"https://vignette.wikia.nocookie.net/avatar/images/4/4a/Ozai.png/revision/latest?cb=20130612170743","clicked":false},{"id":9,"name":"Suki","image":"https://vignette.wikia.nocookie.net/avatar/images/1/14/Suki.png/revision/latest?cb=20130819094354","clicked":false},{"id":10,"name":"Roku","image":"https://vignette.wikia.nocookie.net/avatar/images/f/f6/Roku.png/revision/latest?cb=20120601014953","clicked":false},{"id":11,"name":"Bumi","image":"https://vignette.wikia.nocookie.net/avatar/images/e/e8/King_Bumi.png/revision/latest?cb=20140106141303","clicked":false},{"id":12,"name":"Zhao","image":"https://vignette.wikia.nocookie.net/avatar/images/e/e1/Commander_Zhao.png/revision/latest?cb=20140103180854","clicked":false}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(2),r=t.n(c),s=(t(13),t(3)),o=t(4),l=t(7),m=t(6);t(14);var g=function(e){return i.a.createElement("div",{className:"wrapper container-fluid"},e.children)};t(15);var u=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"col-4 text-center"},"Clicky Game"),i.a.createElement("div",{className:"col-4 text-center"},e.message),i.a.createElement("div",{className:"col-4 text-center"},"Score: ",e.score," | Highscore: ",e.highScore))};t(16);var h=function(){return i.a.createElement("div",{className:"text-center head"},i.a.createElement("h1",null,"Avatar"),i.a.createElement("h4",null,"The Last Airbender"),i.a.createElement("h3",null,"Clicky Game!"),i.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"))};t(17);var k=function(e){return i.a.createElement("div",{className:"img-card",onClick:function(){return e.click(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image}))};t(18);var v=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("br",null),i.a.createElement("div",{className:"footer-title"},"Avatar Clicky Game!"))},d=t(5),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={score:0,highScore:0,message:"Click an image to begin!",characters:d},e.restart=function(){e.state.characters.forEach((function(e){return e.clicked=!1})),e.setState({score:0,message:"You have not mastered the 4 elements!"})},e.winner=function(){e.state.characters.forEach((function(e){return e.clicked=!1})),e.setState({score:0,message:"You are an elemental master!"})},e.handleClick=function(a){var t=e.state.characters.find((function(e){return e.id===a}));!1===t.clicked?(t.clicked=!0,e.state.characters.sort((function(){return Math.random()-.5})),e.state.score+1>e.state.highScore&&e.setState({highScore:e.state.highScore+1}),e.state.score+1===12?e.winner():e.setState({score:e.state.score+1,message:"Well Done!"})):(e.state.characters.sort((function(){return Math.random()-.5})),e.restart())},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u,{message:this.state.message,score:this.state.score,highScore:this.state.highScore}),i.a.createElement(h,null),i.a.createElement(g,null,this.state.characters.map((function(a){return i.a.createElement(k,{id:a.id,key:a.id,name:a.name,image:a.image,click:e.handleClick})}))),i.a.createElement(v,null))}}]),t}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.2e5ecaea.chunk.js.map
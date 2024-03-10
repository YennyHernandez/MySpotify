"use strict";(self.webpackChunkMySpotify=self.webpackChunkMySpotify||[]).push([[673],{7673:(b,g,e)=>{e.r(g),e.d(g,{HomeModule:()=>p});var c=e(6895),i=e(2386),s=e(8256);const a=[{path:"tracks",loadChildren:()=>Promise.resolve().then(e.bind(e,3534)).then(l=>l.TracksModule)},{path:"Favorites",loadChildren:()=>Promise.all([e.e(592),e.e(943)]).then(e.bind(e,7943)).then(l=>l.FavoritesModule)},{path:"history",loadChildren:()=>Promise.all([e.e(433),e.e(592),e.e(453)]).then(e.bind(e,5453)).then(l=>l.HistoryModule)},{path:"**",redirectTo:"tracks"}];class t{}t.\u0275fac=function(M){return new(M||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[i.Bz.forChild(a),i.Bz]});var y=e(4466),Z=e(3534);class p{}p.\u0275fac=function(M){return new(M||p)},p.\u0275mod=s.oAB({type:p}),p.\u0275inj=s.cJS({imports:[c.ez,t,y.m,Z.TracksModule]})},3534:(b,g,e)=>{e.r(g),e.d(g,{TracksModule:()=>h});var c=e(6895),i=e(2386);function s(o,n,r,d,m,C,u){try{var x=o[C](u),P=x.value}catch(L){return void r(L)}x.done?n(P):Promise.resolve(P).then(d,m)}var t=e(8256),y=e(9646),Z=e(4004),p=e(5577),l=e(262),M=e(2340),A=e(529);class f{constructor(n){this.http=n,this.URL=M.N.api}skipById(n,r){return new Promise((d,m)=>{d(n.filter(u=>u._id!==r))})}getAllTracks$(){return this.http.get(`${this.URL}/tracks`).pipe((0,Z.U)(({data:n})=>n))}getAllRandom$(){return this.http.get(`${this.URL}/tracks`).pipe((0,p.z)(({data:n})=>this.skipById(n,2)),(0,l.K)(n=>(0,y.of)([])))}}f.\u0275fac=function(n){return new(n||f)(t.LFG(A.eN))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"});var B=e(2172),S=e(5562);const I=function(){return{"uil-play":!0}};function _(o,n){if(1&o){const r=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(r);const m=t.oxw(2);return t.KtG(m.sendPlay(m.track))}),t._UZ(1,"i",9),t.qZA()}2&o&&(t.xp6(1),t.Q6J("ngClass",t.DdM(1,I)))}function J(o,n){1&o&&(t.TgZ(0,"button",10),t._UZ(1,"i",11),t.qZA())}function E(o,n){if(1&o&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4),t._uU(3),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,_,2,2,"button",6),t.YNc(6,J,2,0,"button",7),t.qZA()()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("customImg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png")("src",r.track.cover,t.LSH)("alt",r.track.name),t.xp6(2),t.hij(" ",r.track.name," "),t.xp6(2),t.Q6J("ngIf",!0),t.xp6(1),t.Q6J("ngIf",!1)}}function F(o,n){if(1&o){const r=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(r);const m=t.oxw(2);return t.KtG(m.sendPlay(m.track))}),t._UZ(1,"i",9),t.qZA()}2&o&&(t.xp6(1),t.Q6J("ngClass",t.DdM(1,I)))}function U(o,n){1&o&&(t.TgZ(0,"button",10),t._UZ(1,"i",11),t.qZA())}function D(o,n){if(1&o&&(t.TgZ(0,"div",12),t._UZ(1,"img",3),t.TgZ(2,"div",4)(3,"div",13),t._uU(4),t.qZA(),t.TgZ(5,"div",14),t._uU(6),t.qZA()(),t.TgZ(7,"div",5),t.YNc(8,F,2,2,"button",6),t.YNc(9,U,2,0,"button",7),t.qZA()()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("customImg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png")("src",r.track.cover,t.LSH)("alt",r.track.name),t.xp6(3),t.Oqu(r.track.name),t.xp6(2),t.Oqu(r.track.name),t.xp6(2),t.Q6J("ngIf",!0),t.xp6(1),t.Q6J("ngIf",!1)}}class T{constructor(n){this.multimediaService=n,this.mode="small",this.track={_id:0,name:"",album:"",url:"",cover:""}}ngOnInit(){}sendPlay(n){console.log("enviando cancion next al servicio",n),this.multimediaService.trackInfo$.next(n)}}function R(o,n){if(1&o&&(t.TgZ(0,"li"),t._UZ(1,"app-card-player",5),t.qZA()),2&o){const r=n.$implicit,d=t.oxw();t.xp6(1),t.Q6J("track",r)("mode",d.mode)}}T.\u0275fac=function(n){return new(n||T)(t.Y36(B.V))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-card-player"]],inputs:{mode:"mode",track:"track"},decls:2,vars:2,consts:[["class","card-player player-small",4,"ngIf"],["class","card-player player-big",4,"ngIf"],[1,"card-player","player-small"],["appImgBroken","",1,"cover",3,"customImg","src","alt"],[1,"content-player"],[1,"buttons-player"],["class","play-btn",3,"click",4,"ngIf"],["class","play-btn",4,"ngIf"],[1,"play-btn",3,"click"],[1,"uil",3,"ngClass"],[1,"play-btn"],[1,"uil","uil-play"],[1,"card-player","player-big"],[1,"title-track"],[1,"sub-title-track"]],template:function(n,r){1&n&&(t.YNc(0,E,7,6,"div",0),t.YNc(1,D,10,7,"div",1)),2&n&&(t.Q6J("ngIf","small"===r.mode),t.xp6(1),t.Q6J("ngIf","big"===r.mode))},dependencies:[c.mk,c.O5,S.d],styles:[".card-player[_ngcontent-%COMP%]{background-color:var(--color-2);height:5rem;border-radius:var(--border-radius-1);display:flex;cursor:pointer;transition:all ease var(--animation-1);justify-content:space-between}.card-player[_ngcontent-%COMP%]:hover{background-color:#4d4d4d}.card-player[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:5rem;height:100%;object-fit:cover;border-top-left-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1)}.card-player[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]{font-weight:500;display:flex;align-items:center;align-content:center;padding:0 0 0 .75rem}.card-player[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]{opacity:0;width:5rem;display:flex;justify-content:center;align-content:center;align-items:center;transition:all ease var(--animation-1)}.card-player[_ngcontent-%COMP%]:hover   .buttons-player[_ngcontent-%COMP%]{opacity:1}.card-player[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]{color:var(--color-4);border:0;font-size:1.15rem;border-radius:2rem;background-color:var(--color-1);width:45px;height:45px}.card-player.player-big[_ngcontent-%COMP%]{position:relative;flex-direction:column;height:18rem;padding:1rem}.card-player.player-big[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:100%;height:200px;border-radius:var(--border-radius-1)}.card-player.player-big[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]{padding:.5rem 0;flex-direction:column;align-self:flex-start;align-items:flex-start}.card-player.player-big[_ngcontent-%COMP%]   .content-player[_ngcontent-%COMP%]   .sub-title-track[_ngcontent-%COMP%]{font-size:80%;opacity:.7}.card-player.player-big[_ngcontent-%COMP%]   .buttons-player[_ngcontent-%COMP%]{position:absolute;right:0;top:13rem}"]});const z=function(o,n){return{"card-small":o,"card-big":n}};class k{constructor(){this.title=" ",this.mode="big",this.dataTracks=[]}}k.\u0275fac=function(n){return new(n||k)},k.\u0275cmp=t.Xpm({type:k,selectors:[["app-section-generic"]],inputs:{title:"title",mode:"mode",dataTracks:"dataTracks"},decls:6,vars:6,consts:[[1,"section--generic"],[1,"section--generic__title"],[1,"section--generic__player--zone"],[1,"player--list",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"track","mode"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"ul",3),t.YNc(5,R,2,2,"li",4),t.qZA()()()),2&n&&(t.xp6(2),t.Oqu(r.title),t.xp6(2),t.Q6J("ngClass",t.WLB(3,z,"small"===r.mode,"big"===r.mode)),t.xp6(1),t.Q6J("ngForOf",r.dataTracks))},dependencies:[c.mk,c.sg,T],styles:[".section--generic[_ngcontent-%COMP%]{margin-bottom:2rem}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list[_ngcontent-%COMP%]{display:grid;list-style:none;margin:0;padding:0;gap:1.15rem}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list.card-small[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}.section--generic__player--zone[_ngcontent-%COMP%]   .player--list.card-big[_ngcontent-%COMP%]{grid-template-columns:repeat(6,minmax(100px,1fr))}"]});class O{constructor(n){this.trackService=n,this.tracksTrending=[],this.tracksRandom=[],this.listObservers$=[]}ngOnInit(){this.loadDataAll(),this.loadDataRandom()}loadDataAll(){var n=this;return function a(o){return function(){var n=this,r=arguments;return new Promise(function(d,m){var C=o.apply(n,r);function u(P){s(C,d,m,u,x,"next",P)}function x(P){s(C,d,m,u,x,"throw",P)}u(void 0)})}}(function*(){n.tracksTrending=yield n.trackService.getAllTracks$().toPromise()})()}loadDataRandom(){this.trackService.getAllRandom$().subscribe(n=>{this.tracksRandom=n})}ngOnDestroy(){}}O.\u0275fac=function(n){return new(n||O)(t.Y36(f))},O.\u0275cmp=t.Xpm({type:O,selectors:[["app-tracks-page"]],decls:3,vars:6,consts:[[1,"tracks-page"],[3,"dataTracks","mode","title"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-section-generic",1)(2,"app-section-generic",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("dataTracks",r.tracksTrending)("mode","small")("title","\xa1La mejor m\xfasica del mundo"),t.xp6(1),t.Q6J("dataTracks",r.tracksRandom)("mode","big")("title","Lo mejor de Electr\xf3nica"))},dependencies:[k],styles:[".tracks-page[_ngcontent-%COMP%]{padding:1rem}"]});const H=[{path:"",component:O}];class v{}v.\u0275fac=function(n){return new(n||v)},v.\u0275mod=t.oAB({type:v}),v.\u0275inj=t.cJS({imports:[i.Bz.forChild(H),i.Bz]});var Q=e(4466);class h{}h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[c.ez,v,Q.m]})},5562:(b,g,e)=>{e.d(g,{d:()=>i});var c=e(8256);class i{constructor(a){this.elHost=a,this.customImg=""}handleError(){const a=this.elHost.nativeElement;console.log("\u{1f534} Esta imagen revento --\x3e",this.elHost),a.src=this.customImg?this.customImg:"../../../assets/images/imagenBroken.png",console.log(this.customImg)}}i.\u0275fac=function(a){return new(a||i)(c.Y36(c.SBq))},i.\u0275dir=c.lG2({type:i,selectors:[["img","appImgBroken",""]],hostBindings:function(a,t){1&a&&c.NdJ("error",function(){return t.handleError()})},inputs:{customImg:"customImg"}})},4466:(b,g,e)=>{e.d(g,{m:()=>a});var c=e(6895),i=e(2386),s=e(8256);class a{}a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[c.ez,i.Bz]})}}]);
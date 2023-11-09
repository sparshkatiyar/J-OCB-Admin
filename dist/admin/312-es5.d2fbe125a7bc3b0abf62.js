!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(a=i.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"))?o:String(o)),i)}var a,o}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[312],{6312:function(e,i,a){a.r(i),a.d(i,{LayoutModule:function(){return st}});var o,r=a(8583),c=a(5319),u=a(5072),l=a(7969),d=a(4534),s=a(7716),g=a(4935),Z=a(2522),m=a(6627),p=((o=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-sidenav"]],decls:9,vars:0,consts:[[1,"list-group"],["routerLink","/home/dashboard","routerLinkActive","active","aria-current","true",1,"list-group-item","d-flex","align-items-center","gap-2","list-group-item-action"],["routerLink","/home/user-mgmt","routerLinkActive","active",1,"list-group-item","d-flex","align-items-center","gap-2","list-group-item-action"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"a",1),s.TgZ(2,"mat-icon"),s._uU(3,"dashboard"),s.qZA(),s._uU(4," Dashboard "),s.qZA(),s.TgZ(5,"a",2),s.TgZ(6,"mat-icon"),s._uU(7,"group"),s.qZA(),s._uU(8," User Mgmt "),s.qZA(),s.qZA())},directives:[c.yS,c.Od,m.Hw],styles:[".list-group-item.active[_ngcontent-%COMP%]{z-index:2;color:#fff;background:linear-gradient(98.97deg,#FD7208 5.15%,#fc900214 105.73%)!important;border:none}.list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:transparent;color:#fff;border:none;font-size:14px}"]}),o),f=a(1095),v=a(1436),h=function(){var e=function(){function e(n,i){t(this,e),this.breakpointObserver=n,this.router=i,this.isHandset$=this.breakpointObserver.observe(u.u3.Handset).pipe((0,l.U)(function(t){return t.matches}),(0,d.d)())}return n(e,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){sessionStorage.removeItem("OJCB"),this.router.navigateByUrl("login")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(u.Yg),s.Y36(c.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-layout"]],decls:19,vars:9,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"sidenav-logo","text-center"],["src","assets/images/logo-light.png","alt","logo",1,"w-75"],["color","primary",1,"justify-content-between"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"],["type","button","matTooltip","Logout","mat-icon-button","",3,"click"]],template:function(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"mat-sidenav-container",0),s.TgZ(1,"mat-sidenav",1,2),s.ALo(3,"async"),s.ALo(4,"async"),s.ALo(5,"async"),s.TgZ(6,"mat-toolbar"),s.TgZ(7,"div",3),s._UZ(8,"img",4),s.qZA(),s.qZA(),s._UZ(9,"app-sidenav"),s.qZA(),s.TgZ(10,"mat-sidenav-content"),s.TgZ(11,"mat-toolbar",5),s.TgZ(12,"button",6),s.NdJ("click",function(){return s.CHM(n),s.MAs(2).toggle()}),s.TgZ(13,"mat-icon",7),s._uU(14,"menu"),s.qZA(),s.qZA(),s.TgZ(15,"button",8),s.NdJ("click",function(){return e.logout()}),s.TgZ(16,"mat-icon"),s._uU(17,"exit_to_app"),s.qZA(),s.qZA(),s.qZA(),s._UZ(18,"router-outlet"),s.qZA(),s.qZA()}2&t&&(s.xp6(1),s.Q6J("mode",s.lcZ(4,5,e.isHandset$)?"over":"side")("opened",!1===s.lcZ(5,7,e.isHandset$)),s.uIk("role",s.lcZ(3,3,e.isHandset$)?"dialog":"navigation"))},directives:[g.TM,g.JX,Z.Ye,p,g.Rh,f.lW,m.Hw,v.gM,c.lC],pipes:[r.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}mat-sidenav[_ngcontent-%COMP%]{background:linear-gradient(180deg,#1A1A1D 8.02%,#695033 69.19%)}"]}),e}(),b=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(s.TgZ(0,"p"),s._uU(1,"dashboard works!"),s.qZA())},styles:[""]}),e}(),A=a(2789),T=a(2238),q=a(9573),y=a(5939),_=a(8295),U=a(9983),k=a(9692),x=a(5396),w=["MatPaginator1"],D=["MatPaginator2"];function N(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," No. "),s.qZA())}function C(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.index;s.xp6(1),s.hij(" ",n+1," ")}}function M(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Name "),s.qZA())}function Y(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",null==n?null:n.name," ")}}function S(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Image "),s.qZA())}function P(t,e){if(1&t&&(s.TgZ(0,"td",45),s._UZ(1,"img",46),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.s9C("src",null==n?null:n.profile_picture,s.LSH)}}function Q(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Email "),s.qZA())}function B(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",null==n?null:n.email," ")}}function J(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Joined Date "),s.qZA())}function O(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.ALo(2,"date"),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",s.lcZ(2,1,null==n?null:n.createdAt)," ")}}function H(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Mobile No "),s.qZA())}function j(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",null==n?null:n.mobile," ")}}function $(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Actions "),s.TgZ(2,"div",47),s.TgZ(3,"span",48),s._uU(4,"Delete"),s.qZA(),s.TgZ(5,"span",48),s._uU(6,"Block"),s._UZ(7,"br"),s._uU(8,"Unblock"),s.qZA(),s.qZA(),s.qZA())}function I(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"td",45),s.TgZ(1,"div",49),s.TgZ(2,"span",48),s.TgZ(3,"mat-icon",50),s.NdJ("click",function(){var t=s.CHM(n).$implicit;return s.oxw().deleteUser(t.id)}),s._uU(4,"delete"),s.qZA(),s.qZA(),s.TgZ(5,"span",48),s.TgZ(6,"mat-slide-toggle",51),s.NdJ("change",function(t){var e=s.CHM(n).$implicit;return s.oxw().activeInactive(null==e?null:e.id,t)}),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){var i=e.$implicit;s.xp6(6),s.Q6J("checked",null==i?null:i.is_active)}}function L(t,e){1&t&&s._UZ(0,"tr",52)}function z(t,e){1&t&&s._UZ(0,"tr",53)}function R(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," No. "),s.qZA())}function F(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.index;s.xp6(1),s.hij(" ",n+1," ")}}function X(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Name "),s.qZA())}function E(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",null==n?null:n.name," ")}}function G(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Mobile "),s.qZA())}function W(t,e){if(1&t&&(s.TgZ(0,"td",45),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.hij(" ",null==n?null:n.mobile," ")}}function V(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Image "),s.qZA())}function K(t,e){if(1&t&&(s.TgZ(0,"td",45),s._UZ(1,"img",46),s.qZA()),2&t){var n=e.$implicit;s.xp6(1),s.s9C("src",null==n?null:n.profile_picture,s.LSH)}}function tt(t,e){1&t&&(s.TgZ(0,"th",44),s._uU(1," Actions "),s.TgZ(2,"div",47),s.TgZ(3,"span",48),s._uU(4,"Delete"),s.qZA(),s.TgZ(5,"span",48),s._uU(6,"Block"),s._UZ(7,"br"),s._uU(8,"Unblock"),s.qZA(),s.qZA(),s.qZA())}function et(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"td",45),s.TgZ(1,"div",49),s.TgZ(2,"span",48),s.TgZ(3,"mat-icon",50),s.NdJ("click",function(){var t=s.CHM(n).$implicit;return s.oxw().deleteDriver(t.id)}),s._uU(4,"delete"),s.qZA(),s.qZA(),s.TgZ(5,"span",48),s.TgZ(6,"mat-slide-toggle",51),s.NdJ("change",function(t){var e=s.CHM(n).$implicit;return s.oxw().activeInactiveDriver(null==e?null:e.id,t)}),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){var i=e.$implicit;s.xp6(6),s.Q6J("checked",null==i?null:i.is_active)}}function nt(t,e){1&t&&s._UZ(0,"tr",52)}function it(t,e){1&t&&s._UZ(0,"tr",53)}var at=function(){return[5,10,20]},ot=[],rt=[],ct=[{path:"",component:h,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:b},{path:"user-mgmt",component:function(){var e=function(){function e(n,i){t(this,e),this.dialog=n,this.api=i,this.displayedColumns1=["position","img","name","weight","mobile","symbol","action"],this.dataSource1=new A.by(ot),this.displayedColumns2=["position","name","weight","symbol","action"],this.dataSource2=new A.by(rt)}return n(e,[{key:"ngAfterViewInit",value:function(){this.dataSource1.paginator=this.MatPaginator1,this.dataSource2.paginator=this.MatPaginator2}},{key:"ngOnInit",value:function(){this.getData(),this.getDriverData()}},{key:"getData",value:function(){var t=this;this.api.get("user-list").subscribe({next:function(e){t.userData=e.data.rows,t.dataSource1=new A.by(t.userData),t.dataSource1.paginator=t.MatPaginator1}})}},{key:"getDriverData",value:function(){var t=this;this.api.get("driver-list").subscribe({next:function(e){t.driverData=e.data.rows,t.dataSource2=new A.by(t.driverData),t.dataSource2.paginator=t.MatPaginator2}})}},{key:"deleteUser",value:function(t){var e=this;this.api.patch("user-block-unblock-or-delete",{id:t,is_delete:!0}).subscribe({next:function(t){e.getData()}})}},{key:"deleteDriver",value:function(t){var e=this;this.api.patch("block-unblock-or-delete",{id:t,is_delete:!0}).subscribe({next:function(t){e.getDriverData()}})}},{key:"activeInactive",value:function(t,e){var n=this;this.api.patch("user-block-unblock-or-delete",{id:t,is_active:e.checked}).subscribe(function(t){n.getData()},function(t){console.log(t)})}},{key:"activeInactiveDriver",value:function(t,e){var n=this;this.api.patch("block-unblock-or-delete",{id:t,is_active:e.checked}).subscribe(function(t){n.getDriverData()},function(t){console.log(t)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(T.uw),s.Y36(q.s))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-table-tab-mgmt"]],viewQuery:function(t,e){var n;(1&t&&(s.Gf(w,5),s.Gf(D,5)),2&t)&&(s.iGM(n=s.CRH())&&(e.MatPaginator1=n.first),s.iGM(n=s.CRH())&&(e.MatPaginator2=n.first))},decls:101,vars:10,consts:[[1,"main-wrapper"],[1,"container-fluid"],[1,"main-heading","my-3"],["mat-align-tabs","start"],["label","User "],[1,"row","align-items-center","my-3"],[1,"col-md-6","col-lg-3","mb-3"],["appearance","outline"],["matInput","","placeholder","Search by Name"],[1,"table-responsive","mb-5"],[1,"w-100"],["mat-table","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","img"],["matColumnDef","weight"],["matColumnDef","symbol"],["matColumnDef","mobile"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["MatPaginator1","matPaginator"],["label","Driver"],["MatPaginator2","matPaginator"],["id","add-edit",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-dark"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","",1,"form-label"],["type","text",1,"form-control"],[1,"form-select"],["value","","hidden",""],["value",""],[1,"text-center"],["type","submit","mat-raised-button","","color","primary","data-bs-dismiss","modal"],["mat-header-cell",""],["mat-cell",""],[1,"mb-1","mt-2","border-1",2,"width","50px","height","50px","background-color","#414141",3,"src"],[1,"d-flex","justify-content-center","gap-3","align-items-center"],[1,"action-head"],[1,"action-icon","d-flex","justify-content-center","gap-3","align-items-center"],["matTooltip","Delete",1,"text-danger",3,"click"],[3,"checked","change"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"h3"),s._uU(4,"User Management"),s.qZA(),s.qZA(),s.TgZ(5,"mat-tab-group",3),s.TgZ(6,"mat-tab",4),s.TgZ(7,"div",5),s.TgZ(8,"div",6),s.TgZ(9,"mat-form-field",7),s.TgZ(10,"mat-label"),s._uU(11,"Search"),s.qZA(),s._UZ(12,"input",8),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"div",9),s.TgZ(14,"div",10),s.TgZ(15,"table",11),s.ynx(16,12),s.YNc(17,N,2,0,"th",13),s.YNc(18,C,2,1,"td",14),s.BQk(),s.ynx(19,15),s.YNc(20,M,2,0,"th",13),s.YNc(21,Y,2,1,"td",14),s.BQk(),s.ynx(22,16),s.YNc(23,S,2,0,"th",13),s.YNc(24,P,2,1,"td",14),s.BQk(),s.ynx(25,17),s.YNc(26,Q,2,0,"th",13),s.YNc(27,B,2,1,"td",14),s.BQk(),s.ynx(28,18),s.YNc(29,J,2,0,"th",13),s.YNc(30,O,3,3,"td",14),s.BQk(),s.ynx(31,19),s.YNc(32,H,2,0,"th",13),s.YNc(33,j,2,1,"td",14),s.BQk(),s.ynx(34,20),s.YNc(35,$,9,0,"th",13),s.YNc(36,I,7,1,"td",14),s.BQk(),s.YNc(37,L,1,0,"tr",21),s.YNc(38,z,1,0,"tr",22),s.qZA(),s._UZ(39,"mat-paginator",23,24),s.qZA(),s.qZA(),s.qZA(),s.TgZ(41,"mat-tab",25),s.TgZ(42,"div",5),s.TgZ(43,"div",6),s.TgZ(44,"mat-form-field",7),s.TgZ(45,"mat-label"),s._uU(46,"Search"),s.qZA(),s._UZ(47,"input",8),s.qZA(),s.qZA(),s.qZA(),s.TgZ(48,"div",9),s.TgZ(49,"div",10),s.TgZ(50,"table",11),s.ynx(51,12),s.YNc(52,R,2,0,"th",13),s.YNc(53,F,2,1,"td",14),s.BQk(),s.ynx(54,15),s.YNc(55,X,2,0,"th",13),s.YNc(56,E,2,1,"td",14),s.BQk(),s.ynx(57,17),s.YNc(58,G,2,0,"th",13),s.YNc(59,W,2,1,"td",14),s.BQk(),s.ynx(60,18),s.YNc(61,V,2,0,"th",13),s.YNc(62,K,2,1,"td",14),s.BQk(),s.ynx(63,20),s.YNc(64,tt,9,0,"th",13),s.YNc(65,et,7,1,"td",14),s.BQk(),s.YNc(66,nt,1,0,"tr",21),s.YNc(67,it,1,0,"tr",22),s.qZA(),s._UZ(68,"mat-paginator",23,26),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(70,"div",27),s.TgZ(71,"div",28),s.TgZ(72,"div",29),s.TgZ(73,"div",30),s.TgZ(74,"h5",31),s._uU(75,"Add"),s.qZA(),s._UZ(76,"button",32),s.qZA(),s.TgZ(77,"div",33),s.TgZ(78,"div",34),s.TgZ(79,"div",35),s.TgZ(80,"div",36),s.TgZ(81,"label",37),s._uU(82,"First Name"),s.qZA(),s._UZ(83,"input",38),s.qZA(),s.TgZ(84,"div",36),s.TgZ(85,"label",37),s._uU(86,"Last Name"),s.qZA(),s._UZ(87,"input",38),s.qZA(),s.TgZ(88,"div",36),s.TgZ(89,"label",37),s._uU(90,"Gender"),s.qZA(),s.TgZ(91,"select",39),s.TgZ(92,"option",40),s._uU(93,"Select Gender"),s.qZA(),s.TgZ(94,"option",41),s._uU(95,"Male"),s.qZA(),s.TgZ(96,"option",41),s._uU(97,"Female"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(98,"div",42),s.TgZ(99,"button",43),s._uU(100,"Update"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(15),s.Q6J("dataSource",e.dataSource1),s.xp6(22),s.Q6J("matHeaderRowDef",e.displayedColumns1),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns1),s.xp6(1),s.Q6J("pageSizeOptions",s.DdM(8,at)),s.xp6(11),s.Q6J("dataSource",e.dataSource2),s.xp6(16),s.Q6J("matHeaderRowDef",e.displayedColumns2),s.xp6(1),s.Q6J("matRowDefColumns",e.displayedColumns2),s.xp6(1),s.Q6J("pageSizeOptions",s.DdM(9,at)))},directives:[y.SP,y.uX,_.KE,_.hX,U.Nt,A.BZ,A.w1,A.fO,A.Dz,A.as,A.nj,k.NW,f.lW,A.ge,A.ev,m.Hw,v.gM,x.Rr,A.XQ,A.Gk],pipes:[r.uU],styles:[""]}),e}()}]}],ut=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(ct)],c.Bz]}),e}(),lt=a(2402),dt=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,c.Bz,lt.q]]}),e}(),st=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,ut,dt,lt.q]]}),e}()}}])}();
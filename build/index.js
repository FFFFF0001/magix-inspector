/*1.0.8 xinglie.lkf@taobao.com*/!function(){var e=document;if(!e._magix){e._magix=1;var t={created:"#008B00",init:"#FF3030",alter:"#BC8F8F",isolated:"#FF3030",build:"#9AC0CD"},a={width:550,height:470,canvasWidth:530,canvasHeight:400,moreInfoWidth:490,titleHeight:34,circleMargin:6,minCircleRadius:15,managerCols:5,managerMargin:5,managerHeight:40,managerGroupSpace:40,eventsStartColor:{r:0,g:153,b:102},eventsEndColor:{r:255,g:255,b:0},eventsCommonCount:15},i=["FFC125","C71585","CDBA96","FF7F00","BA55D3","8B4726","7CFC00","4A4A4A","EE7AE9"],n={cache:"#CC9966",cleaned:"#99CCCC",cleans:"#FF9999",normal:"#CCCC99"},r=function(e,t){var a=document.createElement("style");document.documentElement.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))};r("mx_ispt_bca",".mx_ispt_bca-icon:before{width:12px;content:'M';height:12px;border-radius:6px;position:absolute;background-color:#008b00;opacity:.4;font-size:10px;line-height:12px;text-align:center;color:#fff}.mx_ispt_bca-icon-bad:before{background-color:#ff3030}.mx_ispt_bca-icon-alter:before{background-color:#bc8f8f}.mx_ispt_bca-tle{padding-right:5px}.mx_ispt_bca-tab{background:#eee;cursor:move;margin:0;padding:0}.mx_ispt_bca-main{position:fixed;right:20px;top:20px;width:550px;height:470px;z-index:2147483647;box-shadow:0 0 5px #b9b9b9;background-color:#fff;font-size:12px;line-height:1.5}.mx_ispt_bca-mask{position:absolute;opacity:.7;background-color:#90ee90}.mx_ispt_bca-main ul{list-style:none;padding:0}.mx_ispt_bca-m5{margin-left:5px}.mx_ispt_bca-binfo{padding:5px}.mx_ispt_bca-fl{float:left}.mx_ispt_bca-fr{float:right}.mx_ispt_bca-cp{cursor:pointer}.mx_ispt_bca-p8{padding:8px}.mx_ispt_bca-move{cursor:move}.mx_ispt_bca-red{color:red}.mx_ispt_bca-clearfix:after,.mx_ispt_bca-clearfix:before{content:\"\";display:table}.mx_ispt_bca-clearfix:after{clear:both}.mx_ispt_bca-clearfix{*zoom:1}.mx_ispt_bca-bar{height:1px;border:0;padding:0;margin:5px;background:rgba(0,0,0,.2);background:-webkit-gradient(linear,left top,right top,from(rgba(165,69,243,0)),color-stop(.5,hsla(270,6%,49%,.33)),to(rgba(165,69,243,0)))}#mx_manager_moreinfo,#mx_moreinfo{position:absolute;background-color:#eee;padding:8px;width:440px;display:none;box-shadow:0 2px 2px 2px #b9b9b9}");var o={main:'<div class="mx_ispt_bca-main" id="mx"><ul class="mx_ispt_bca-clearfix mx_ispt_bca-tab" id="mx_tabs"><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">VOM</li><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">Tracer</li><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">Manager</li><li class="mx_ispt_bca-fr mx_ispt_bca-p8 mx_ispt_bca-cp" id="mx_min">\u25b3</li></ul><div id="mx_painter"><div style="width:{width}px;height:{canvasHeight}px;overflow-x:auto;overflow-y:hidden" id="mx_view_cnt"><canvas width="{width}" height="{canvasHeight}" id="mx_view_canvas"></canvas></div><ul class="mx_ispt_bca-clearfix mx_ispt_bca-p8" id="mx_view_total"></ul></div><div id="mx_trancer" style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto;display:none;padding:8px"></div><div id="mx_manager" style="display:none"><div style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto" id="mx_manager_cnt"><canvas width="{canvasWidth}" height="{canvasHeight}" id="mx_manager_canvas"></canvas></div><ul class="mx_ispt_bca-clearfix mx_ispt_bca-p8" id="mx_manager_total"></ul></div><div id="mx_moreinfo"></div><div id="mx_manager_moreinfo"></div></div>',moreInfo:'<ul><li><b class="mx_ispt_bca-tle">id:</b>{id}</li><li><b class="mx_ispt_bca-tle">view:</b>{view}</li>{events} {share}<li class="mx_ispt_bca-red">{ex}</li><li><b class="mx_ispt_bca-tle">resources:</b></li><li style="{moreInfoWidth}px;overflow:auto;max-height:200px">{res}</li></ul>',moreManagerInfo:"<ul><li><b>key:</b>{id}</li><li><b>url:</b>{url}</li><li><b>\u63cf\u8ff0:</b>{desc}</li><li><b>\u7f13\u5b58:</b>{cache}</li><li><b>\u6e05\u7406\u7f13\u5b58:</b>{cleans}</li><li><b>\u9884\u5904\u7406:</b>{hasAfter}</li></ul>",total:'<li class="mx_ispt_bca-fl mx_ispt_bca-binfo">\u5171{total}\u4e2aview</li><li class="mx_ispt_bca-fl ml5 mx_ispt_bca-red mx_ispt_bca-binfo">{ex}</li>',managerTotal:'<li class="mx_ispt_bca-fl mx_ispt_bca-binfo">{groups}\u4e2a\u63a5\u53e3\u6587\u4ef6\uff0c\u5171{total}\u4e2a\u63a5\u53e3</li>',setup:function(){var t=e.createElement("div");t.innerHTML=o.main.replace(/\{(\w+)\}/g,function(e,t){return a[t]}),e.documentElement.appendChild(t),o.attachEvent();var i=p.getEnv();i.dragIt("#mx","#mx_tabs")},attachEvent:function(){o.detachEvent();var t,i=p.getEnv();i.bind("mx_view_canvas","mousemove",o.$mousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_view_canvas");o.onMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_view_canvas","mouseout",o.$mouseout=function(){clearTimeout(t),o.onMousemove({x:-1,y:-1})}),i.bind("mx_manager_canvas","mousemove",o.$mangerMousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_manager_canvas");o.onManagerMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_manager_canvas","mouseout",o.$managerMouseout=function(){clearTimeout(t),o.onManagerMousemove({x:-1,y:-1})}),i.bind("mx_moreinfo","mouseover",o.$imouseover=function(){clearTimeout(o.$hideTimer)}),i.bind("mx_moreinfo","mouseout",o.$imouseout=function(){o.hideMoreInfo()}),i.bind("mx","click",o.$click=function(t){var i;"mx_min"==t.target.id?(i=e.getElementById("mx"),"\u25b3"==t.target.innerHTML?(i.style.height=a.titleHeight+"px",i.style.overflow="hidden",t.target.innerHTML="\u25bd"):(i.style.height=a.height+"px",i.style.overflow="inherit",t.target.innerHTML="\u25b3")):"VOM"==t.target.innerHTML?(i=e.getElementById("mx_painter"),i.style.display="block",i=e.getElementById("mx_trancer"),i.style.display="none",i=e.getElementById("mx_manager"),i.style.display="none"):"Tracer"==t.target.innerHTML?(i=e.getElementById("mx_painter"),i.style.display="none",i=e.getElementById("mx_manager"),i.style.display="none",i=e.getElementById("mx_trancer"),i.style.display="block"):"Manager"==t.target.innerHTML&&(i=e.getElementById("mx_painter"),i.style.display="none",i=e.getElementById("mx_trancer"),i.style.display="none",i=e.getElementById("mx_manager"),i.style.display="block")})},detachEvent:function(){var e=p.getEnv();e.unbind("mx_view_canvas","mousemove",o.$mousemove),e.unbind("mx_view_canvas","mouseout",o.$mouseout),e.unbind("mx_manager_canvas","mousemove",o.$managerMousemove),e.unbind("mx_manager_canvas","mouseout",o.$managerMouseout),e.unbind("mx_min","click",o.$click),e.unbind("mx_moreinfo","mouseoout",o.$imouseout),e.unbind("mx_moreinfo","mouseover",o.$imouseover)},showMoreInfo:function(t,i){clearTimeout(o.$hideTimer);var n=e.getElementById("mx_cover");n||(n=e.createElement("div"),n.className="mx_ispt_bca-mask",n.id="mx_cover",e.body.appendChild(n));var r=e.getElementById("mx_moreinfo");r.style.display="block";var s=i.center.x-a.moreInfoWidth/2-e.getElementById("mx_view_cnt").scrollLeft;r.style.left=s+"px",r.style.top=i.center.y+i.radius+a.titleHeight+5+"px";var l=p.getEnv();l.updateDOMStyle(n.style,t.id),n.style.display="block",r.innerHTML=o.moreInfo.replace(/\{(\w+)\}/g,function(e,n){switch(n){case"id":return i.id;case"view":if(t){if(t.$v||t.path)return t.path;if(t.view)return t.view.path}return"";case"events":var r=p.getEvents(t);return r.total?'<li><b class="tle">listen:</b>'+r.list+"</li>":"";case"share":var o=p.getShared(t);return o.length?'<li><b class="tle">share:</b>'+o+"</li>":"";case"ex":if(i.il)return"\u88ab\u5b64\u7acb\u7684\u8282\u70b9\uff0c\u597d\u53ef\u601c\u2026\u2026";if(!t)return"vframe\u5df2\u88ab\u9500\u6bc1\uff0c\u4f46\u672a\u4ecevom\u4e2d\u79fb\u9664";if(t.path){if(t.cM&&!t.view||t.$c&&!t.$v)return"\u672a\u52a0\u8f7dview"}else if(!t.view)return"\u672a\u52a0\u8f7dview";if(t.cM){if(!t.fcc)return t.rC!=t.cC?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d"}else if(!t.$cr)return t.$rc!=t.$cc?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d";return t.fca||t.$ca?"\u7b49\u5f85view\u6e32\u67d3":"";case"res":var s=[],c=t&&t.view&&t.view.$res;if(c=c||t&&t.$v&&t.$v.$r){var d;for(var m in c){d=!0;break}if(d){s.push('<table style="width:100%"><tr><td>key</td><td>type</td></tr>');for(var m in c)s.push("<tr><td>",m,"</td><td>",l.getResType(c[m]),"</td></tr>");s.push("</table>")}}return s.join("");default:return a[n]}})},hideMoreInfo:function(){var t=e.getElementById("mx_moreinfo"),a=e.getElementById("mx_cover");o.$hideTimer=setTimeout(function(){t.style.display="none",a.style.display="none"},150)},showManagerMoreInfo:function(t){clearTimeout(o.$hideManagerTimer);var i=e.getElementById("mx_manager_moreinfo");i.style.display="block",i.style.left=t.rect[0]+"px";var n=t.rect[1]+t.rect[3]+a.titleHeight,r=e.getElementById("mx_manager_cnt").scrollTop;n-=r,i.style.top=n+"px",i.innerHTML=o.moreManagerInfo.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"id":return t.id;default:return t[a]}})},hideManagerMoreInfo:function(){var t=e.getElementById("mx_manager_moreinfo");o.$hideManagerTimer=setTimeout(function(){t.style.display="none"},150)},showManagerTotal:function(t){var a=e.getElementById("mx_manager_total");a.innerHTML=o.managerTotal.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"groups":return t.groups.length;case"total":return t.total}})},showTotal:function(t,a){var i=e.getElementById("mx_view_total");i.innerHTML=o.total.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"total":return t.vomTotal;case"ex":return t.total!=t.vomTotal?'<b style="color:red">vom\u4e2d\u5171'+t.vomTotal+"\u4e2aview\uff0c\u800c\u53ea\u6709"+t.total+"\u4e2a\u5b58\u5728\u5173\u8054</b>":""}})},updateManagerCanvasHeight:function(t){e.getElementById("mx_manager_canvas").height=0|t},updateVOMCanvansWidth:function(t){var i=e.getElementById("mx_view_canvas");i.width=0|t,i.parentNode.scrollLeft=(i.width-a.canvasWidth)/2},onMousemove:function(e){},onManagerMousemove:function(e){}},s={log:function(t,a){var i=e.getElementById("mx_trancer");if(s.idle){var n=e.createElement("hr");n.className="mx_ispt_bca-bar",i.insertBefore(n,i.firstChild),delete s.idle}var r=e.createElement("div");r.innerHTML=t,a&&(r.style.color=a),i.insertBefore(r,i.firstChild),i.getElementsByTagName("div").length>200&&(i.removeChild(i.lastChild),i.removeChild(i.lastChild)),clearTimeout(s.$timer),s.$timer=setTimeout(function(){s.idle=!0},1500)}},l={range:[new Date("2016-9-12"),new Date("2016-9-16")],path:"//thx.github.io/magix-inspector/f.png",bg:"#F2E7D6",pos:[100,80,275,279],fetch:function(){var e=this,t=new Date;if(e.range[0]<=t&&t<=e.range[1]&&(e.$img||(e.$img=new Image,e.$img.onload=function(){e.$loaded=!0},e.$img.src=e.path)),e.$loaded)return e.$img}},c={captureItmes:function(){var e=c;e.list=[],delete e.$last,o.onMousemove=function(t){var a,i,n;if(e.$last?(i=e.$last,n=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),n>i.radius&&(e.onHoverItem({item:i,action:"leave"}),delete e.$last,a=!0)):a=!0,a)for(var r=e.list.length-1;r>=0;r--)if(i=e.list[r],n=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),n<=i.radius){e.$last!=i&&(e.$last=i,e.onHoverItem({item:i,action:"enter"}));break}}},captureManagerItmes:function(){var e=c;e.managerList=[],delete e.$managerLast,o.onManagerMousemove=function(t){var a,i,n;if(e.$managerLast?(i=e.$managerLast,n=i.rect,(t.x<n[0]||t.y<n[1]||t.x>n[0]+n[2]||t.y>n[1]+n[3])&&(e.onHoverManagerItem({item:i,action:"leave"}),delete e.$managerLast,a=!0)):a=!0,a)for(var r=e.managerList.length-1;r>=0;r--)i=e.managerList[r],n=i.rect,t.x>=n[0]&&t.y>=n[1]&&t.x<=n[0]+n[2]&&t.y<=n[1]+n[3]&&e.$managerLast!=i&&(e.$managerLast=i,e.onHoverManagerItem({item:i,action:"enter"}))}},getBestParams:function(e,t,i){var n=0,r=0,s={},l=0,c=function(e,t){e.deep=t,e.children.length>l&&(l=e.children.length),e.deep>r&&(r=e.deep),s[t]?s[t]+=e.children.length:s[t]=e.children.length,s[t]>n&&(n=s[t]);for(var a=e.children.length-1;a>=0;a--)c(e.children[a],e.deep+1)};c(e,1),n=Math.max(n,e.isolated.length+1);var d=t/n-a.circleMargin,m=i/r-a.circleMargin,g=t,u=2*a.minCircleRadius;d<u?(d=u,g=u*n+(n+1)*a.circleMargin,g>3e4&&(g=3e4),o.updateVOMCanvansWidth(g)):o.updateVOMCanvansWidth(g);var h=Math.floor(Math.min(m,d)/2),v=(h/20).toFixed(1);return{width:g,max:n,maxOne:l,deep:r,margin:a.circleMargin,radius:h,band:v}},getChildrenCountByDeep:function(e,t){var a=0,i=function(e){e.deep==t&&e.children.length&&(e.leftIndex=a,a+=e.children.length);for(var n=0;n<e.children.length;n++)i(e.children[n])};return i(e),a},drawTree:function(t){if(t.id){var n=a.width,r=a.canvasHeight,s=c;s.captureItmes();var d=s.getBestParams(t,n,r);n=d.width;var m=e.getElementById("mx_view_canvas").getContext("2d");m.clearRect(0,0,n,r);var g=l.fetch();g&&(m.fillStyle=l.bg,m.fillRect(0,0,n,r),m.drawImage(g,l.pos[0],l.pos[1],l.pos[2],l.pos[3],0,0,l.pos[2]/2,l.pos[3]/2));var u=2*d.radius-2*(d.band+1)-1;s.$tWidth||(s.$tWidth={});var h=function(e){return s.$tWidth[e]||(m.font="normal 12px Arial",s.$tWidth[e]=m.measureText(e).width),s.$tWidth[e]},v=function(e){for(var t=1,a=0;t<=e.length;){if(a+=h(e.substring(t-1,t)),!(a<u))return e.substring(0,t-3)+"..";t+=1}return e},f=0,p=function(e,a,r,o){if(r){m.beginPath();var s=180*Math.atan((a.y-r.y)/(a.x-r.x))/Math.PI;s<0&&(s+=180);var l=Math.round(r.x+d.radius*Math.cos(s*Math.PI/180)),g=Math.round(r.y+d.radius*Math.sin(s*Math.PI/180));m.moveTo(l,g),m.lineTo(a.x,a.y),m.lineWidth=1,m.strokeStyle=o,m.stroke()}var u=c.getChildrenCountByDeep(t,e.deep);if(u)for(var h=(n-(u*d.radius*2+(u-1)*d.margin))/2,v="#"+i[f++%i.length],x=0;x<e.children.length;x++)p(e.children[x],{x:h+(x+e.leftIndex)*(2*d.radius+d.margin)+d.radius,y:a.y+d.margin+2*d.radius},a,v)},x=function(e,a){m.moveTo(a.x,a.y),m.beginPath(),m.arc(a.x,a.y,d.radius,0,2*Math.PI,!0),m.fillStyle=e.status,m.fill();var i=Math.max(.5,d.radius/10),r=a.y+d.radius/2;if(e.event){var o=a.x-d.radius/2+i;m.moveTo(o,r),m.beginPath(),m.arc(o,r,i,0,2*Math.PI,!0),m.fillStyle=e.event,m.fill()}if(e.shared){var l=a.x+d.radius/2-i;m.moveTo(l,r),m.beginPath(),m.arc(l,r,i,0,2*Math.PI,!0),m.fillStyle=e.shared,m.fill()}m.moveTo(a.x,a.y),m.beginPath(),m.arc(a.x,a.y,d.radius-d.band-1,0,2*Math.PI,!0),m.lineWidth=d.band,m.strokeStyle="#fff",m.stroke(),s.list.push({id:e.id,center:a,il:e.il,radius:d.radius}),m.beginPath(),m.moveTo(a.x,a.y),m.font="normal 12px Arial",m.fillStyle="#eee";var g=v(e.id),u=Math.round(m.measureText(g).width),h=(2*d.radius-u)/2;m.fillText(g,a.x+h-d.radius,a.y+4);var f=c.getChildrenCountByDeep(t,e.deep);if(f)for(var p=(n-(f*d.radius*2+(f-1)*d.margin))/2,_=0;_<e.children.length;_++)x(e.children[_],{x:p+(_+e.leftIndex)*(2*d.radius+d.margin)+d.radius,y:a.y+d.margin+2*d.radius})},_=t.isolated,b=n/2;if(_.length){b=(n-(_.length+1)*d.radius*2+_.length*d.margin)/2;for(var M=0;M<_.length;M++)x(_[M],{x:b+(M+1)*(2*d.radius+d.margin)+d.radius,y:d.margin+d.radius});b+=d.radius}p(t,{x:b,y:d.margin+d.radius}),x(t,{x:b,y:d.margin+d.radius}),o.showTotal(t,d)}},drawManagerTree:function(t){var n=c;n.captureManagerItmes();var r=a.managerMargin*(t.rows+1)+t.rows*a.managerHeight+(a.managerGroupSpace+a.managerMargin)*t.groups.length;o.updateManagerCanvasHeight(r);var s=e.getElementById("mx_manager_canvas").getContext("2d");s.clearRect(0,0,a.canvasWidth,r);var l=a.managerMargin,d=(a.canvasWidth-(1+a.managerCols)*a.managerMargin)/a.managerCols|0,m=function(){s.font="normal 14px Arial";var e=s.measureText("M").width;return e}(),g=function(e,t,a,i){e.beginPath(),e.moveTo(t[0],t[1]),e.fillStyle=a.color,e.fillRect(t[0],t[1],t[2],t[3]),e.beginPath(),e.moveTo(t[0],t[1]+10),e.font="normal 14px Arial",e.fillStyle="#282828";for(var r,o=a.id;(o.length-3)*m>t[2];)o=o.slice(0,-1),r=!0;r&&(o=o.slice(0,-3)+"..."),e.fillText(o,t[0]+5,t[1]+25),a["package"]=i,a.rect=t,n.managerList.push(a)},u=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=a.managerMargin,o=!1;s.beginPath(),s.moveTo(r,l),s.font="normal 14px Arial",s.fillStyle="#282828",s.fillText(n.name,r+5,l+25),l+=a.managerGroupSpace;var c,m,u=Math.max(n.maxLeft,n.maxRight),h={},v=0,f=(u-n.maxLeft)/2*(a.managerHeight+a.managerMargin),p=(u-n.maxRight)/2*(a.managerHeight+a.managerMargin);for(c=0;c<u;c++){var x=n.cleans.left[c],_=n.cleans.right[c];x&&(g(s,[r,l+f,150,a.managerHeight],x,n.name),h[x.id]=x),_&&(g(s,[a.canvasWidth-a.managerMargin-150,l+p,150,a.managerHeight],_,n.name),h[_.id]=_,_.lineColor=i[v++%i.length]),l+=a.managerMargin+a.managerHeight}for(var b in h)if(m=h[b],m.cleans)for(var M={x:m.rect[0]+m.rect[2],y:m.rect[1]+(m.rect[3]/2|0)},w=(m.cleans+"").split(","),y=w.length-1;y>=0;y--){var $=h[w[y]],I={x:$.rect[0],y:$.rect[1]+($.rect[3]/2|0)};s.beginPath(),s.moveTo(M.x,M.y),s.lineTo(I.x,I.y),s.lineWidth=1,s.strokeStyle="#"+($.lineColor||"996699"),s.stroke()}for(c=0;c<n.caches.length;c++)g(s,[r,l,d,a.managerHeight],n.caches[c],n.name),(c+1)%a.managerCols===0?(r=a.managerMargin,l+=a.managerMargin+a.managerHeight,o=!1):(r+=d+a.managerMargin,o=!0);for(r=a.managerMargin,o&&(l+=a.managerMargin+a.managerHeight),c=0;c<n.items.length;c++)m=n.items[c],g(s,[r,l,d,a.managerHeight],m,n.name),(c+1)%a.managerCols===0?(r=a.managerMargin,l+=a.managerMargin+a.managerHeight,o=!1):(r+=d+a.managerMargin,o=!0);r=a.managerMargin,o&&(l+=a.managerGroupSpace)}};u(t.groups),o.showManagerTotal(t)},onHoverItem:function(e){var t=p.getEnv(),a=t.getVOM();"enter"==e.action?o.showMoreInfo(a.get(e.item.id),e.item):o.hideMoreInfo()},onHoverManagerItem:function(e){"enter"==e.action?o.showManagerMoreInfo(e.item):o.hideManagerMoreInfo()}},d=window.KISSY,m={prepare:function(){d.use("node")},getRootId:function(){var e,t=d.Env.mods["magix/magix"];return e=t?d.require("magix/magix"):d.require("magix"),e.config("rootId")},getVOM:function(){var e=d.Env.mods["magix/magix"];if(e)return d.require("magix/vom");var t=d.require("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=d.Env.mods,t=[];for(var a in e){var i=e[a].exports||e[a].value;i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:e[a].name,exports:i})}return t},isReady:function(){var e=d.Env.mods["magix/magix"],t=d.Env.mods.node;if(e){var a=d.Env.mods["magix/vom"];return e.status===d.Loader.Status.ATTACHED&&a&&a.status===d.Loader.Status.ATTACHED&&t&&t.status===d.Loader.Status.ATTACHED}return e=d.Env.mods.magix,e&&e.status===d.Loader.Status.ATTACHED&&t&&t.status===d.Loader.Status.ATTACHED},updateDOMStyle:function(e,t){var a=d.require("node").one("#"+t);if(a){var i=a,n={height:i.outerHeight?i.outerHeight():i.height(),width:i.outerWidth?i.outerWidth():i.width()};if(n.height){var r=a.offset();e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",n.width=Math.max(n.width,a.children().width());var o=-1;do{var s=parseInt(a.css("z-index"))||1;s&&s>o&&(o=s),a=a.parent()}while(a);e.zIndex=o+1}else{var l=4,c=i;do{if(l--,!l)break;if(c=c.children(),n.height=c.height(),n.height){n.width=c.width();var m=c.css("position");if("fixed"==m){i=c.css("left"),e.left=i,e.position=m,i=c.css("top"),e.top=i,i=c.css("right"),e.right=i,i=c.css("bottom"),e.bottom=i;var o=parseInt(c.css("z-index"))||1;e.zIndex=o+1}else{var r=c.offset();e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",n.width=Math.max(n.width,c.children().width());var o=-1;do{var s=parseInt(c.css("z-index"))||1;s&&s>o&&(o=s),c=c.parent()}while(c);e.zIndex=o+1}break}}while(!n.height)}e.width=n.width+"px",e.height=n.height+"px"}},getDOMOffset:function(e){var t=d.require("node");return t.one("#"+e).offset()},bind:function(e,t,a){var i=d.require("node");return d.isString(e)&&(e="#"+e),i.one(e).on(t,a)},unbind:function(e,t,a){var i=d.require("node");return d.isString(e)&&(e="#"+e),i.one(e).detach(t,a)},getResType:function(e){var t="",a=e.res||e.e;if(a)if(a.all&&a.constructor&&a.constructor.cached)t="Magix.Service";else if(a.fetchAll||a.all&&a.one&&a.next&&a.then)t="Model Manager";else if(a.bricks)t="Pagelet";else if(a.__attrs&&a.__attrVals&&a.constructor){var i,n=d.Env.mods;for(var r in n){var o=n[r],s=o.value||o.exports;if(s&&a.constructor==s){t=o.name,i=!0;break}}i||(t=a.hasOwnProperty("pagelet")?"Brick":"extend S Attribute")}else t=d.isFunction(a)?"\u51fd\u6570\u6216\u6784\u9020\u5668":d.type(a);else t=d.type(a);return t},hookAttachMod:function(e){var t=d.Loader.Utils.attachMod;d.Loader.Utils.attachMod=function(){t.apply(d.Loader.Utils,arguments),e()}},dragIt:function(e,t){d.use("dd",function(a,i){new i.Draggable({node:e,move:!0,handlers:[t]})})},drawIcons:function(e){for(var t=e.length-1;t>=0;t--){var a=e[t],i=d.one("#"+a.id);i.removeClass("mx_ispt_bca-icon-bad").removeClass("mx_ispt_bca-icon-alter").addClass("mx_ispt_bca-icon"),a.cls&&i.addClass("icon-"+a.cls)}}},g={prepare:function(){},hookAttachMod:function(){},getMod:function(e){return require.s.contexts._.defined[e]},getDL:function(){return this.getMod("$")||this.getMod("jquery")||this.getMod("zepto")},getRootId:function(){var e,t=this.getMod("magix/magix");return e=t?t:this.getMod("magix"),e.config("rootId")},getVOM:function(){var e=this.getMod("magix/vom");if(e)return e;var t=this.getMod("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=require.s.contexts._.defined,t=[];for(var a in e){var i=e[a];i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:a,exports:i})}return t},isReady:function(){return this.getMod("magix/magix")||this.getMod("magix")},updateDOMStyle:function(e,t){var a=this.getDL(),i=a("#"+t),n=i,r={height:n.outerHeight?n.outerHeight():n.height(),width:n.outerWidth?n.outerWidth():n.width()};if(r.height){var o=i.offset();e.left=o.left+"px",e.top=o.top+"px",e.position="absolute",r.width=Math.max(r.width,i.children().width());var s=-1;do{var l=parseInt(i.css("z-index"))||1;l&&l>s&&(s=l),i=i.parent()}while(i.length&&a.contains(document.body,i[0]));e.zIndex=s+1}else{var c=4,d=n;do{if(c--,!c)break;if(d=d.children(),r.height=d.height(),r.height){var m=d.css("position");if("fixed"==m){n=d.css("left"),e.left=n,e.position=m,n=d.css("top"),e.top=n,n=d.css("right"),e.right=n,n=d.css("bottom"),e.bottom=n;var s=parseInt(d.css("z-index"))||1;e.zIndex=s+1}else{var o=d.offset();e.left=o.left+"px",e.top=o.top+"px",e.position="absolute",r.width=Math.max(r.width,d.children().width());var s=-1;do{var l=parseInt(d.css("z-index"))||1;l&&l>s&&(s=l),d=d.parent()}while(d.length&&a.contains(document.body,d[0]));e.zIndex=s+1}break}}while(!r.height)}e.width=r.width+"px",e.height=r.height+"px"},getDOMOffset:function(e){var t=this.getDL();return t("#"+e).offset()},bind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).on(t,a)},unbind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).off(t,a)},getResType:function(e){var t=e.res||e.e,a=this.getDL(),i=a.type(e);return t&&(t.all&&t.constructor&&t.constructor.cached?i="Magix.Service":t.fetchAll||t.all&&t.one&&t.next&&t.then?i="Model Manager":t.bricks?i="Pagelet":a.isFunction(t)&&(i="\u51fd\u6570\u6216\u6784\u9020\u5668")),i},dragIt:function(e,t){var a=this.getDL(),i=a(e);a(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var n=parseInt(i.css("right"),10),r=parseInt(i.css("top"),10),o=e.pageX,s=e.pageY,l=function(e){var t=e.pageX-o,a=e.pageY-s;r+a<0&&(a=-r),i.css({right:n-t,top:r+a})},c=function(){d.off("mousemove",l).off("mouseup",c)},d=a(document);d.on("mousemove",l).on("mouseup",c)}})},drawIcons:function(e){for(var t=this.getDL(),a=e.length-1;a>=0;a--){var i=e[a],n=t("#"+i.id);n.removeClass("mx_ispt_bca-icon-bad").removeClass("mx_ispt_bca-icon-alter").addClass("mx_ispt_bca-icon"),i.cls&&n.addClass("mx_ispt_bca-icon-"+i.cls)}}},u={},h={},v={};for(var f in g)u[f]=h[f]=v[f]=g[f];u.getMod=function(e){try{var t=seajs.require(e);return t}catch(a){}var i=seajs.cache;for(var n in i){var r=i[n];if(r.id===e)return r.exports}},u.getMangerMods=function(){var e=seajs.cache,t=[];for(var a in e){var i=e[a],n=i.exports;n&&n.$m&&n.$s&&t.push({name:i.id,exports:n})}return t},h.getMod=function(e){try{return require(e)}catch(t){return null}},h.getMangerMods=function(){return[]},v.getDL=function(){return window.$||window.jQuery},v.getRootId=function(){return Magix.config("rootId")},v.getVOM=function(){return Magix.VOM||Magix.Vframe},v.getMangerMods=function(){return[]},v.isReady=function(){return!0};var p={getEnv:function(){if(window.KISSY)return m;if(window.requirejs)return g;if(window.seajs)return u;if(window.define&&window.require)return h;if(window.Magix)return v;throw new Error("unsupport")},getEvents:function(e){var t=[],a=0;if(e){var n=e.view&&(e.view.events||e.view.$evts)||e.$v&&e.$v.$eo,r=[];for(var o in n)a++,r.push(o);var s=e.view&&e.view.tmplEvents;s&&s.length&&(r=r.concat(s),a+=s.length),r.length&&t.push("&lt;"+r+"&gt;");var l=e.$v&&e.$v.$el,c=[],d=[],m=[],g={};if(l){for(var u,h=0;h<l.length;h++)if(u=l[h],a++,u.e)u.e==window?c.push(u.n):u.e==document&&d.push(u.n);else{var v=g[u.s];v?v.push(u.n):g[u.s]=[u.n]}for(o in g)m.push("$"+o+"&lt;"+g[o]+"&gt;")}c.length&&t.push('<span style="color:#'+i[1]+'">$win&lt;'+c+"&gt;</span>"),d.length&&t.push('<span style="color:#'+i[3]+'">$doc&lt;'+d+"&gt;</span>"),m.length&&t.push('<span style="color:#'+i[4]+'">'+m+"</span>")}return{list:t,total:a}},getShared:function(e){var t=[];if(e&&e.$v){var a=e.$v.$sd;if(a)for(var i in a)t.push(i)}return t},getTree:function(e){var i=e.getRootId(),n=e.getVOM(),r=[],o={total:0,vomTotal:0,children:[]},s=n.all(),l={};for(var c in s)s.hasOwnProperty(c)&&o.vomTotal++,l[c]=1;var d=function(e,i){var s=n.get(e),c={};if(s){o.total++,i.id=s.id,c.id=s.id,delete l[s.id],s.fcc||s.$cr?(i.status=t.created,c.cls=""):s.fca||s.$ca?(i.status=t.alter,c.cls="alter",(s.cM&&!s.view||s.$c&&!s.$v)&&(i.status=t.init,c.cls="bad")):(i.status=t.init,c.cls="bad"),r.push(c);var m=p.getEvents(s),g=m.total;if(g){var u=a.eventsCommonCount;g=Math.min(g,u);var h=a.eventsStartColor,v=a.eventsEndColor,f=(v.r-h.r)/u,x=(v.g-h.g)/u,_=(v.b-h.b)/u,b=("0"+parseInt(h.r+g*f).toString(16)).slice(-2),M=("0"+parseInt(h.g+g*x).toString(16)).slice(-2),w=("0"+parseInt(h.b+g*_).toString(16)).slice(-2);i.event="#"+b+M+w}var y=p.getShared(s);y.length&&(i.shared="#009966");var $=s.cM||s.$c;for(var I in $){var T={children:[]};d(I,T),T.id&&i.children.push(T)}}};d(i,o);var m=[];for(var g in l)m.push({id:g,il:!0,status:t.isolated,children:[]}),r.push({id:g,cls:"bad"});return o.isolated=m,{tree:o,flattened:r}},getManagerTree:function(e){for(var t=e.getMangerMods(),i=[],r=0,o={},s=0,l={},c=0,d=0;d<t.length;d++){var m=t[d],g=m.exports.$mMetas||m.exports.$mm||m.exports.$m;g._$id||(g._$id="t"+c++),l[g._$id]&&(l[g._$id].continued=!0),l[g._$id]=m}for(var u=0;u<t.length;u++){var h,v,f=t[u],p=[],x={left:[],right:[]},_=[],b=0,M=0,w=0,y=f.exports.$mMetas||f.exports.$mm||f.exports.$m;if(delete y._$id,!f.continued){for(h in y)if(v=y[h],v.cleans)for(var $=(v.cleans+"").split(","),I=0;I<$.length;I++)o[$[I]]=h;for(h in y){v=y[h];var T=n.normal,C={id:h,color:T,url:v.url||v.uri,cache:(v.cache||0|v.cacheTime)/1e3+"sec",desc:v.desc||"",cleans:v.cleans||"",cleaned:o[h]||"",hasAfter:v.after?(v.after+"").substr(0,200):""};v.cleans?(T=n.cleans,C.color=T,x.left.push(C),M++):o[h]?(T=n.cleaned,C.color=T,x.right.push(C),w++):v.cache||v.cacheTime?(T=n.cache,C.color=T,_.push(C)):(p.push(C),b++),s++}}r+=Math.ceil(b/a.managerCols),r+=Math.max(M,w),r+=Math.ceil(_.length/a.managerCols),i.push({name:f.name,rows:r,cleans:x,caches:_,maxLeft:M,maxRight:w,items:p})}return{groups:i,rows:r,total:s}},prepare:function(t){var a=p.getEnv();a.prepare();var i=function(){e.body&&a.isReady()?t():setTimeout(i,500)};i()},start:function(){p.prepare(function(){o.setup();var e,a=p.getEnv(),i=a.getVOM(),n=function(e){e.on("created",function(){s.log("vframe:"+e.id+"["+(e.path||e.view.path||"")+"]\u6e32\u67d3\u5b8c\u6bd5",t.created),l()}),e.on("alter",function(a){if(a.id&&!a.logged){a.logged=1;var n=i.get(a.id);n&&s.log("\u4ecevframe:"+n.id+"["+(n.path||n.view.path||"")+"] \u53d1\u8d77\u754c\u9762\u53d8\u66f4",t.build)}s.log("vframe:"+e.id+"\u6536\u5230\u53d8\u66f4\u6d88\u606f",t.alter),l()}),e.on("viewInited",function(){s.log("vframe:"+e.id+"\u7684view["+e.view.path+"]\uff0cinit\u8c03\u7528\u5b8c\u6bd5",t.created)}),e.on("viewUnmounted",function(){s.log("vframe:"+e.id+"\u7684view["+(e.path||e.view&&e.view.path||"")+"]\u9500\u6bc1\u5b8c\u6bd5",t.isolated)}),e.on("viewMounted",function(){s.log("vframe:"+e.id+"\u7684view["+(e.path||e.view.path||"")+"]\uff0c\u9996\u6b21\u6e32\u67d3\u5b8c\u6bd5",t.created)}),e.___mh=!0},r=function(){var e=i.all();for(var t in e){var a=i.get(t);a.___mh||n(a)}},l=function(i){if(i)if("remove"==i.type)if(i.vframe){var n=i.vframe.path;!n&&i.vframe.view&&(n=i.vframe.view.path),n=n?"("+n+")":"",s.log("\u9500\u6bc1vframe:"+i.vframe.id+n,t.isolated)}else s.log("remove:",i);else"created"==i.type&&r();clearTimeout(e),e=setTimeout(function(){var e=p.getTree(a);c.drawTree(e.tree),a.drawIcons(e.flattened)},0)};i.on("add",function(e){l(),e.vframe.pId&&s.log("\u627e\u5230vframe:"+e.vframe.pId+"\u7684\u5b50vframe:"+e.vframe.id,t.build),s.log("\u521b\u5efavframe:"+e.vframe.id,t.build),n(e.vframe)}),i.on("remove",l);var d=i.get(a.getRootId());d&&d.on("created",l),r(),l();var m,g=function(){clearTimeout(m),m=setTimeout(function(){var e=p.getManagerTree(a);c.drawManagerTree(e)},500)};a.hookAttachMod(g),g()})}};p.start()}}();
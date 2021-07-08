(this.webpackJsonpmy_react_app=this.webpackJsonpmy_react_app||[]).push([[0],{23:function(e,t,c){},42:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(16),i=c.n(s),l=(c(23),c(3)),n=c(17),d=c.n(n),j=(c(42),c(6)),r=c.n(j),b=c(0),m=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:" weather-bg-image d-flex flex-wrap py-3 ",children:[Object(b.jsxs)("div",{className:"col-12 ",children:[Object(b.jsx)("h2",{className:"m-0",children:e.locationName}),Object(b.jsx)("p",{children:e.country})]}),Object(b.jsxs)("div",{className:"col-12 mt-auto d-flex",children:[Object(b.jsxs)("div",{className:"my-auto ",children:[Object(b.jsx)("h2",{className:"m-0",children:Object(b.jsx)(r.a,{format:"HH:mm:ss",ticking:!0})}),Object(b.jsx)("p",{children:Object(b.jsx)(r.a,{date:"",format:"dddd, Mo MMMM, YYYY"})})]}),Object(b.jsx)("div",{className:"ml-auto",children:Object(b.jsxs)("h1",{children:[e.temp,"\xb0C"]})})]})]})})},o=c(18),O=c.n(o),u="white",h=100,x=!0,p=function(e){var t=null;switch(e.weatherName){case"Clouds":t="CLOUDY";break;case"Clear":t="CLEAR_DAY";break;case"Smoke":t="FOG";break;case"Rain":t="RAIN";break;case"Haze":t="PARTLY_CLOUDY_DAY";break;default:t="CLEAR_DAY"}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:" side-bg text-center py-4",children:[Object(b.jsx)(O.a,{icon:t,color:u,size:h,animate:x}),Object(b.jsx)("h2",{className:"py-2",children:e.weatherName}),Object(b.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(b.jsxs)("div",{className:"d-flex col-12 py-2 ",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Humidity"})}),Object(b.jsx)("div",{className:"ml-auto",children:e.humidity})]}),Object(b.jsxs)("div",{className:"d-flex col-12 py-2 ",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Visibilty"})}),Object(b.jsxs)("div",{className:"ml-auto",children:[e.visibilty," mi"]})]}),Object(b.jsxs)("div",{className:"d-flex col-12 py-2 ",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Wind speed"})}),Object(b.jsxs)("div",{className:"ml-auto",children:[e.WindSpeed," Km/h"]})]}),Object(b.jsxs)("div",{className:"d-flex col-12 py-2 ",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Feels Like"})}),Object(b.jsxs)("div",{className:"ml-auto",children:[e.FeelLike," \xb0C"]})]}),Object(b.jsxs)("div",{className:"d-flex col-12 py-2 ",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Max Temp"})}),Object(b.jsxs)("div",{className:"ml-auto",children:[e.MaxTemp," \xb0C"]})]})]})]})})},v=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(null),n=Object(l.a)(i,2),j=n[0],r=n[1],o=Object(a.useState)(null),O=Object(l.a)(o,2),u=O[0],h=O[1],x=Object(a.useState)(null),v=Object(l.a)(x,2),f=v[0],N=v[1],y=Object(a.useState)(null),g=Object(l.a)(y,2),w=g[0],S=g[1],k=Object(a.useState)(null),C=Object(l.a)(k,2),Y=C[0],_=C[1],M=Object(a.useState)(null),F=Object(l.a)(M,2),L=F[0],A=F[1],D=Object(a.useState)(null),R=Object(l.a)(D,2),E=R[0],H=R[1],T=Object(a.useState)(null),W=Object(l.a)(T,2),z=W[0],I=W[1],J=Object(a.useState)(null),P=Object(l.a)(J,2),U=P[0],B=P[1],G=Object(a.useState)(null),K=Object(l.a)(G,2),V=K[0],q=K[1];Object(a.useEffect)((function(){Q(),navigator.geolocation.getCurrentPosition((function(e){s(e.coords.latitude),r(e.coords.longitude)}))}));var Q=function(){return d.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(j,"&units=metric&appid=95a97b0416b72dd69ce1ad5d2cd30619")).then((function(e){console.log(e.data),h(Math.round(e.data.main.temp)),N(e.data.name),H(e.data.sys.country),S(e.data.main.humidity),I(e.data.visibility),A(e.data.main.feels_like),_(e.data.wind.speed),B(e.data.main.temp_max),q(e.data.weather[0].main)}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"d-flex justify-content-center row align-items-center ",children:Object(b.jsxs)("div",{className:"col-8 d-flex justify-content-center weather py-5",children:[Object(b.jsx)(m,{locationName:f,temp:u,country:E}),Object(b.jsx)(p,{humidity:w,visibilty:z,WindSpeed:Y,FeelLike:L,MaxTemp:U,weatherName:V})]})})})};i.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ab7dc5db.chunk.js.map
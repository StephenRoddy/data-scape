(this["webpackJsonpdata-scape"]=this["webpackJsonpdata-scape"]||[]).push([[0],{697:function(e,t,a){e.exports=a(719)},702:function(e,t,a){},717:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},718:function(e,t,a){},719:function(e,t,a){"use strict";a.r(t);var s=a(8),r=a.n(s),n=a(63),o=a.n(n),i=(a(702),a(0)),d=a(1),c=a(3),l=a(2),u=a(55),m=function(e){return r.a.createElement("nav",{class:"navbar mb-4 navbar-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("h3",null,"Multimodal Data-analytics"),r.a.createElement("h5",{class:"text-wrap"},"API data from COVID-19")))};var h=function(e){var t=(new u.a).toDestination();return r.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(e){e.preventDefault(),t.triggerAttackRelease("C4","8n"),console.log("The button was clicked.")}},"Audio Test")},y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={props:e},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.props.name;return r.a.createElement("div",{class:"col-sm mt-3 mb-3"},r.a.createElement("div",{class:"opacity-5 shadow-sm"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},t),r.a.createElement("h6",{class:"card-subtitle text-muted"},"Ireland"),r.a.createElement("div",null," ",r.a.createElement("h2",null,e)))))}}]),a}(r.a.Component),f=a(48),v=a.n(f),p=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={dataIn:s.props.dataIn,options:{chart:{id:"Line-Chart"},xaxis:{categories:s.props.date_series}},series:[{name:s.props.name,data:s.props.dataIn}]},s}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"opacity-5 shadow-sm"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},this.props.name),r.a.createElement("h6",{class:"card-subtitle text-muted"},"Past 7 Days"),r.a.createElement("div",{className:"mixed-chart"},r.a.createElement(v.a,{options:this.state.options,series:this.state.series,type:"line",width:"500"}))))}}]),a}(s.Component),_=(r.a.Component,function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;Object(i.a)(this,a);var r=(s=t.call(this,e)).props.data;return console.log("Here is the series we will use: "+r),s.state={series:[{name:"Series 1",data:r}],options:{chart:{height:350,type:"radar"},dataLabels:{enabled:!0},plotOptions:{radar:{size:140,polygons:{strokeColors:"#e9e9e9",fill:{colors:["#f8f8f8","#fff"]}}}},colors:["#FF4560"],markers:{size:4,colors:["#fff"],strokeColor:"#FF4560",strokeWidth:2},tooltip:{y:{formatter:function(e){return e}}},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},yaxis:{tickAmount:7,labels:{formatter:function(e,t){return t%2===0?e:""}}}}},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=new Date;0==e.getDay()?this.setState({options:{xaxis:{categories:["Sunday","Saturday","Friday","Thursday","Wednesday","Tuesday","Monday"]}}}):1==e.getDay()?this.setState({options:{xaxis:{categories:["Monday","Sunday","Saturday","Friday","Thursday","Wednesday","Tuesday"]}}}):2==e.getDay()?this.setState({options:{xaxis:{categories:["Tuesday","Monday","Sunday","Saturday","Friday","Thursday","Wednesday"]}}}):3==e.getDay()?this.setState({options:{xaxis:{categories:["Wednesday","Tuesday","Monday","Sunday","Saturday","Friday","Thursday"]}}}):4==e.getDay()?this.setState({options:{xaxis:{categories:["Thursday","Wednesday","Tuesday","Monday","Sunday","Saturday","Friday"]}}}):5==e.getDay()?this.setState({options:{xaxis:{categories:["Friday","Thursday","Wednesday","Tuesday","Monday","Sunday","Saturday"]}}}):6==e.getDay()&&this.setState({options:{xaxis:{categories:["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday","Sunday"]}}})}},{key:"render",value:function(){return r.a.createElement("div",{class:"opacity-5 shadow"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},this.props.name),r.a.createElement("h6",{class:"card-subtitle text-muted"},"Past 7 days"),r.a.createElement("div",{id:"chart"},r.a.createElement(v.a,{options:this.state.options,series:this.state.series,type:"radar",height:350}))))}}]),a}(r.a.Component));a(716),a(717),a(718);var b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={error:null,isLoaded:!1,width:0,height:0,data:[],date_series:[],total_death_series:[],total_cases_series:[],confirmed_deaths_series:[],confirmed_cases_series:[],today_tot_deaths:0,today_tot_cases:0,today_con_deaths:0,today_con_cases:0},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,TotalConfirmedCovidCases,ConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths&returnGeometry=false&outSR=4326&f=json").then((function(e){return e.json()})).then((function(t){var a,s=[],r=[],n=[],o=[],i=[];for(a=0;a<7;a++)s[a]=t.features[t.features.length-(1+a)].attributes.TotalCovidDeaths,r[a]=t.features[t.features.length-(1+a)].attributes.TotalConfirmedCovidCases,n[a]=t.features[t.features.length-(1+a)].attributes.ConfirmedCovidDeaths,o[a]=t.features[t.features.length-(1+a)].attributes.ConfirmedCovidCases,i[a]=t.features[t.features.length-(1+a)].attributes.Date;e.setState({isLoaded:!0,data:t,total_deaths_series:s.reverse(),total_case_series:r.reverse(),confirmed_deaths_series:n.reverse(),confirmed_cases_series:o.reverse(),today_tot_deaths:s[0],today_tot_cases:r[0],today_con_deaths:n[0],today_con_cases:o[0],date_series:i,width:400,height:200},(function(){return console.log("Confirmed Deaths: "+n+" Confirmed Cases: "+o+" Total deaths: "+e.state.total_deaths+" Total cases: "+e.state.total_cases+" Today's deaths: "+e.state.today_deaths+" Today's cases:  "+e.state.today_cases)}))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){this.state.total_deaths,this.state.total_cases;var e=this.state,t=e.error,a=e.isLoaded;e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{class:"container-fluid"},r.a.createElement(m,null),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm mt-3 mb-3"},r.a.createElement(p,{dataIn:this.state.total_case_series,date:this.state.date_series,name:"Total Confirmed Cases"})),r.a.createElement("div",{class:"col-sm  mt-3 mb-3"},r.a.createElement(y,{data:this.state.today_con_cases,name:"New Cases Today"}),r.a.createElement(y,{data:this.state.today_con_deaths,name:"New Deaths Today"})),r.a.createElement("div",{class:"col-sm  mt-3 mb-3"},r.a.createElement(y,{data:this.state.today_tot_cases,name:"Total Cases"}),r.a.createElement(y,{data:this.state.today_tot_deaths,name:"Total Deaths"}))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm  mt-3 mb-3"},r.a.createElement(p,{dataIn:this.state.total_deaths_series,date:this.state.date_series,name:"Total Confirmed Deaths"}),r.a.createElement(h,null)),r.a.createElement("div",{class:"col-sm mt-3 mb-3"},r.a.createElement(_,{type:"radar",name:"New COVID-19 Cases",data:this.state.confirmed_cases_series})))):r.a.createElement("div",null,"Loading...")}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[697,1,2]]]);
//# sourceMappingURL=main.037e792c.chunk.js.map
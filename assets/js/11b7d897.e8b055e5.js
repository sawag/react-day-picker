"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5026],{9814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=a(2685),n=a(1244),i=(a(7378),a(5318)),o=["components"],p={},l="Upgrading from v7",s={unversionedId:"guides/upgrading",id:"guides/upgrading",title:"Upgrading from v7",description:"v8 is a mayor upgrade for DayPicker with new props and styles. We include here a quick reference for helping the upgrade from v7.",source:"@site/docs/guides/upgrading.md",sourceDirName:"guides",slug:"/guides/upgrading",permalink:"/guides/upgrading",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/master/website/docs/guides/upgrading.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Input Fields",permalink:"/guides/input-fields"}},d={},c=[{value:"How to upgrade to v8",id:"how-to-upgrade-to-v8",level:2},{value:"Updated Props",id:"updated-props",level:2},{value:"ISO weeks",id:"iso-weeks",level:2},{value:"DayPickerInput",id:"daypickerinput",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading-from-v7"},"Upgrading from v7"),(0,i.kt)("p",null,"v8 is a mayor upgrade for DayPicker with new props and styles. We include here a quick reference for helping the upgrade from v7."),(0,i.kt)("admonition",{title:"v7 is frozen",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"v7 is frozen and there are no plans for updating it. If you have bugs or feature requests, please consider to upgrade to v8. The legacy documentation for v7 can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://react-day-picker-v7.netlify.app"},"https://react-day-picker-v7.netlify.app"),".")),(0,i.kt)("h2",{id:"how-to-upgrade-to-v8"},"How to upgrade to v8"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Upgrade the dependency"),". DayPicker now has ",(0,i.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"date-fns")," as peer dependency.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-day-picker@latest date-fns\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Remove the types package"),", if you were using it:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall @types/react-day-picker\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Update the CSS import"),": the stylesheet has been moved to ",(0,i.kt)("inlineCode",{parentName:"li"},"/dist"),". For example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- import `react-day-picker/lib/style.css`\n+ import `react-day-picker/dist/style.css`\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Update your custom styles"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/basics/styling"},"Styling DayPicker")," for more information."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Update the changed props"),". See the list below."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"strong"},"DateUtils")," with date-fns"),". Use ",(0,i.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"date-fns")," instead of ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker-v7.netlify.app/api/DateUtils"},"DateUtils")," to handle dates.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"addDayToRange")," with ",(0,i.kt)("a",{parentName:"li",href:"/api/functions/addToRange"},"addToRange"),", which is still exported in v8")))),(0,i.kt)("h2",{id:"updated-props"},"Updated Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showWeekNumbers")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"showWeekNumber")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"todayButton")," has been removed. See ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/basics/navigation#controlling-the-current-month"},"Controlling the current month")," for an example implementing the same feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialMonth")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultMonth"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/basics/navigation"},"Navigating months")," for more details about using ",(0,i.kt)("inlineCode",{parentName:"li"},"month")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultMonth"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canChangeMonth")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"disableNavigation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selectedDays")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"selected"),". See also: ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/basics/selecting-days"},"Selecting Days guide"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabledDays")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),". See also: ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/basics/modifiers#disabling-days"},"Disabling days"),".")),(0,i.kt)("h2",{id:"iso-weeks"},"ISO weeks"),(0,i.kt)("p",null,"This version use the locale setting to calculate the week days and numbers. The previous versions were using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_week_date"},"ISO week dates"),". To toggle the ISO week dates, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOWeek")," prop."),(0,i.kt)("h2",{id:"daypickerinput"},"DayPickerInput"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DayPickerInput")," component has been removed. If you upgrade to v8, you will need to rewrite your implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try with ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/guides/input-fields"},"useInput")," hook."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://react-day-picker.js.org/guides/input-fields#example-date-picker-dialog"},"this example")," to build a date picker with v8 in a dialog.")))}m.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
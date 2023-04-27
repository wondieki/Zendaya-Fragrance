"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{77064:function(e,n,t){t.d(n,{$:function(){return m},u:function(){return f}});var r=t(31501),a=t(61079),s=t(14806),o=t(35250),i=t(19841),l=t(70079),c=t(65921),u=t(34303);function d(){var e=(0,s.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',"\n"]);return d=function(){return e},e}function p(){var e=(0,s.Z)(["absolute w-2 h-2 -z-10"]);return p=function(){return e},e}function f(e){var n=e.text,t=e.children;return(0,o.jsx)("div",{className:"tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700","data-content":n,children:t})}var m=function(e){var n=e.children,t=e.label,s=e.enterDelay,u=void 0===s?0:s,d=e.leaveDelay,p=void 0===d?50:d,f=e.placement,m=void 0===f?"bottom":f,v=e.offset,b=e.withArrow,x=e.interactive,g=void 0!==x&&x,y=e.wide,w=(0,l.useState)(!1),j=w[0],k=w[1],P=(0,l.useState)(null),Z=P[0],S=P[1],_=(0,l.useState)(null),N=_[0],C=_[1],A=(0,l.useState)(null),T=A[0],R=A[1],E=(0,c.D)(Z,N,{placement:m,modifiers:[{name:"offset",options:{offset:void 0===v?[0,14]:v}},{name:"arrow",options:{element:T}},]}),L=E.styles,U=E.attributes,F=E.forceUpdate,G=(0,l.useRef)(),M=(0,l.useRef)(),O=(0,l.useCallback)(function(){null==F||F(),M.current&&clearTimeout(M.current),G.current=setTimeout(function(){return k(!0)},u)},[u,F]),D=(0,l.useCallback)(function(){G.current&&clearTimeout(G.current),M.current=setTimeout(function(){return k(!1)},p)},[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{ref:S,onMouseEnter:O,onMouseLeave:D,children:n}),(0,o.jsxs)("div",(0,a.Z)((0,r.Z)({ref:C,style:L.popper},U.popper),{className:(0,i.Z)("relative z-10 m-0 rounded p-1 transition-opacity",j?"opacity-100":"pointer-events-none opacity-0",void 0!==y&&y?"max-w-sm":"max-w-xs","border border-black/10 bg-gray-100"),onMouseEnter:g?O:void 0,onMouseLeave:g?D:void 0,children:[t,(void 0===b||b)&&(0,o.jsx)(h,{ref:R,$placement:m})]}))]})},v=u.Z.div(d(),function(e){var n=e.$placement;return"bottom"===n?"-top-1 left-1/2 -translate-x-[50%] rotate-[225deg]":"top"===n?"before:top-0 left-1/2 -translate-x-1/2 before:rotate-45":""}),h=(0,u.Z)(v)(p())},86885:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(61706),a=t(45813),s=t(35250),o=t(54721),i=t.n(o),l=t(61432),c=t(70079),u=t(1454),d=t(12762),p=t(98943),f=t(33264),m=t(66285),v=t(74516),h=t(35e3),b=t(69858),x=t(21345),g=t(77507);function y(e){var n=e.isOpen,t=e.onClose,o=(0,c.useRef)(null),y=(0,m.hz)(),w=(0,d.WS)(),j=(0,c.useState)(!1),k=j[0],P=j[1],Z=(0,l.useRouter)(),S=(0,c.useCallback)(function(){w(p.s6.closeAccountPaymentModal),t()},[t,w]),_=(0,c.useCallback)((0,r.Z)(function(){var e;return(0,a.__generator)(this,function(n){switch(n.label){case 0:P(!0),w(p.s6.clickAccountPaymentCheckout),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,f.ZP.getCheckoutLink()];case 2:return e=n.sent(),Z.push(e.url),[3,5];case 3:return n.sent(),v.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return P(!1),[7];case 5:return[2]}})}),[Z,w,P]),N=(0,c.useCallback)((0,r.Z)(function(){var e;return(0,a.__generator)(this,function(n){switch(n.label){case 0:P(!0),w(p.s6.clickAccountCustomerPortal),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,f.ZP.fetchCustomerPortalUrl()];case 2:return e=n.sent(),Z.push(e.url),[3,5];case 3:return n.sent(),v.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return P(!1),[7];case 5:return[2]}})}),[Z,w,P]),C=(0,c.useCallback)(function(){w(p.s6.clickAccountPaymentGetHelp)},[w]),A=(0,m.mA)(function(e){var n;return null===(n=e.accountPlan)||void 0===n?void 0:n.hasCustomerObject}),T=y.has("disable_upgrade_ui");return(0,s.jsxs)(h.x,{isOpen:n,onClose:t,focusRef:o,children:[(0,s.jsxs)("div",{className:"flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",children:[(0,s.jsx)("span",{className:"text-base font-semibold sm:text-base",children:"Your plan"}),(0,s.jsx)("button",{className:"text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",onClick:S,children:(0,s.jsx)(u.q5L,{className:"h-6 w-6"})})]}),(0,s.jsxs)("div",{className:"grid sm:grid-cols-2",children:[(0,s.jsx)("div",{className:"relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",children:(0,s.jsx)(b.Oi,{rowElements:[(0,s.jsx)(b.Cu,{text:"Free plan"},"row-free-plan-name"),(0,s.jsx)(b.hi,{variant:"disabled",disabled:!0,text:g.S.free.callToAction.active},"row-free-plan-button"),(0,s.jsx)(b.G,{variant:"secondary",text:g.S.free.demandAccess},"row-free-plan-demand"),(0,s.jsx)(b.G,{variant:"secondary",text:g.S.free.responseSpeed},"row-free-plan-speed"),(0,s.jsx)(b.G,{className:"sm:pb-2",variant:"secondary",text:g.S.free.modelFeatures},"row-free-plan-updates"),]})}),(0,s.jsx)("div",{className:"relative order-1 col-span-1 sm:order-2",children:(0,s.jsx)(b.Oi,{rowElements:[(0,s.jsx)(b.Cu,{text:g.S.plus.name,children:(0,s.jsx)("span",{className:"font-semibold text-gray-500",children:g.S.plus.costInDollars})},"row-plus-plan-title"),(0,s.jsx)(b.hi,{variant:"primary",disabledText:T?"Due to high demand, we've temporarily paused upgrades.":"",disabled:k,isLoading:k,ref:o,onClick:_,text:g.S.plus.callToAction.inactivePayment},"row-plus-plan-button"),(0,s.jsx)(b.G,{variant:"primary",text:g.S.plus.demandAccess},"row-plus-plan-demand"),(0,s.jsx)(b.G,{variant:"primary",text:g.S.plus.responseSpeed},"row-plus-plan-speed"),(0,s.jsx)(b.G,{className:"sm:pb-2",variant:"primary",text:g.S.plus.modelFeatures},"row-plus-plan-updates"),A&&(0,s.jsx)(b.nR,{className:"sm:pb-1",isLoading:k,text:g.S.manageSubscription.callToAction,onClick:N},"row-plus-plan-manage"),(0,s.jsx)(i(),{target:"_blank",href:x.L,passHref:!0,children:(0,s.jsx)(b.nR,{className:"sm:pb-1",isLoading:!1,text:g.S.getHelp.callToAction,onClick:C},"row-plus-plan-help")},"row-plus-plan-help-link"),]})})]})]})}},35e3:function(e,n,t){t.d(n,{x:function(){return l}});var r=t(14806),a=t(35250),s=t(34303),o=t(73925);function i(){var e=(0,r.Z)(["flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);return i=function(){return e},e}var l=function(e){var n=e.children,t=e.isOpen,r=e.onClose,s=e.focusRef;return(0,a.jsx)(o.ZP,{size:"fullscreen",isOpen:t,onModalClose:r,type:"success",title:"",className:"bg-transparent dark:bg-transparent",initialFocusRef:s,children:(0,a.jsx)("div",{className:"flex h-full flex-col items-center justify-start",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(c,{children:n})})})})},c=s.Z.div(i())},69858:function(e,n,t){t.d(n,{Cu:function(){return h},G:function(){return g},Oi:function(){return v},hi:function(){return x},nR:function(){return y}});var r=t(14806),a=t(35250),s=t(19841),o=t(70079),i=t(1454),l=t(34303),c=t(39690),u=t(79876),d=t(77064);function p(){var e=(0,r.Z)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);return p=function(){return e},e}function f(){var e=(0,r.Z)(["gap-2 flex flex-row justify-start items-center text-sm"]);return f=function(){return e},e}function m(){var e=(0,r.Z)(["text-xl font-semibold justify-between items-center flex"]);return m=function(){return e},e}var v=function(e){var n=e.rowElements;return(0,a.jsx)(w,{children:n.map(function(e){return e})})},h=function(e){var n=e.className,t=e.text,r=e.children;return(0,a.jsxs)(k,{className:n,children:[(0,a.jsx)("span",{children:t}),r]})},b={"primary-disabled":"border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",primary:"border-none py-3 font-semibold",disabled:"dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"},x=(0,o.forwardRef)(function(e,n){var t=e.isLoading,r=void 0!==t&&t,o=e.disabled,l=e.onClick,p=e.variant,f=void 0===p?"primary":p,m=e.text,v=e.disabledText;return v?(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(d.$,{placement:"bottom",offset:[0,20],label:(0,a.jsx)(d.u,{children:v}),children:(0,a.jsxs)(c.z,{ref:n,as:"button",color:"disabled",className:(0,s.Z)("w-full",b[f]),children:[m,r&&(0,a.jsx)(u.ZP,{className:"animate-spin",icon:i.dAq})]})})}):(0,a.jsxs)(c.z,{disabled:void 0!==o&&o,onClick:l,openNewTab:!0,ref:n,as:"button",className:(0,s.Z)(b[f]),children:[(0,a.jsx)("span",{className:(0,s.Z)("inline-block",{"text-gray-700":"primary-disabled"===f,"text-white":"primary"===f}),children:m}),r&&(0,a.jsx)(u.ZP,{className:"animate-spin",icon:i.dAq})]})});x.displayName="PricingPlanButton";var g=function(e){var n=e.variant,t=void 0===n?"primary":n,r=e.className,o=e.text;return(0,a.jsxs)(j,{className:r,children:[(0,a.jsx)(u.ZP,{icon:i._rq,className:(0,s.Z)("h-5 w-5",{"text-green-700":"primary"==t,"text-gray-400":"secondary"==t})}),(0,a.jsx)("span",{children:o})]})},y=function(e){var n=e.className,t=e.text,r=e.isLoading,s=e.onClick;return(0,a.jsx)(j,{className:n,children:(0,a.jsxs)("button",{onClick:s,className:"flex flex-row items-center space-x-1 underline",children:[(0,a.jsx)("span",{children:t}),r&&(0,a.jsx)(u.ZP,{className:"animate-spin",icon:i.dAq})]})})},w=l.Z.div(p()),j=l.Z.div(f()),k=l.Z.div(m())},21345:function(e,n,t){t.d(n,{L:function(){return r}});var r="https://help.openai.com/en/collections/3943089-billing"},77507:function(e,n,t){t.d(n,{S:function(){return r}});var r={free:{name:"Free plan",callToAction:{active:"Your current plan",inactive:"Your current plan"},costInDollars:"",demandAccess:"Available when demand is low",responseSpeed:"Standard response speed",modelFeatures:"Regular model updates"},plus:{name:"ChatGPT Plus",callToAction:{active:"Your current plan",inactive:"I'm interested",inactivePayment:"Upgrade plan"},costInDollars:"USD $20/mo",demandAccess:"Available even when demand is high",responseSpeed:"Faster response speed",modelFeatures:"Priority access to new features"},manageSubscription:{callToAction:"Manage my subscription"},getHelp:{callToAction:"I need help with a billing issue"}}},85087:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87762),a=t(70079),s=t(82018),o=t(33264),i=t(66285),l=t(27252);function c(){var e=(0,s.kP)(),n=e.session,t=e.loading,c=(0,i.mA)(function(e){return e.hasBeenSet}),u=(0,l.g)(function(e){return e.updateFlagValue}),d=(0,r.a)(["account-status"],function(){return o.ZP.getAccountStatus(null==n?void 0:n.accessToken)},{enabled:!t&&Boolean(null==n?void 0:n.accessToken),onError:function(){console.error("Unable to load account")},onSuccess:function(e){var n;m(e),u("highlightPlusUpgrade",!(null===(n=e.account_plan)||void 0===n?void 0:n.is_paid_subscription_active))}}),p=d.data,f=d.isLoading,m=(0,i.mA)(function(e){return{accountPlan:e.accountPlan,updateAccountPlanWithResponse:e.updateAccountPlanWithResponse}}).updateAccountPlanWithResponse;return(0,a.useMemo)(function(){return{accountStatusResponse:p,isLoading:!c&&f}},[p,c,f])}},49690:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(27215),a=t(70079),s=t(12762),o=t(98943),i=t(82018),l=t(6059),c=t(33264),u=t(66285),d=t(11938);function p(e,n,t,p,f){var m=!(arguments.length>5)||void 0===arguments[5]||arguments[5],v=(0,u.mA)(function(e){return e.features}),h=(0,i.kP)().session,b=(0,s.WS)(t);(0,a.useEffect)(function(){m&&(v&&n.id&&(s.ZP.setUser(n,v,p,f),v.includes("log_statsig_events")&&l.m.setUser(n,p),v.includes("log_intercom_events")&&(0,d.u$)(n)),b(o.s6.pageLoad))},[v,n.id,m]),(0,d.oG)(),(0,a.useEffect)(function(){if(null==h?void 0:h.accessToken)c.ZP.setAccessToken(h.accessToken);else if(h&&!(null==h?void 0:h.error)){var e;null===r.default||void 0===r.default||r.default.captureMessage("Missing access token for User: ".concat(null==h?void 0:null===(e=h.user)||void 0===e?void 0:e.id," (").concat(null==h?void 0:h.accessToken,")"))}(null==h?void 0:h.error)==="RefreshAccessTokenError"&&(null===r.default||void 0===r.default||r.default.captureException(h.error),window._oaiHandleSessionExpired("page load",h.error))},[h,n.id]),(0,a.useEffect)(function(){document.title=e},[e])}},66285:function(e,n,t){t.d(n,{hz:function(){return u},mA:function(){return l},nR:function(){return c}});var r=t(31501),a=t(61079),s=t(70079),o=t(7918),i={lastUpdated:Date.now(),hasBeenSet:!1},l=(0,o.ZP)()(function(e){return(0,a.Z)((0,r.Z)({},i),{updateAccountPlanWithResponse:function(n){var t,r,a,s,o;e({accountPlan:{hasPaidSubscription:(null==n?void 0:null===(t=n.account_plan)||void 0===t?void 0:t.is_paid_subscription_active)||!1,subscriptionPlan:(null==n?void 0:null===(r=n.account_plan)||void 0===r?void 0:r.subscription_plan)||"chatgptplusfreeplan",accountUserRole:(null==n?void 0:null===(a=n.account_plan)||void 0===a?void 0:a.account_user_role)||"account-owner",wasPaidCustomer:(null==n?void 0:null===(s=n.account_plan)||void 0===s?void 0:s.was_paid_customer)||!1,hasCustomerObject:(null==n?void 0:null===(o=n.account_plan)||void 0===o?void 0:o.has_customer_object)||!1},features:(null==n?void 0:n.features)||[],hasBeenSet:!0})}})}),c=function(){return l(function(e){var n;return null===(n=e.accountPlan)||void 0===n?void 0:n.hasPaidSubscription})},u=function(){var e=l(function(e){return e.features});return(0,s.useMemo)(function(){return new Set(e)},[e])}},27252:function(e,n,t){t.d(n,{g:function(){return l}});var r=t(33861),a=t(31501),s=t(61079),o=t(7918),i={flags:{isUserInCanPayGroup:!1,highlightPlusUpgrade:!1,failwhaleBypassEnabled:!1}},l=(0,o.ZP)()(function(e,n){return(0,s.Z)((0,a.Z)({},i),{updateFlagValue:function(t,o){var i=n().flags;e({flags:(0,s.Z)((0,a.Z)({},i),(0,r.Z)({},t,o))})}})})},82018:function(e,n,t){t.d(n,{kP:function(){return u},w7:function(){return i}});var r=t(61706),a=t(45813),s=t(87762),o=t(61432);function i(){window.location.href=window.location.origin+"/auth/logout"}function l(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(function(){var e,n;return(0,a.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/auth/session")];case 1:return[4,e.sent().json()];case 2:if(Object.keys(n=e.sent()).length)return[2,n];return[2,null]}})})).apply(this,arguments)}function u(e){var n=e||{},t=n.required,r=n.redirectTo,a=n.queryConfig,i=(0,o.useRouter)(),c=(0,s.a)(["session"],l,{onSettled:function(e,n){(null==a?void 0:a.onSettled)&&(null==a||a.onSettled(e,n)),!e&&t&&i.push(r)}});return{session:(null==c?void 0:c.data)||null,loading:(null==c?void 0:c.status)==="loading"}}}}]);
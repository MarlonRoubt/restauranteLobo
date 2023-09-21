;/*FB_PKG_DELIM*/

__d("PolarisClipsTabDesktopClipPlaceholder.react",["IGDSBox.react","IGDSGlimmer.react","PolarisClipsTabHelpers","PolarisDsaQEHelpers","react","stylex","useThrottled"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useLayoutEffect,j=b.useState,k={background:{backgroundColor:"x8x6lru",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",$$css:!0},glimmerColor:{backgroundColor:"x5keihi",$$css:!0},icon:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1gnnpzl",marginEnd:"x1emribx",width:"x1849jeq",$$css:!0},longLine:{height:"x1kpxq89",width:"xycev2y",$$css:!0},margin:{marginTop:"x14vqqas",$$css:!0},shortLine:{height:"x1kpxq89",width:"x3hqpx7",$$css:!0}};function a(){var a=j(0),b=a[0],e=a[1];a=b*(9/16);var f=c("useThrottled")(function(){e(d("PolarisClipsTabHelpers").getReelMediaContainerHeight(d("PolarisDsaQEHelpers").hasTabbedReelsHeader()))},d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE);i(function(){f();window.addEventListener("resize",f);return function(){window.removeEventListener("resize",f)}},[f]);var g=d("PolarisClipsTabHelpers").getClipsContainerStyles();return h.jsxs(c("IGDSBox.react"),{direction:"column",display:"flex",children:[h.jsxs("div",{className:c("stylex")(g.container),children:[h.jsx("div",{className:c("stylex")([g.container,k.background]),style:{height:b>0?b+"px":"100%",width:a>0?a+"px":void 0},children:h.jsxs(c("IGDSBox.react"),{direction:"column",display:"flex",height:"100%",justifyContent:"end",padding:4,width:"100%",children:[h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",children:[h.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.icon,k.glimmerColor]}),h.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.longLine,k.glimmerColor]})]}),h.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:[k.longLine,k.margin,k.glimmerColor]}),h.jsx(c("IGDSGlimmer.react"),{index:2,xstyle:[k.shortLine,k.margin,k.glimmerColor]})]})}),h.jsx("div",{className:c("stylex")(g.ufi),style:{height:"inherit"}})]}),h.jsx("div",{style:{height:"calc(100vh - 32px - "+b+"px)",width:"100%"}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsTabDesktopContainerElementProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");c=d("react");var i=c.useContext,j=c.useMemo,k=c.useState,l=h.createContext({element:null,setElement:function(){}});function a(a){a=a.children;var b=k(null),c=b[0],d=b[1];b=j(function(){return{element:c,setElement:d}},[c]);return h.jsx(l.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";function b(){return i(l)}g.PolarisClipsTabDesktopContainerElementProvider=a;g.usePolarisClipsTabDesktopContainerElementProvider=b}),98);
__d("PolarisClipsTabDesktopPage.react",["CometRelay","PolarisClipsTabDesktopContainerElementProvider.react","PolarisReactReduxDeprecationExports.react","cr:7148","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(d("PolarisReactReduxDeprecationExports.react").PolarisReactReduxDeprecationProvider,{deprecateSubtree:!0,logLevel:"warn",children:h.jsx(d("PolarisClipsTabDesktopContainerElementProvider.react").PolarisClipsTabDesktopContainerElementProvider,{children:h.jsxs(h.Fragment,{children:[b("cr:7148")&&h.jsx(b("cr:7148"),{}),h.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:a.entryPoints.desktopContainerContent,props:{chainingMediaID:a.props.routeParams.shortcode}})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsTabDesktopPagePlaceholder.react",["IGDSBox.react","PolarisClipsTabDesktopClipPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"column",display:"flex",height:"100%",marginTop:8,width:"100%",children:h.jsx(c("PolarisClipsTabDesktopClipPlaceholder.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsTabDesktopRoot.react",["CometPlaceholder.react","PolarisClipsTabDesktopPagePlaceholder.react","PolarisPageMetadata.react","PolarisShell.next.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisClipsTabDesktopPage.react").__setRef("PolarisClipsTabDesktopRoot.react"));function a(a){return h.jsxs(c("PolarisShell.next.react"),{footerVariant:"none",pageIdentifier:"reelsTab",children:[h.jsx(c("PolarisPageMetadata.react"),{id:"reelsTab"}),h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("PolarisClipsTabDesktopPagePlaceholder.react"),{}),children:h.jsx(i,babelHelpers["extends"]({},a))})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisClipsDesktopPopoverCloseOnScroll",["PolarisClipsTabDesktopContainerElementProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useLayoutEffect;function a(a){var b=d("PolarisClipsTabDesktopContainerElementProvider.react").usePolarisClipsTabDesktopContainerElementProvider(),c=b.element;h(function(){c==null?void 0:c.addEventListener("scroll",a);return function(){c==null?void 0:c.removeEventListener("scroll",a)}},[c,a])}g["default"]=a}),98);
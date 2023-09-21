;/*FB_PKG_DELIM*/

__d("IGDAvatarGlimmer.react",["IGDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{position:"x1n2onr6",$$css:!0},glimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",width:"xh8yej3",$$css:!0}};function j(a,b){if(b==="tiny")return"32px";if(b==="medium")if(a)return"32px";else return"44px";else if(b==="XXL")if(a)return"56px";else return"96px";else if(b==="micro")return"14px";else return"56px"}function a(a){var b=a.isMobile;b=b===void 0?!1:b;a=a.size;b=j(b,a);return h.jsx("div",{className:"x1n2onr6",style:{height:b,width:b},children:h.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:i.glimmer})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDBaseButton.react",["BaseButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react").forwardRef;var i={root:{userSelect:"x87ps6o",":active_opacity":"x1d5wrs8",$$css:!0},rootDisabled:{opacity:"xuzhngd",pointerEvents:"x47corl",$$css:!0}};function a(a,b){var d=a.children,e=a.disabled;a=a.onClick;return h.jsx(c("BaseButton.react"),{disabled:e,onClick:a,ref:b,xstyle:[i.root,e===!0&&i.rootDisabled],children:d})}a.displayName=a.name+" [from "+f.id+"]";e=b(a);g["default"]=e}),98);
__d("IGDIsCompactModeContext.react",["react","useMatchMedia"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");d=e.createContext;var i=e.useContext,j="900px",k=d(!1);function a(a){a=a.children;var b=c("useMatchMedia")("(max-width: "+j+")");return h.jsx(k.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";function b(){return i(k)}g.IGDIsCompactModeContextProvider=a;g.useIsCompactMode=b}),98);
__d("IGDSectionHeaderLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={endAdornment:{display:"x78zum5",justifyContent:"x13a6bvl",paddingStart:"x1ye3gou",$$css:!0},noBottomBorder:{borderBottomWidth:"x1qhh985",$$css:!0},root:{alignItems:"x6s0dn4",borderBottomColor:"x1bs97v6",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",boxSizing:"x9f619",display:"x78zum5",flexDirection:"x1q0g3np",height:"xr931m4",marginBottom:"xat24cr",minHeight:"x4lt0of",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",width:"xh8yej3",$$css:!0},rootMobile:{height:"xn3w4p2",minHeight:"x1gg8mnh",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0},startAdornment:{display:"x78zum5",$$css:!0}};function a(a){var b=a.children,d=a.isMobile;d=d===void 0?!1:d;var e=a.noBottomBorder;e=e===void 0?!1:e;a=a.xstyle;return h.jsx("div",{className:c("stylex")(i.root,d?i.rootMobile:!1,e?i.noBottomBorder:!1,a),children:b})}a.displayName=a.name+" [from "+f.id+"]";function b(a){a=a.children;return h.jsx("div",{className:"x78zum5",children:a})}b.displayName=b.name+" [from "+f.id+"]";function e(a){a=a.children;return h.jsx("div",{className:"x78zum5 x13a6bvl x1ye3gou",children:a})}e.displayName=e.name+" [from "+f.id+"]";g.Container=a;g.StartAdornment=b;g.EndAdornment=e}),98);
__d("IGDListCellPlaceholder.react",["IGDAvatarGlimmer.react","IGDIsCompactModeContext.react","IGDSGlimmer.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={compactRoot:{display:"x78zum5",paddingStart:"xbbxn1n",paddingEnd:"xxbr6pl",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0},root:{display:"x78zum5",paddingStart:"xbbxn1n",paddingEnd:"xxbr6pl",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",width:"xxsgkw5",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlup9mm",width:"x1oux285",$$css:!0},textContainer:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",justifyContent:"xl56j7k",paddingStart:"x1ye3gou",$$css:!0},textGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xmix8c7",marginBottom:"x1e56ztr",width:"x1f9tj09",$$css:!0}};function a(a){a=a.avatarSize;a=a===void 0?"large":a;var b=d("IGDIsCompactModeContext.react").useIsCompactMode();return h.jsxs("div",{className:c("stylex")(b?i.compactRoot:i.root),children:[h.jsx(c("IGDAvatarGlimmer.react"),{size:a}),!b&&h.jsxs("div",{className:"x78zum5 xdt5ytf x1iyjqo2 xs83m0k xl56j7k x1ye3gou",children:[h.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:i.textGlimmer}),h.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:i.subtitleGlimmer})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDDeviceTypeProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");b=d("react");c=b.createContext;var h=b.createElement,i=b.useMemo,j=c({isDesktop:!0,isMobile:!1});function a(a){var b=a.children,c=a.isMobile;a=i(function(){return{isDesktop:!c,isMobile:c}},[c]);return h(j.Provider,{children:b,value:a})}a.displayName=a.name+" [from "+f.id+"]";g.context=j;g.IGDDeviceTypeProvider=a}),98);
__d("LSVerificationBadge.react",["I64","LSContactVerificationBadge.react","MWPActor.react","ReQL","ReQLSuspense","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.icon,e=a.size,g=a.threadKey,i=c("useReStore")(),j=d("MWPActor.react").useActor();a=d("ReQLSuspense").useArray(function(){return d("ReQL").leftJoin(d("ReQL").fromTableAscending(i.table("participants")).getKeyRange(g).filter(function(a){return!d("I64").equal(a.contactId,j)}).take(2),d("ReQL").fromTableAscending(i.table("contacts"))).map(function(a){a[0];a=a[1];return a})},[i,g,j],f.id+":35");var k=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(i.table("contacts")).getKeyRange(j)},[i,j],f.id+":51");if(a.length>1)return null;k=a.length===0?k:a[0];return k==null?null:h.jsx(c("LSContactVerificationBadge.react"),{contact:k,icon:(a=b)!=null?a:void 0,size:(k=e)!=null?k:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
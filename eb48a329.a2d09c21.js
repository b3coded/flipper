(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var i=t(2),r=t(6),a=(t(0),t(129)),l={id:"send-data",title:"Providing Data to Plugins"},o={unversionedId:"extending/send-data",id:"extending/send-data",isDocsHomePage:!1,title:"Providing Data to Plugins",description:"It is often useful to get an instance of a Flipper plugin to send data to it. Flipper makes this simple with built-in support.",source:"@site/../docs/extending/send-data.mdx",permalink:"/docs/extending/send-data",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/send-data.mdx",sidebar:"extending",previous:{title:"Client Plugin Lifecycle",permalink:"/docs/extending/client-plugin-lifecycle"},next:{title:"Error Handling",permalink:"/docs/extending/error-handling"}},p=[],c={rightToc:p};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is often useful to get an instance of a Flipper plugin to send data to it. Flipper makes this simple with built-in support."),Object(a.b)("p",null,"Plugins should be treated as singleton instances as there can only be one ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperClient")," and each ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperClient")," can only have one instance of a certain plugin. The Flipper API makes this simple by offering a way to get the current client and query it for plugins."),Object(a.b)("p",null,'Plugins are identified by the string that their identifier method returns, in this example, "MyFlipperPlugin". Note that null checks may be required as plugins may not be initialized, for example in production builds.'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"final FlipperClient client = AndroidFlipperClient.getInstance(context);\nif (client != null) {\n  final MyFlipperPlugin plugin = client.getPluginByClass(MyFlipperPlugin.class);\n  plugin.sendData(myData);\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objective-c"}),'FlipperClient *client = [FlipperClient sharedClient];\nMyFlipperPlugin *myPlugin = [client pluginWithIdentifier:@"MyFlipperPlugin"];\n[myPlugin sendData:myData];\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'auto& client = FlipperClient::instance();\nauto myPlugin = client.getPlugin<MyFlipperPlugin>("MyFlipperPlugin");\nif (myPlugin) {\n  myPlugin->sendData(myData);\n}\n')),Object(a.b)("p",null,"Here, ",Object(a.b)("inlineCode",{parentName:"p"},"sendData")," is an example of a method that might be implemented by the Flipper plugin."))}u.isMDXComponent=!0},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=i,g=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return t?r.a.createElement(g,o({ref:n},c,{components:t})):r.a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=b;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
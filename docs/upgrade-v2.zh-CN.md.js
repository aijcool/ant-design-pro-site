webpackJsonp([48],{874:function(n,s){n.exports={content:["article",["p","\u5728 Ant Design Pro 2.0 \u7248\u672c\u4e2d\u9664\u4e86\u5f88\u591a\u529f\u80fd\u6027\u4e0a\u7684\u589e\u5f3a\u5916\uff0c\u6211\u4eec\u8fd8\u5c06\u524d\u7aef\u6784\u5efa\u5de5\u5177\u4ece roadhog \u5347\u7ea7\u5230\u4e86 ",["a",{title:null,href:"https://umijs.org/"},"UmiJS"],"\uff08\u7b80\u79f0 umi\uff09\u3002\u4e4b\u6240\u4ee5\u8bf4\u662f\u5347\u7ea7\u800c\u4e0d\u662f\u66ff\u6362\uff0c\u662f\u56e0\u4e3a umi \u4e0d\u4ec5\u4ec5\u662f\u524d\u7aef\u6784\u5efa\u5de5\u5177\uff0c\u5b83\u8fd8\u5305\u542b\u4e86\u8def\u7531\u4ee5\u53ca\u4e00\u5957\u63d2\u4ef6\u673a\u5236\u7528\u4e8e\u6784\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684 React \u5e94\u7528\u3002"],["p","\u6240\u4ee5\u5982\u679c\u4f60\u60f3\u8981\u66f4\u597d\u7684\u5728\u539f\u6709\u7684\u9879\u76ee\u4e2d\u53bb\u6dfb\u52a0 Ant Design Pro 2.0 \u7684\u529f\u80fd\uff0c\u5c06 2.0 \u7684\u4ee3\u7801\u79fb\u690d\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff0c\u4f60\u6700\u597d\u5c06\u4f60\u7684\u9879\u76ee\u4ece roadhog \u8fc1\u79fb\u5230 umi\u3002\u8fd9\u8fb9\u6587\u6863\u4f1a\u6307\u5f15\u4f60\u5b8c\u6210\u8fc1\u79fb\u5de5\u4f5c\uff0c\u5728\u6b64\u4e4b\u524d\u4f60\u53ef\u80fd\u9700\u8981\u5148\u9605\u8bfb umi \u7684",["a",{title:null,href:"https://umijs.org/guide/"},"\u6587\u6863"],"\uff0c\u4f7f\u5f97\u5148\u5bf9 umi \u6709\u4e00\u4e2a\u521d\u6b65\u7684\u8ba4\u8bc6\uff0c\u8fd9\u5bf9\u4f60\u7684\u8fc1\u79fb\u5de5\u4f5c\u4f1a\u5f88\u6709\u5e2e\u52a9\u3002\u4e0b\u9762\u662f\u4ee5\u540e\u5927\u6982\u7684\u6b65\u9aa4\uff0c\u518d\u5f80\u540e\u4f1a\u6709\u66f4\u5177\u4f53\u7684\u8bf4\u660e\u3002"],["p","\u6ce8\uff1a\u8be5\u8fc1\u79fb\u6307\u5357\u662f\u57fa\u4e8e\u5f53\u524d\u6700\u65b0\u7684 v1 \u7248\u672c\u7f16\u5199\u7684\uff0c\u8fc1\u79fb\u6307\u5357\u5bf9\u5e94\u7684\u4fee\u6539\u4f60\u53ef\u4ee5\u5728\u5347\u7ea7\u793a\u4f8b\u7684 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c"},"commit"]," \u4e2d\u67e5\u770b\u3002\u8be5 commit \u53ea\u4f5c\u4e3a\u53c2\u8003\uff0c\u4e0d\u80fd\u76f4\u63a5\u5e94\u7528\u5728\u4f60\u7684\u9879\u76ee\u4e2d\uff0c\u5982\u679c\u4f60\u7684\u7248\u672c\u8fc7\u8001\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u7ec6\u8282\u4e0d\u4e00\u6837\uff0c\u8bf7\u7ed3\u5408\u5177\u4f53\u60c5\u51b5\u8fc1\u79fb"],["h2","\u8fc1\u79fb\u6b65\u9aa4\u6982\u89c8"],["ul",["li",["p","\u628a ",["code","package.json"]," roadhog \u7684\u4f9d\u8d56\u4fee\u6539\u4e3a umi\u3002"]],["li",["p","\u62f7\u8d1d ",["code",".webpackrc.js"]," \u4e2d\u7684\u914d\u7f6e\u5230 ",["code","config/config.js"]," \u4e2d\u3002"]],["li",["p","\u4fee\u6539 ",["code","src/routes"]," \u76ee\u5f55\u540d\u79f0\u4e3a pages\uff0cpages \u662f umi \u7ea6\u5b9a\u7684\u76ee\u5f55\u3002"]],["li",["p","\u5220\u9664 ",["code","src/models/index.js"],"\uff0c\u5728 umi \u4e2d models \u6587\u4ef6\u5939\u4e2d\u7684 dva model \u4f1a\u88ab\u81ea\u52a8\u6302\u8f7d\u3002"]],["li",["p","\u91cd\u547d\u540d ",["code","index.ejs"]," \u4e3a ",["code","pages/document.ejs"],"\uff0c\u5b83\u662f umi \u7ea6\u5b9a\u7684\u6587\u4ef6\u3002"]],["li",["p","\u4fee\u6539 ",["code","index.less"]," \u4e3a ",["code","global.less"]," \u548c\u4fee\u6539 ",["code","index.js"]," \u4e3a ",["code","global.js"],"\uff0c\u4ed6\u4eec\u4e5f\u662f umi \u7ea6\u5b9a\u7684\u6587\u4ef6\u3002"]],["li",["p","\u5728 ",["code","config/config.js"]," \u4e2d\u6dfb\u52a0\u8def\u7531\u914d\u7f6e routes\u3002"]],["li",["p","\u4fee\u6539 ",["code","src/layouts/BasicLayout.js"]," \u4e2d\u7684\u7ec4\u4ef6\u5d4c\u5957\u8bed\u6cd5\u3002"]],["li",["p","\u4fee\u6539 404 \u9875\u9762\u3002"]],["li",["p","\u4fee\u6539\u6743\u9650\u8def\u7531 AuthorizedRoute \u7684\u903b\u8f91\u3002"]],["li",["p","\u4fee\u6539 mock\u3002"]],["li",["p","\u5728 ",["code",".gitignore"]," \u4e2d\u6dfb\u52a0 umi \u76f8\u5173\u6587\u4ef6\u3002"]],["li",["p","\u901a\u8fc7\u6267\u884c ",["code","tnpm start"]," \u548c ",["code","tnpm run lint"]," \u4fee\u6539\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u3002"]]],["h2","\u8fc1\u79fb\u6b65\u9aa4\u7ec6\u8282"],["h3","\u4fee\u6539 roadhog \u4f9d\u8d56\u4e3a umi"],["p","\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",["code","package.json"],"\uff0c\u4fee\u6539\u4f9d\u8d56\u4e3a umi\uff1a"],["pre",{lang:"diff",highlighted:'"dependencies": {\n<span class="token deleted">- "dva": "^2.2.3",</span>\n<span class="token deleted">- "dva-loading": "^2.0.3",</span>\n<span class="token deleted">- "react-dom": "^16.4.1",</span>\n<span class="token deleted">- "react-loadable": "^5.5.0",</span>\n  ...\n},\n"devDependencies": {\n<span class="token inserted">+ "umi": "^2.0.0",</span>\n<span class="token inserted">+ "umi-plugin-react": "^1.0.0",</span>\n<span class="token deleted">- "roadhog": "^2.4.2",</span>\n<span class="token deleted">- "roadhog-api-doc": "^1.1.2",</span>\n  ...\n}'},["code",'"dependencies": {\n- "dva": "^2.2.3",\n- "dva-loading": "^2.0.3",\n- "react-dom": "^16.4.1",\n- "react-loadable": "^5.5.0",\n  ...\n},\n"devDependencies": {\n+ "umi": "^2.0.0",\n+ "umi-plugin-react": "^1.0.0",\n- "roadhog": "^2.4.2",\n- "roadhog-api-doc": "^1.1.2",\n  ...\n}']],["p","\u5728 umi \u4e2d\u5185\u7f6e\u4e86 React\uff0c\u901a\u8fc7 umi-plugin-react \u63d2\u4ef6\u96c6\u5185\u7f6e\u4e86 antd \u548c dva \u7b49 React \u6280\u672f\u6808\u5e38\u7528\u7684\u5e93\u3002\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://umijs.org/plugin/umi-plugin-react.html"},"umi-plugin-react \u7684\u6587\u6863"],"\u3002"],["p","\u53e6\u5916 ",["code","package.json"]," \u4e2d\u7684 scripts \u4e5f\u8981\u505a\u5bf9\u5e94\u7684\u4fee\u6539\uff1a"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- "start": "cross-env ESLINT=none roadhog dev",</span>\n<span class="token deleted">- "start:no-proxy": "cross-env NO_PROXY=true ESLINT=none roadhog dev",\t    </span>\n<span class="token deleted">- "build": "cross-env ESLINT=none roadhog build",</span>\n<span class="token inserted">+ "start": "umi dev",</span>\n<span class="token inserted">+ "start:no-mock": "cross-env MOCK=none umi dev",</span>\n<span class="token inserted">+ "build": "umi build",</span>'},["code",'- "start": "cross-env ESLINT=none roadhog dev",\n- "start:no-proxy": "cross-env NO_PROXY=true ESLINT=none roadhog dev",\t    \n- "build": "cross-env ESLINT=none roadhog build",\n+ "start": "umi dev",\n+ "start:no-mock": "cross-env MOCK=none umi dev",\n+ "build": "umi build",']],["p","\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\u8bb0\u5f97\u4e0d\u8981\u5fd8\u8bb0\u4f7f\u7528 ",["code","npm update"]," \u5c06\u4f9d\u8d56\u66f4\u65b0\u5230\u6700\u65b0\u3002"],["h3","\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6 config/config.js"],["p","umi \u7ea6\u5b9a\u4e86 ",["code",".umirc.js"]," \u548c ",["code","config/config.js"]," \u4e3a umi \u7684\u914d\u7f6e\u6587\u4ef6\uff08\u4e8c\u9009\u4e00\uff09\uff0c\u5728 Ant Design Pro \u4e2d\u56e0\u4e3a\u914d\u7f6e\u6bd4\u8f83\u591a\uff0c\u6211\u4eec\u9009\u62e9\u4f7f\u7528 ",["code","config/config.js"],"\u3002"],["p","\u4f60\u9700\u8981\u5728\u9879\u76ee\u4e2d\u521b\u5efa ",["code","config/config.js"],"\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u91cc\u9762\u5305\u542b\u4e86 umi \u7684\u5168\u90e8\u914d\u7f6e\u3002\u4f60\u53ef\u4ee5\u5148\u521d\u59cb\u5316\u4e3a\u5982\u4e0b\u5185\u5bb9\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>\n    <span class="token string">\'umi-plugin-react\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      antd<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      dva<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        hmr<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","export default {\n  plugins: [[\n    'umi-plugin-react',\n    {\n      antd: true,\n      dva: {\n        hmr: true,\n      },\n    }\n  ]]\n};"]],["p","\u8be5\u914d\u7f6e\u4f1a\u6302\u8f7d umi-plugin-react \u63d2\u4ef6\u96c6\u5e76\u6253\u5f00 antd \u548c dva \u63d2\u4ef6\uff0c\u4f7f\u5f97\u4f60\u5728\u9879\u76ee\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 antd \u548c dva\u3002"],["p","\u6dfb\u52a0 ",["code","config/config.js"]," \u4e4b\u540e\u4f60\u53ef\u4ee5\u5c06\u4f60\u9879\u76ee\u4e0b\u7684 ",["code",".webpackrc.js"]," \u4e2d\u7684\u914d\u7f6e\u4e5f\u8fc1\u79fb\u5230 ",["code","config/config.js"]," \u4e2d\u3002 ",["code",".webpackrc.js"]," \u662f af-webpack \u7684\u914d\u7f6e\u6587\u4ef6\uff0cumi \u548c roadhog \u90fd\u662f\u4f9d\u8d56\u4e8e\u5b83\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u76f4\u63a5\u8fc1\u79fb\u8fc7\u6765\u3002\u8fc1\u79fb\u8fc7\u6765\u4e4b\u540e\u5c31\u53ef\u4ee5\u5220\u9664\u539f\u6709\u7684 ",["code",".webpackrc.js"]," \u548c ",["code",".babelrc.js"]," \u6587\u4ef6\u4e86\u3002"],["p","\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f ",["code",".webpackrc.js"]," \u4e2d\u7684\u5982\u4e0b\u914d\u7f6e\u662f\u6ca1\u6709\u5fc5\u8981\u590d\u5236\u5230 ",["code","config/config.js"]," \u4e2d\u7684\uff1a"],["ul",["li",["p","entry: umi \u4f1a\u6709\u9ed8\u8ba4\u7684\u8def\u7531\u673a\u5236\uff0c\u9700\u8981\u5220\u9664\u8be5\u914d\u7f6e\u3002"]],["li",["p","extraBabelPlugins: umi-plugin-react \u4e2d\u4f1a\u5185\u7f6e\u5bf9 antd \u7684\u6309\u9700\u7f16\u8bd1\u7684\u652f\u6301\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u914d\u7f6e\u3002"]],["li",["p","env: env \u4e0b\u7684 dva-hmr \u63d2\u4ef6\u4e0d\u518d\u9700\u8981\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 umi-plugin-react \u914d\u7f6e\u4e2d\u5f00\u542f\u3002"]],["li",["p","alias: umi \u4e2d\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",["code","@/"]," \u7684\u522b\u540d\u5230 src \u76ee\u5f55\u3002"]],["li",["p","html: umi \u9ed8\u8ba4\u4f7f\u7528 ",["code","src/pages/document.ejs"]," \u4f5c\u4e3a html \u6a21\u677f\u3002"]]],["p","\u53e6\u5916\u6211\u4eec\u63a8\u8350\u5c06 ",["code","theme"]," \u914d\u7f6e\u76f4\u63a5\u5199\u5230 ",["code","config/config.js"]," \u4e2d\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5220\u9664\u6389 ",["code","src/theme.js"]," \u4e86\u3002"],["h3","\u4fee\u6539 routes \u4e3a pages"],["p","\u5728 umi \u4e2d\u5927\u91cf\u4f7f\u7528\u4e86\u7ea6\u5b9a\u548c\u914d\u7f6e\u6765\u9ad8\u6548\u7684\u5b9e\u73b0\u4e00\u4e9b\u529f\u80fd\uff0c\u5176\u4e2d umi \u5c31\u7ea6\u5b9a\u4e86 ",["code","src/pages"]," \u76ee\u5f55\u4e3a\u9875\u9762\u7ec4\u4ef6\u7684\u5b58\u653e\u76ee\u5f55\u3002\u5728 Ant Design Pro 1.0 \u4e2d\uff0c\u6211\u4eec\u7684\u9875\u9762\u90fd\u5b58\u653e\u5728 ",["code","src/routes"]," \u4e0b\u9762\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u5c06 routes \u91cd\u547d\u540d\u4e3a pages \u5373\u53ef\u3002"],["h3","\u5220\u9664 models/index.js"],["p","\u5728 umi \u4e2d\uff0c\u6302\u8f7d\u4e86 dva \u7684\u63d2\u4ef6\u4e4b\u540e models \u4e0b\u7684\u6587\u4ef6\u4f1a\u88ab\u9ed8\u8ba4\u5f53\u505a dva model \u5f15\u5165\uff0c\u6240\u4ee5\u4e0d\u518d\u9700\u8981\u5728 ",["code","models/index.js"]," \u4e2d\u6765\u624b\u52a8\u6302\u8f7d model\uff0c\u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u8be5\u6587\u4ef6\u3002"],["h3","\u4fee\u6539 index.ejs"],["p","\u79fb\u52a8 ",["code","index.ejs"]," \u5230 ",["code","pages/document.ejs"],"\uff0c\u5b83\u662f umi \u7ea6\u5b9a\u7684\u6587\u4ef6\u3002\u53c2\u8003 ",["a",{title:null,href:"https://umijs.org/guide/html-template.html"},"\u0153umi HTML \u6a21\u677f\n\u6587\u6863"],"\u3002"],["h3","\u4fee\u6539 index.js \u548c index.less"],["p","\u91cd\u547d\u540d ",["code","index.js"]," \u4e3a ",["code","global.js"],"\uff0c\u91cd\u547d\u540d ",["code","index.less"]," \u4e3a ",["code","global.less"],"\uff0c\u4ed6\u4eec\u4f1a\u88ab umi \u81ea\u52a8\u6302\u8f7d\u3002\u53ef\u4ee5\u53c2\u8003 umi \u7684",["a",{title:null,href:"https://umijs.org/guide/app-structure.html"},"\u76ee\u5f55\u7ea6\u5b9a"],"\u3002\u53e6\u5916\u56e0\u4e3a dva \u63d2\u4ef6\u4f1a\u81ea\u52a8\u6302\u8f7d model \u5e76\u9ed8\u8ba4\u6dfb\u52a0 dva-loading \u63d2\u4ef6\uff0c\u6240\u4ee5 index.js \u4e2d\u7684 dva \u76f8\u5173\u7684\u5185\u5bb9\u53ef\u4ee5\u88ab\u79fb\u9664\u4e86\u3002\u53ea\u9700\u8981\u4fdd\u7559\u7c7b\u4f3c\u4e0b\u9762\u8fd9\u4e9b\u521d\u59cb\u5316\u903b\u8f91\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token string">\'./polyfill\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./rollbar\'</span><span class="token punctuation">;</span>'},["code","import './polyfill';\nimport 'moment/locale/zh-cn';\nimport './rollbar';"]],["p","\u53e6\u5916 ",["code","global.less"]," \u4e2d\u7684 ",["code",":global"]," \u6807\u5fd7\u4e5f\u53ef\u4ee5\u79fb\u9664\u4e86\uff0c\u56e0\u4e3a ",["code","global.less"]," \u4e2d\u7684\u6837\u5f0f\u9ed8\u8ba4\u5c31\u662f\u5168\u5c40\u7684\uff0c\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\u9664\u4e86\u5b83\u5176\u5b83\u90fd\u4f1a\u9ed8\u8ba4\u4f7f\u7528 cssModule\u3002"],["h3","\u6dfb\u52a0\u8def\u7531\u914d\u7f6e"],["p","\u8fd9\u4e00\u6b65\u662f\u6700\u91cd\u8981\u7684\uff0cumi \u5185\u7f6e\u4e86\u8def\u7531\u7684\u5b9e\u73b0\uff0c\u63d0\u4f9b\u4e86\u7ea6\u5b9a\u5f0f\u548c\u914d\u7f6e\u5f0f\u4e24\u79cd\u8def\u7531\u65b9\u5f0f\u3002\u5728 Ant Design Pro \u4e2d\u6211\u4eec\u4f7f\u7528\u914d\u7f6e\u5f0f\u8def\u7531\u7684\u65b9\u5f0f\u3002\u4f60\u9700\u8981\u5728 ",["code","config/config.js"]," \u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879 ",["code","routes"],"\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u57fa\u4e8e ",["code","/dashboard"]," \u9875\u9762\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6837\u4f8b\uff0c\u4f60\u9700\u8981\u6309\u7167\u4f60\u7684\u9879\u76ee\u5177\u4f53\u505a\u4e0b\u8fc1\u79fb\u3002\u6211\u4eec\u63a8\u8350\u6dfb\u52a0\u4e00\u4e2a ",["code","config/router.config.js"]," \u7684\u6587\u4ef6\u7136\u540e\u5728 ",["code","config/config.js"]," \u4e2d\u5f15\u5165\u5b83\uff1a"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// config/router.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>\n    routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token comment" spellcheck="true">// dashboard</span>\n      <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> redirect<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span>\n        name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n        icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n        routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'analysis\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Analysis\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/monitor\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'monitor\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Monitor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/dashboard/workplace\'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'workplace\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Dashboard/Workplace\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>'},["code","// config/router.config.js\nmodule.exports = [\n  {\n    path: '/',\n    component: '../layouts/BasicLayout',\n    routes: [\n      // dashboard\n      { path: '/', redirect: '/dashboard/analysis' },\n      {\n        path: '/dashboard',\n        name: 'dashboard',\n        icon: 'dashboard',\n        routes: [\n          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },\n          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },\n          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },\n        ],\n      },\n    ],\n  },\n];"]],["p","\u5176\u4e2d component \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u662f\u76f8\u5bf9\u4e8e ",["code","src/pages"]," \u7684\u8def\u5f84\uff0c\u66f4\u591a\u7684\u8def\u7531\u914d\u7f6e\u4f60\u53ef\u4ee5\u53c2\u8003 v2 \u7248\u672c\u7684\u8def\u7531\u914d\u7f6e\uff0c\u548c umi \u7684\u6587\u6863\u3002\u53e6\u5916\u539f\u6709\u7684 1.0 \u7248\u672c\u7684\u8def\u7531\u4ee3\u7801 ",["code","src/common/router.js"]," \u548c ",["code","src/router.js"]," \u4e5f\u53ef\u4ee5\u5220\u9664\u4e86\u3002"],["h3","\u4fee\u6539\u5e03\u5c40\u7ec4\u4ef6"],["p","\u56e0\u4e3a\u4e0d\u5728\u4f7f\u7528 react-router@4 \u7684\u7ec4\u4ef6\u5f0f\u8def\u7531\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u4fee\u6539\u4f60\u7684\u5e03\u5c40\u7ec4\u4ef6\u3002\u628a\u5176\u4e2d\u7684 ",["code","<Switch/>"]," \u7ec4\u4ef6\u90e8\u5206\u4fee\u6539\u4e3a ",["code","{this.props.children}"],"\u3002"],["h3","\u4fee\u6539 404 \u9875\u9762"],["p","\u5728 umi \u4e2d\u9ed8\u8ba4\u4f7f\u7528 ",["code","src/pages/404.js"]," \u4f5c\u4e3a 404 \u9875\u9762\uff0c\u4f60\u9700\u8981\u5c06\u539f\u6765\u7684 ",["code","src/routes/Exception/404.js"]," \u8fc1\u79fb\u8fc7\u53bb\u3002"],["h3","\u4fee\u6539\u6743\u9650\u8def\u7531"],["p","\u5728 2.0 \u4e2d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 umi \u63d0\u4f9b\u7684",["a",{title:null,href:"https://umijs.org/guide/router.html#%E6%9D%83%E9%99%90%E8%B7%AF%E7%94%B1"},"\u6743\u9650\u8def\u7531"],"\u7684\u65b9\u6848\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4fdd\u7559 1.0 \u4e2d\u7684\u65b9\u6848\u7ee7\u7eed\u4f7f\u7528\u3002\u7531\u4e8e\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u5728\u672c\u6587\u4e2d\u5c31\u4e0d\u505a\u5177\u4f53\u8bf4\u660e\u4e86\u3002"],["h3","\u4fee\u6539 mock \u6570\u636e"],["p","\u5728 umi \u4e2d\uff0c\u9ed8\u8ba4\u4f1a\u5c06 ",["code","mock/*.js"]," \u7684\u6587\u4ef6\u4f5c\u4e3a mock \u6587\u4ef6\u3002\u6240\u4ee5\u53ef\u4ee5\u5c06 mock \u6570\u636e\u7684 URL \u4fe1\u606f\u8fc1\u79fb\u5230 mock \u6587\u4ef6\u4e2d\u540e\u5220\u9664 ",["code",".roadhogrc.mock.js"]," \u6587\u4ef6\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\u76f4\u63a5\u5199\u5728 ",["code",".roadhogrc.mock.js"]," \u4e2d\u7684 mock \u6570\u636e\u9700\u8981\u8fc1\u79fb\u51fa\u6765\uff0c\u6bd4\u5982\u53ef\u4ee5\u65b0\u5efa ",["code","mock/common.js"]," \u6765\u8fc1\u79fb\u8fd9\u90e8\u5206\u6570\u636e\u3002"],["p","\u66f4\u591a\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003 umi \u7684\u6587\u6863",["a",{title:null,href:"https://umijs.org/guide/mock-data.html"},"Mock \u6570\u636e"],"\u3002"],["h3","\u4fee\u6539 .gitignore"],["p","\u4f7f\u7528 umi \u540e\u4f60\u9700\u8981\u5c06 umi \u5728\u5f00\u53d1\u548c\u6784\u5efa\u4e2d\u7684\u4e34\u65f6\u6587\u4ef6\u6dfb\u52a0\u5230 ",["code",".gitignore"]," \u91cc\u9762\u3002"],["pre",{lang:null,highlighted:'<span class="token punctuation">.</span>umi\n<span class="token punctuation">.</span>umi<span class="token operator">-</span>production'},["code",".umi\n.umi-production"]],["h3","\u4fee\u6539\u4ee3\u7801\u522b\u540d\u7b49\u7ec6\u8282"],["p","\u4ee5\u4e0a\u7684\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u8fd0\u884c ",["code","npm start"]," \u542f\u52a8\u4f60\u7684\u9879\u76ee\u4e86\uff0c\u4f60\u4f1a\u770b\u5230\u62a5\u9519\uff0c\u4f46\u662f\u4e0d\u8981\u614c\uff0c\u6309\u7167\u62a5\u9519\u4fe1\u606f\u4e00\u6b65\u4e00\u6b65\u4fee\u6539\u5373\u53ef\u3002\u4f60\u53ef\u80fd\u9700\u8981\u4fee\u6539\u7684\u5185\u5bb9\u6709\uff1a"],["ul",["li",["p","\u4fee\u6539\u522b\u540d ",["code","components/"]," \u4e3a ",["code","@/components"],"\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 ",["code","config/config.js"]," \u4fdd\u7559\u539f\u6709\u7684\u522b\u540d\u3002"]],["li",["p","\u4fee\u6539 ",["code","src/utils/request.js"]," \u4e2d\u548c dva \u76f8\u5173\u7684\u90e8\u5206\u3002\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",["code","umi/router"]," \u6765\u505a\u8df3\u8f6c\u3002"]],["li",["p",["code","src/utils/request.js"]," \u7684 ",["code","/exception/400"]," \u53ef\u4ee5\u6539\u4e3a ",["code","/400"],"\u3002"]],["li",["p","\u53bb\u6389 ",["code","BasicLayout"]," \u4e2d\u7684 ",["code","const baseRedirect = this.getBaseRedirect();"]," \u76f8\u5173\u903b\u8f91\uff0c\u8df3\u8f6c\u7684\u903b\u8f91\u53ef\u4ee5\u901a\u8fc7 umi \u7684 routes \u914d\u7f6e\u5b9e\u73b0\u3002"]],["li",["p","\u4fee\u6539 ",["code","BasicLayout"]," \u4e2d\u7684 ",["code","getPageTitle"]," \u548c ",["code","getBreadcrumbNameMap"]," \u7684\u76f8\u5173\u903b\u8f91\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u4ee3\u7801\u5b9e\u73b0\u3002\u5b8c\u6574\u4ee3\u7801\u53c2\u8003 v1 \u5347\u7ea7 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c"},"commit"],"\u3002"]]],["p","\u6ce8\uff1a",["code","memoizeOne"]," \u662f ",["code","memoize-one"]," npm \u5305\u63d0\u4f9b\u7684\u65b9\u6cd5\uff0c\u4f60\u9700\u8981\u5148 install memoize-one\u3002",["code","deepEqual"]," \u662f ",["code","lodash.isequal"]," \u5305\u63d0\u4f9b\u7684\uff0c\u4e5f\u9700\u8981\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">/**\n * \u83b7\u53d6\u9762\u5305\u5c51\u6620\u5c04\n * @param {Object} menuData \u83dc\u5355\u914d\u7f6e\n */</span>\n<span class="token keyword">const</span> getBreadcrumbNameMap <span class="token operator">=</span> <span class="token function">memoizeOne</span><span class="token punctuation">(</span>meun <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> routerMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> mergeMeunAndRouter <span class="token operator">=</span> meunData <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    meunData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>meunItem <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>meunItem<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">mergeMeunAndRouter</span><span class="token punctuation">(</span>meunItem<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment" spellcheck="true">// Reduce memory usage</span>\n      routerMap<span class="token punctuation">[</span>meunItem<span class="token punctuation">.</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> meunItem<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">mergeMeunAndRouter</span><span class="token punctuation">(</span>meun<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> routerMap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> deepEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","/**\n * \u83b7\u53d6\u9762\u5305\u5c51\u6620\u5c04\n * @param {Object} menuData \u83dc\u5355\u914d\u7f6e\n */\nconst getBreadcrumbNameMap = memoizeOne(meun => {\n  const routerMap = {};\n  const mergeMeunAndRouter = meunData => {\n    meunData.forEach(meunItem => {\n      if (meunItem.children) {\n        mergeMeunAndRouter(meunItem.children);\n      }\n      // Reduce memory usage\n      routerMap[meunItem.path] = meunItem;\n    });\n  };\n  mergeMeunAndRouter(meun);\n  return routerMap;\n}, deepEqual);"]],["p","\u9664\u4e86\u9879\u76ee\u80fd\u591f\u6b63\u5e38\u542f\u52a8\uff0c\u4f60\u8fd8\u5e94\u8be5\u518d\u8fd0\u884c\u4e0b ",["code","tnpm run lint"]," \u6765\u89e3\u51b3\u4e0b\u90e8\u5206\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u6bd4\u8f83\u4f4e\u7ea7\u7684\u95ee\u9898\u3002\u4f60\u53ef\u80fd\u9700\u8981\u5904\u7406\u7684\u95ee\u9898\u548c\u65b9\u6848\u5982\u4e0b\uff1a"],["ul",["li",["p",["code","no-unused-vars"]," \u9519\u8bef\uff0c\u68c0\u67e5\u4e0b\u6ca1\u6709\u95ee\u9898\u5c31\u53ef\u4ee5\u5220\u9664\u5b83\u4e86\u3002"]],["li",["p",["code","react/destructuring-assignment"]," \u9519\u8bef\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4fee\u6539\u7c7b\u4f3c ",["code","this.props.children"]," \u4e3a ",["code","const { children } = this.props"]," \u4e4b\u7c7b\u7684\u9519\u8bef\u3002"]]],["p","\u53e6\u5916\u6211\u4eec\u63a8\u8350\u4f60\u8fc1\u79fb\u5230 2.0 \u63a8\u8350\u7684 lint \u89c4\u5219\uff0c\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u4f18\u96c5\u3002"],["h2","\u4f7f\u7528 2.0 \u4e2d\u7684\u65b0\u529f\u80fd"],["p","\u5b8c\u6210 roadhog \u5230 umi \u7684\u8fc1\u79fb\u540e\u8981\u4f7f\u7528 2.0 \u7684\u65b0\u529f\u80fd\u5c31\u4f1a\u53d8\u5f97\u7b80\u5355\u30022.0 \u4e2d\u6211\u4eec\u4e3b\u8981\u6709\u5982\u4e0b\u7684\u65b0\u7279\u6027\u6dfb\u52a0\uff1a"],["ul",["li",["p","\u65b0\u589e\u7528\u6237\u4fe1\u606f\u9875\u9762\u3002"]],["li",["p","\u652f\u6301\u56fd\u9645\u5316\u3002"]],["li",["p","\u652f\u6301\u98ce\u683c\u5207\u6362\u3002"]]],["h3","\u65b0\u589e\u7528\u6237\u4fe1\u606f\u9875\u9762"],["p","\u4f60\u53ea\u9700\u8981\u5c06 v2 ",["code","pages"]," \u76ee\u5f55\u4e0b\u5bf9\u5e94\u7684\u4ee3\u7801 copy \u5230\u4f60\u7684\u9879\u76ee\u4e2d\u5e76\u5728 ",["code","config/config.js"]," \u4e2d\u4fee\u6539 routes \u914d\u7f6e\u5373\u53ef\u3002\u8fd9\u90e8\u5206\u76f8\u5bf9\u6765\u8bf4\u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u4e0d\u505a\u8fc7\u591a\u8bf4\u660e\u3002\u53e6\u5916\u9664\u4e86\u65b0\u589e\u7684\u7528\u6237\u4fe1\u606f\u9875\u9762\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u53c2\u8003\u5176\u4ed6\u9875\u9762\u7684\u66f4\u65b0\u53bb\u8df3\u8f6c\u4f60\u81ea\u5df1\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u3002"],["h3","\u652f\u6301\u56fd\u9645\u5316"],["p","\u5728 Ant Design Pro 2.0 \u4e2d\u6211\u4eec\u4f7f\u7528\u4e86 umi \u7684\u63d2\u4ef6 ",["code","umi-plugin-locale"]," \u6765\u5b9e\u73b0\u56fd\u9645\u5316\u3002\u8be5\u63d2\u4ef6\u4e5f\u5df2\u7ecf\u5185\u7f6e\u5230\u4e86 ",["code","umi-plugin-react"]," \u63d2\u4ef6\u96c6\u4e2d\u3002\u4f60\u53ef\u4ee5\u5728\u8be5\u63d2\u4ef6\u96c6\u7684\u914d\u7f6e\u4e2d\u6dfb\u52a0 ",["code","locale"]," \u914d\u7f6e\u6765\u5f00\u542f\u56fd\u9645\u5316\u3002"],["p","\u5f00\u542f\u56fd\u9645\u5316\u63d2\u4ef6\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u6dfb\u52a0 ",["code","locales"]," \u6587\u4ef6\u5939\uff0c\u6309\u7167\u7ea6\u5b9a\u6dfb\u52a0\u56fd\u9645\u5316\u8d44\u6e90\u6587\u4ef6\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 ",["code","umi/locale"]," \u66b4\u9732\u7684 API \u6765\u5b9e\u73b0\u56fd\u9645\u5316\u4e86\u3002"],["p","\u66f4\u591a\u5173\u4e8e ",["code","umi-plugin-locale"]," \u7684\u914d\u7f6e\u53ef\u4ee5\u63d2\u4ef6\u5b83\u7684",["a",{title:null,href:"https://umijs.org/plugin/umi-plugin-react.html#locale"},"\u6587\u6863"],"\u3002"],["h3","\u652f\u6301\u98ce\u683c\u5207\u6362"],["p","Ant Design Pro \u4f7f\u7528\u4e86 less + cssModule \u4f5c\u4e3a\u6837\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e less \u7f16\u8bd1\u65f6\u7684 lessVars \u6765\u5c31\u8be5\u4e3b\u9898\u6837\u5f0f\u914d\u7f6e\uff0c\u5728 umi \u4e2d\u5185\u7f6e\u4e86\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",["code","theme"]," \u6765\u5b9e\u73b0\u3002\u53c2\u8003 umi \u7684",["a",{title:null,href:"https://umijs.org/config/#theme"},"\u914d\u7f6e\u6587\u6863"],"\u3002"],["p","\u4f46\u662f v2 \u7248\u672c\u652f\u6301\u7684\u5bfc\u822a\u5e03\u5c40\u65b9\u5f0f\u7b49\u7684\u8c03\u6574\u4e3b\u8981\u662f\u4ee3\u7801\u7684\u4e1a\u52a1\u903b\u8f91\u7684\u5347\u7ea7\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 v2 \u4ee3\u7801\u4e2d\u7684 ",["code","src/layouts/BasicLayout.js"]," \u7684\u4ee3\u7801\u505a\u8c03\u6574\u3002"],["p","\u5bf9\u4e8e\u5728\u7ebf\u7684\u4e3b\u9898\u5207\u6362\uff0c\u56e0\u4e3a less \u662f\u5728\u6784\u5efa\u65f6\u7f16\u8bd1\u7684\uff0c\u8981\u60f3\u5b9e\u73b0\u5728\u5207\u6362\uff0c\u9700\u8981\u652f\u6301 less \u5728\u5728\u7ebf\u7f16\u8bd1\u7b49\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u6211\u4eec\u5f00\u53d1\u4e86 ",["code","ant-design-theme"]," \u7684 webpack \u63d2\u4ef6\u548c ",["code","merge-less"]," \u63d2\u4ef6\u4e00\u8d77\u5b9e\u73b0\u4e86\u8fd9\u6837\u7684\u529f\u80fd\u3002\u5982\u679c\u4f60\u6709\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 v2 \u4ee3\u7801\u4e2d\u7684 ",["code","config/plugin.config.js"]," \u548c ",["code","src/models/setting.js"]," \u6765\u6dfb\u52a0\u5bf9\u5e94\u4ee3\u7801\u3002"],["h3","\u66f4\u591a"],["p","\u66f4\u591a\u8bf7\u67e5\u770b Ant Design Pro 2.0 ",["a",{title:null,href:"https://www.yuque.com/ant-design/ant-design-pro/ant_design_pro_2.0_is_out"},"\u53d1\u5e03\u65e5\u5fd7"],"\u3002"]],meta:{order:2,title:"\u5347\u7ea7\u5230 2.0 \u7248\u672c",type:"\u5165\u95e8",filename:"docs/upgrade-v2.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u8fc1\u79fb\u6b65\u9aa4\u6982\u89c8",title:"\u8fc1\u79fb\u6b65\u9aa4\u6982\u89c8"},"\u8fc1\u79fb\u6b65\u9aa4\u6982\u89c8"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8fc1\u79fb\u6b65\u9aa4\u7ec6\u8282",title:"\u8fc1\u79fb\u6b65\u9aa4\u7ec6\u8282"},"\u8fc1\u79fb\u6b65\u9aa4\u7ec6\u8282"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-2.0-\u4e2d\u7684\u65b0\u529f\u80fd",title:"\u4f7f\u7528 2.0 \u4e2d\u7684\u65b0\u529f\u80fd"},"\u4f7f\u7528 2.0 \u4e2d\u7684\u65b0\u529f\u80fd"]]]}}});
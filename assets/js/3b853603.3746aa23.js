"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const l={title:"Use flaml.autogen for local LLMs",authors:"jialeliu",tags:["LLM","FLAMLv2"]},r=void 0,i={permalink:"/FLAML/blog/2023/07/14/Local-LLMs",source:"@site/blog/2023-07-14-Local-LLMs/index.mdx",title:"Use flaml.autogen for local LLMs",description:"TL;DR:",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"LLM",permalink:"/FLAML/blog/tags/llm"},{label:"FLAMLv2",permalink:"/FLAML/blog/tags/flam-lv-2"}],readingTime:2.085,truncated:!1,authors:[{name:"Jiale Liu",title:"Undergraduate student at Xidian University",url:"https://leoljl.github.io",imageURL:"https://github.com/LeoLjl/leoljl.github.io/blob/main/profile.jpg?raw=true",key:"jialeliu"}],nextItem:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",permalink:"/FLAML/blog/2023/05/18/GPT-adaptive-humaneval"}},p={authorsImageUrls:[void 0]},s=[{value:"Preparations",id:"preparations",children:[{value:"Clone FastChat",id:"clone-fastchat",children:[],level:3},{value:"Download checkpoint",id:"download-checkpoint",children:[],level:3}],level:2},{value:"Initiate server",id:"initiate-server",children:[],level:2},{value:"Interact with model using <code>oai.Completion</code>",id:"interact-with-model-using-oaicompletion",children:[],level:2},{value:"interacting with multiple local LLMs",id:"interacting-with-multiple-local-llms",children:[],level:2},{value:"For Further Reading",id:"for-further-reading",children:[],level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR:"),"\nWe demonstrate how to use flaml.autogen for local LLM application. As an example, we will initiate an endpoint using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lm-sys/FastChat"},"FastChat")," and perform inference on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/THUDM/ChatGLM2-6B"},"ChatGLMv2-6b"),"."),(0,o.kt)("h2",{id:"preparations"},"Preparations"),(0,o.kt)("h3",{id:"clone-fastchat"},"Clone FastChat"),(0,o.kt)("p",null,"FastChat provides OpenAI-compatible APIs for its supported models, so you can use FastChat as a local drop-in replacement for OpenAI APIs. However, its code needs minor modification in order to function properly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/lm-sys/FastChat.git\ncd FastChat\n")),(0,o.kt)("p",null,"According to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lm-sys/FastChat/issues/1641"},"issue"),", comment out all the lines containing ",(0,o.kt)("inlineCode",{parentName:"p"},"finish_reason")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"fastchat/protocol/api_protocal.py")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fastchat/protocol/openai_api_protocol.py")," will fix the errors. The modified code looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class CompletionResponseChoice(BaseModel):\n    index: int\n    text: str\n    logprobs: Optional[int] = None\n    # finish_reason: Optional[Literal["stop", "length"]]\n\nclass CompletionResponseStreamChoice(BaseModel):\n    index: int\n    text: str\n    logprobs: Optional[float] = None\n    # finish_reason: Optional[Literal["stop", "length"]] = None\n')),(0,o.kt)("h3",{id:"download-checkpoint"},"Download checkpoint"),(0,o.kt)("p",null,"ChatGLM-6B is an open bilingual language model based on General Language Model (GLM) framework, with 6.2 billion parameters. ChatGLM2-6B is its second-generation version."),(0,o.kt)("p",null,"Before downloading from HuggingFace Hub, you need to have Git LFS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage"},"installed"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://huggingface.co/THUDM/chatglm2-6b\n")),(0,o.kt)("h2",{id:"initiate-server"},"Initiate server"),(0,o.kt)("p",null,"First, launch the controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m fastchat.serve.controller\n")),(0,o.kt)("p",null,"Then, launch the model worker(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m fastchat.serve.model_worker --model-path chatglm2-6b\n")),(0,o.kt)("p",null,"Finally, launch the RESTful API server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m fastchat.serve.openai_api_server --host localhost --port 8000\n")),(0,o.kt)("h2",{id:"interact-with-model-using-oaicompletion"},"Interact with model using ",(0,o.kt)("inlineCode",{parentName:"h2"},"oai.Completion")),(0,o.kt)("p",null,"Now the models can be directly accessed through openai-python library as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"flaml.oai.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"flaml.oai.ChatCompletion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import oai\n\n# create a text completion request\nresponse = oai.Completion.create(\n    config_list=[\n        {\n            "model": "chatglm2-6b",\n            "api_base": "http://localhost:8000/v1",\n            "api_type": "open_ai",\n            "api_key": "NULL", # just a placeholder\n        }\n    ],\n    prompt="Hi",\n)\nprint(response)\n\n# create a chat completion request\nresponse = oai.ChatCompletion.create(\n    config_list=[\n        {\n            "model": "chatglm2-6b",\n            "api_base": "http://localhost:8000/v1",\n            "api_type": "open_ai",\n            "api_key": "NULL",\n        }\n    ],\n    messages=[{"role": "user", "content": "Hi"}]\n)\nprint(response)\n')),(0,o.kt)("p",null,"If you would like to switch to different models, download their checkpoints and specify model path when launching model worker(s)."),(0,o.kt)("h2",{id:"interacting-with-multiple-local-llms"},"interacting with multiple local LLMs"),(0,o.kt)("p",null,"If you would like to interact with multiple LLMs on your local machine, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"model_worker")," step above with a multi model variant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m fastchat.serve.multi_model_worker \\\n    --model-path lmsys/vicuna-7b-v1.3 \\\n    --model-names vicuna-7b-v1.3 \\\n    --model-path chatglm2-6b \\\n    --model-names chatglm2-6b\n")),(0,o.kt)("p",null,"The inference code would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import oai\n\n# create a chat completion request\nresponse = oai.ChatCompletion.create(\n    config_list=[\n        {\n            "model": "chatglm2-6b",\n            "api_base": "http://localhost:8000/v1",\n            "api_type": "open_ai",\n            "api_key": "NULL",\n        },\n        {\n            "model": "vicuna-7b-v1.3",\n            "api_base": "http://localhost:8000/v1",\n            "api_type": "open_ai",\n            "api_key": "NULL",\n        }\n    ],\n    messages=[{"role": "user", "content": "Hi"}]\n)\nprint(response)\n')),(0,o.kt)("h2",{id:"for-further-reading"},"For Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Use-Cases/Auto-Generation"},"Documentation")," about ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.autogen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lm-sys/FastChat"},"Documentation")," about FastChat.")))}m.isMDXComponent=!0}}]);
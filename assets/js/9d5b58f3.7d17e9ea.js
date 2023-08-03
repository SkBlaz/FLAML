"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7320:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_label:"responsive_agent",title:"autogen.agentchat.responsive_agent"},r=void 0,o={unversionedId:"reference/autogen/agentchat/responsive_agent",id:"reference/autogen/agentchat/responsive_agent",isDocsHomePage:!1,title:"autogen.agentchat.responsive_agent",description:"ResponsiveAgent Objects",source:"@site/docs/reference/autogen/agentchat/responsive_agent.md",sourceDirName:"reference/autogen/agentchat",slug:"/reference/autogen/agentchat/responsive_agent",permalink:"/FLAML/docs/reference/autogen/agentchat/responsive_agent",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/autogen/agentchat/responsive_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"responsive_agent",title:"autogen.agentchat.responsive_agent"},sidebar:"referenceSideBar",previous:{title:"groupchat",permalink:"/FLAML/docs/reference/autogen/agentchat/groupchat"},next:{title:"user_proxy_agent",permalink:"/FLAML/docs/reference/autogen/agentchat/user_proxy_agent"}},s=[{value:"ResponsiveAgent Objects",id:"responsiveagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"register_class_specific_reply",id:"register_class_specific_reply",children:[],level:4},{value:"system_message",id:"system_message",children:[],level:4},{value:"update_system_message",id:"update_system_message",children:[],level:4},{value:"update_max_consecutive_auto_reply",id:"update_max_consecutive_auto_reply",children:[],level:4},{value:"max_consecutive_auto_reply",id:"max_consecutive_auto_reply",children:[],level:4},{value:"chat_messages",id:"chat_messages",children:[],level:4},{value:"last_message",id:"last_message",children:[],level:4},{value:"use_docker",id:"use_docker",children:[],level:4},{value:"send",id:"send",children:[],level:4},{value:"receive",id:"receive",children:[],level:4},{value:"initiate_chat",id:"initiate_chat",children:[],level:4},{value:"reset",id:"reset",children:[],level:4},{value:"reset_consecutive_auto_reply_counter",id:"reset_consecutive_auto_reply_counter",children:[],level:4},{value:"clear_history",id:"clear_history",children:[],level:4},{value:"generate_reply",id:"generate_reply",children:[],level:4},{value:"get_human_input",id:"get_human_input",children:[],level:4},{value:"run_code",id:"run_code",children:[],level:4},{value:"execute_code_blocks",id:"execute_code_blocks",children:[],level:4},{value:"execute_function",id:"execute_function",children:[],level:4},{value:"generate_init_message",id:"generate_init_message",children:[],level:4},{value:"register_function",id:"register_function",children:[],level:4}],level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"responsiveagent-objects"},"ResponsiveAgent Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ResponsiveAgent(Agent)\n")),(0,l.kt)("p",null,"(Experimental) A class for generic responsive agents which can be configured as assistant or user proxy."),(0,l.kt)("p",null,"After receiving each message, the agent will send a reply to the sender unless the msg is a termination msg.\nFor example, AssistantAgent and UserProxyAgent are subclasses of ResponsiveAgent,\nconfigured with different default settings."),(0,l.kt)("p",null,"To modify auto reply, override ",(0,l.kt)("inlineCode",{parentName:"p"},"generate_reply")," method.\nTo disable/enable human response in every turn, set ",(0,l.kt)("inlineCode",{parentName:"p"},"human_input_mode"),' to "NEVER" or "ALWAYS".\nTo modify the way to get human input, override ',(0,l.kt)("inlineCode",{parentName:"p"},"get_human_input")," method.\nTo modify the way to execute code blocks, single code block, or function call, override ",(0,l.kt)("inlineCode",{parentName:"p"},"execute_code_blocks"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"run_code"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"execute_function")," methods respectively.\nTo customize the initial message when a conversation starts, override ",(0,l.kt)("inlineCode",{parentName:"p"},"generate_init_message")," method."),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str, system_message: Optional[str] = "You are a helpful AI Assistant.", is_termination_msg: Optional[Callable[[Dict], bool]] = None, max_consecutive_auto_reply: Optional[int] = None, human_input_mode: Optional[str] = "TERMINATE", function_map: Optional[Dict[str, Callable]] = None, code_execution_config: Optional[Union[Dict, bool]] = None, llm_config: Optional[Union[Dict, bool]] = None, default_auto_reply: Optional[Union[str, Dict, None]] = "")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," ",(0,l.kt)("em",{parentName:"li"},"str")," - name of the agent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,l.kt)("em",{parentName:"li"},"str")," - system message for the ChatCompletion inference."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,l.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_consecutive_auto_reply")," ",(0,l.kt)("em",{parentName:"li"},"int")," - the maximum number of consecutive auto replies.\ndefault to None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).\nWhen set to 0, no auto reply will be generated."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"human_input_mode")," ",(0,l.kt)("em",{parentName:"li"},"str"),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function_map")," ",(0,l.kt)("em",{parentName:"li"},"dict","[str, callable]")," - Mapping function names (passed to openai) to callable functions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"code_execution_config")," ",(0,l.kt)("em",{parentName:"li"},"dict or False")," - config for the code execution.\nTo disable code execution, set to False. Otherwise, set to a dictionary with the following keys:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'work_dir (Optional, str): The working directory for the code execution.\nIf None, a default working directory will be used.\nThe default working directory is the "extensions" directory under\n"path_to_flaml/autogen".'),(0,l.kt)("li",{parentName:"ul"},"use_docker (Optional, list, str or bool): The docker image to use for code execution.\nIf a list or a str of image name(s) is provided, the code will be executed in a docker container\nwith the first image successfully pulled.\nIf None, False or empty, the code will be executed in the current environment.\nDefault is True, which will be converted into a list.\nIf the code is executed in the current environment,\nthe code must be trusted."),(0,l.kt)("li",{parentName:"ul"},"timeout (Optional, int): The maximum execution time in seconds."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"llm_config")," ",(0,l.kt)("em",{parentName:"li"},"dict or False")," - llm inference configuration.\nPlease refer to ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/autogen/oai/completion#create"},"autogen.Completion.create"),"\nfor available options.\nTo disable llm-based auto reply, set to False."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_auto_reply")," ",(0,l.kt)("em",{parentName:"li"},"str or dict or None")," - default auto reply when no code execution or llm-based reply is generated.")),(0,l.kt)("h4",{id:"register_class_specific_reply"},"register","_","class","_","specific","_","reply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def register_class_specific_reply(class_type, reply_func: Callable)\n")),(0,l.kt)("p",null,"Register a class-specific reply function."),(0,l.kt)("p",null,"The class-specific reply function will be called when the sender is an instance of the class_type.\nThe function registered later will be checked earlier."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class_type")," ",(0,l.kt)("em",{parentName:"li"},"Class")," - the class type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reply_func")," ",(0,l.kt)("em",{parentName:"li"},"Callable")," - the reply function.")),(0,l.kt)("h4",{id:"system_message"},"system","_","message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def system_message()\n")),(0,l.kt)("p",null,"Return the system message."),(0,l.kt)("h4",{id:"update_system_message"},"update","_","system","_","message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def update_system_message(system_message: str)\n")),(0,l.kt)("p",null,"Update the system message."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,l.kt)("em",{parentName:"li"},"str")," - system message for the ChatCompletion inference.")),(0,l.kt)("h4",{id:"update_max_consecutive_auto_reply"},"update","_","max","_","consecutive","_","auto","_","reply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def update_max_consecutive_auto_reply(value: int, sender: Optional[Agent] = None)\n")),(0,l.kt)("p",null,"Update the maximum number of consecutive auto replies."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," ",(0,l.kt)("em",{parentName:"li"},"int")," - the maximum number of consecutive auto replies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sender")," ",(0,l.kt)("em",{parentName:"li"},"Agent")," - when the sender is provided, only update the max_consecutive_auto_reply for that sender.")),(0,l.kt)("h4",{id:"max_consecutive_auto_reply"},"max","_","consecutive","_","auto","_","reply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def max_consecutive_auto_reply(sender: Optional[Agent] = None) -> int\n")),(0,l.kt)("p",null,"The maximum number of consecutive auto replies."),(0,l.kt)("h4",{id:"chat_messages"},"chat","_","messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef chat_messages() -> Dict[str, List[Dict]]\n")),(0,l.kt)("p",null,"A dictionary of conversations from name to list of ChatCompletion messages."),(0,l.kt)("h4",{id:"last_message"},"last","_","message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def last_message(agent: Optional[Agent] = None) -> Dict\n")),(0,l.kt)("p",null,"The last message exchanged with the agent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"agent")," ",(0,l.kt)("em",{parentName:"li"},"Agent")," - The agent in the conversation.\nIf None and more than one agent's conversations are found, an error will be raised.\nIf None and only one conversation is found, the last message of the only conversation will be returned.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  The last message exchanged with the agent."),(0,l.kt)("h4",{id:"use_docker"},"use","_","docker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef use_docker() -> Union[bool, str, None]\n")),(0,l.kt)("p",null,"Bool value of whether to use docker to execute the code,\nor str value of the docker image name to use, or None when code execution is disabled."),(0,l.kt)("h4",{id:"send"},"send"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send(message: Union[Dict, str], recipient: Agent)\n")),(0,l.kt)("p",null,"Send a message to another agent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," ",(0,l.kt)("em",{parentName:"li"},"dict or str")," - message to be sent.\nThe message could contain the following fields (either content or function_call must be provided):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"content (str): the content of the message."),(0,l.kt)("li",{parentName:"ul"},"function_call (str): the name of the function to be called."),(0,l.kt)("li",{parentName:"ul"},"name (str): the name of the function to be called."),(0,l.kt)("li",{parentName:"ul"},'role (str): the role of the message, any role that is not "function"\nwill be modified to "assistant".'),(0,l.kt)("li",{parentName:"ul"},"context (dict): the context of the message, which will be passed to\n",(0,l.kt)("a",{parentName:"li",href:"../oai/Completion#create"},"autogen.Completion.create"),".\nFor example, one agent can send a message A as:")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'{\n    "content": lambda context: context["use_tool_msg"],\n    "context": {\n        "use_tool_msg": "Use tool X if they are relevant."\n    }\n}\n')),(0,l.kt)("p",null,'  Next time, one agent can send a message B with a different "use_tool_msg".\nThen the content of message A will be refreshed to the new "use_tool_msg".\nSo effectively, this provides a way for an agent to send a "link" and modify\nthe content of the "link" later.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recipient")," ",(0,l.kt)("em",{parentName:"li"},"Agent")," - the recipient of the message.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueError")," - if the message can't be converted into a valid ChatCompletion message.")),(0,l.kt)("h4",{id:"receive"},"receive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def receive(message: Union[Dict, str], sender: Agent)\n")),(0,l.kt)("p",null,"Receive a message from another agent."),(0,l.kt)("p",null,"Once a message is received, this function sends a reply to the sender or stop.\nThe reply can be generated automatically or entered manually by a human."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," ",(0,l.kt)("em",{parentName:"li"},"dict or str")," - message from the sender. If the type is dict, it may contain the following reserved fields (either content or function_call need to be provided).",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},'"content": content of the message, can be None.'),(0,l.kt)("li",{parentName:"ol"},'"function_call": a dictionary containing the function name and arguments.'),(0,l.kt)("li",{parentName:"ol"},'"role": role of the message, can be "assistant", "user", "function".\nThis field is only needed to distinguish between "function" or "assistant"/"user".'),(0,l.kt)("li",{parentName:"ol"},'"name": In most cases, this field is not needed. When the role is "function", this field is needed to indicate the function name.'),(0,l.kt)("li",{parentName:"ol"},'"context" (dict): the context of the message, which will be passed to\n',(0,l.kt)("a",{parentName:"li",href:"../oai/Completion#create"},"autogen.Completion.create"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sender")," - sender of an Agent instance.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueError")," - if the message can't be converted into a valid ChatCompletion message.")),(0,l.kt)("h4",{id:"initiate_chat"},"initiate","_","chat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def initiate_chat(recipient: "ResponsiveAgent", clear_history: Optional[bool] = True, **context)\n')),(0,l.kt)("p",null,"Initiate a chat with the recipient agent."),(0,l.kt)("p",null,"Reset the consecutive auto reply counter.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"clear_history")," is True, the chat history with the recipient agent will be cleared.\n",(0,l.kt)("inlineCode",{parentName:"p"},"generate_init_message")," is called to generate the initial message for the agent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recipient")," - the recipient agent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clear_history")," ",(0,l.kt)("em",{parentName:"li"},"bool")," - whether to clear the chat history with the agent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"**context"),' - any context information.\n"message" needs to be provided if the ',(0,l.kt)("inlineCode",{parentName:"li"},"generate_init_message")," method is not overridden.")),(0,l.kt)("h4",{id:"reset"},"reset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def reset()\n")),(0,l.kt)("p",null,"Reset the agent."),(0,l.kt)("h4",{id:"reset_consecutive_auto_reply_counter"},"reset","_","consecutive","_","auto","_","reply","_","counter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def reset_consecutive_auto_reply_counter(sender: Optional[Agent] = None)\n")),(0,l.kt)("p",null,"Reset the consecutive_auto_reply_counter of the sender."),(0,l.kt)("h4",{id:"clear_history"},"clear","_","history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def clear_history(agent: Optional[Agent] = None)\n")),(0,l.kt)("p",null,"Clear the chat history of the agent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"agent")," - the agent with whom the chat history to clear. If None, clear the chat history with all agents.")),(0,l.kt)("h4",{id:"generate_reply"},"generate","_","reply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def generate_reply(messages: Optional[List[Dict]] = None, default_reply: Optional[Union[str, Dict]] = "", sender: Optional[Agent] = None, class_specific_reply: Optional[bool] = True) -> Union[str, Dict, None]\n')),(0,l.kt)("p",null,"Reply based on the conversation history."),(0,l.kt)("p",null,"First, execute function or code and return the result.\nAI replies are generated only when no code execution is performed.\nSubclasses can override this method to customize the reply.\nEither messages or sender must be provided."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"messages")," - a list of messages in the conversation history."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_reply")," ",(0,l.kt)("em",{parentName:"li"},"str or dict")," - default reply."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sender")," - sender of an Agent instance.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  str or dict or None: reply. None if no reply is generated."),(0,l.kt)("h4",{id:"get_human_input"},"get","_","human","_","input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_human_input(prompt: str) -> str\n")),(0,l.kt)("p",null,"Get human input."),(0,l.kt)("p",null,"Override this method to customize the way to get human input."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prompt")," ",(0,l.kt)("em",{parentName:"li"},"str")," - prompt for the human input.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," - human input.")),(0,l.kt)("h4",{id:"run_code"},"run","_","code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def run_code(code, **kwargs)\n")),(0,l.kt)("p",null,"Run the code and return the result."),(0,l.kt)("p",null,"Override this function to modify the way to run the code."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"code")," ",(0,l.kt)("em",{parentName:"li"},"str")," - the code to be executed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"**kwargs")," - other keyword arguments.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  A tuple of (exitcode, logs, image)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exitcode")," ",(0,l.kt)("em",{parentName:"li"},"int")," - the exit code of the code execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logs")," ",(0,l.kt)("em",{parentName:"li"},"str")," - the logs of the code execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"image")," ",(0,l.kt)("em",{parentName:"li"},"str or None")," - the docker image used for the code execution.")),(0,l.kt)("h4",{id:"execute_code_blocks"},"execute","_","code","_","blocks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def execute_code_blocks(code_blocks)\n")),(0,l.kt)("p",null,"Execute the code blocks and return the result."),(0,l.kt)("h4",{id:"execute_function"},"execute","_","function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def execute_function(func_call)\n")),(0,l.kt)("p",null,"Execute a function call and return the result."),(0,l.kt)("p",null,"Override this function to modify the way to execute a function call."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"func_call"),' - a dictionary extracted from openai message at key "function_call" with keys "name" and "arguments".')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  A tuple of (is_exec_success, result_dict)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_exec_success")," ",(0,l.kt)("em",{parentName:"li"},"boolean")," - whether the execution is successful."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_dict"),' - a dictionary with keys "name", "role", and "content". Value of "role" is "function".')),(0,l.kt)("h4",{id:"generate_init_message"},"generate","_","init","_","message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_init_message(**context) -> Union[str, Dict]\n")),(0,l.kt)("p",null,"Generate the initial message for the agent."),(0,l.kt)("p",null,'Override this function to customize the initial message based on user\'s request.\nIf not overriden, "message" needs to be provided in the context.'),(0,l.kt)("h4",{id:"register_function"},"register","_","function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def register_function(function_map: Dict[str, Callable])\n")),(0,l.kt)("p",null,"Register functions to the agent."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function_map")," - a dictionary mapping function names to functions.")))}c.isMDXComponent=!0}}]);
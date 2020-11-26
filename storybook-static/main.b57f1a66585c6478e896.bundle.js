(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var _Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(26),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(172);__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_2__.a,title:"Task"};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.a,args)},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters)},1266:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(62),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1267);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1267:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1268);var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1268:function(module,exports,__webpack_require__){},1269:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(431).configure)([__webpack_require__(1270)],module,!1)}).call(this,__webpack_require__(111)(module))},1270:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":1275,"./Task.stories.js":103,"./TaskList.stories.js":349};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1270},1275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));var objectSpread2=__webpack_require__(26),react=__webpack_require__(0),react_default=__webpack_require__.n(react),es=__webpack_require__(140),dist=__webpack_require__(228),TaskList=__webpack_require__(174);function PureInboxScreen(_ref){return _ref.error?react_default.a.createElement("div",{className:"page lists-show"},react_default.a.createElement("div",{className:"wrapper-message"},react_default.a.createElement("span",{className:"icon-face-sad"}),react_default.a.createElement("div",{className:"title-message"},"Oh no!"),react_default.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):react_default.a.createElement("div",{className:"page lists-show"},react_default.a.createElement("nav",null,react_default.a.createElement("h1",{className:"title-page"},react_default.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),react_default.a.createElement(TaskList.b,null))}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"The error message"}}};Object(es.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"});var TaskList_stories=__webpack_require__(349),store={getState:function getState(){return{tasks:TaskList_stories.Default.args.tasks}},subscribe:function subscribe(){return 0},dispatch:Object(dist.action)("dispatch")},InboxScreen_stories_Template=(__webpack_exports__.default={component:PureInboxScreen,decorators:[function(story){return react_default.a.createElement(es.a,{store:store},story())}],title:"InboxScreen"},function Template(args){return react_default.a.createElement(PureInboxScreen,args)}),Default=InboxScreen_stories_Template.bind({}),Error=InboxScreen_stories_Template.bind({});Error.args={error:"Something"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureInboxScreen {...args} />"}},Default.parameters),Error.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureInboxScreen {...args} />"}},Error.parameters)},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},174:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList}));var toConsumableArray=__webpack_require__(173),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Task=__webpack_require__(172),es=__webpack_require__(140),objectSpread2=__webpack_require__(26),redux=__webpack_require__(232),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{tasks:state.tasks.map((function(task){return task.id===action.id?Object(objectSpread2.a)(Object(objectSpread2.a)({},task),{},{state:taskState}):task}))})}}Object(redux.b)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=react_default.a.createElement("div",{className:"loading-item"},react_default.a.createElement("span",{className:"glow-checkbox"}),react_default.a.createElement("span",{className:"glow-text"},react_default.a.createElement("span",null,"Loading")," ",react_default.a.createElement("span",null,"cool")," ",react_default.a.createElement("span",null,"state")));if(loading)return react_default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react_default.a.createElement("div",{className:"list-items"},react_default.a.createElement("div",{className:"wrapper-message"},react_default.a.createElement("span",{className:"icon-check"}),react_default.a.createElement("div",{className:"title-message"},"You have no tasks"),react_default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return react_default.a.createElement("div",{className:"list-items"},tasksInOrder.map((function(task){return react_default.a.createElement(Task.a,Object.assign({key:task.id,task:task},events))})))}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if its in loading state"},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:"The list of tasks"},onPinTask:{type:{name:"func"},required:!0,description:"Event to change the task to pinned"},onArchiveTask:{type:{name:"func"},required:!0,description:"Event to change the task to archived"}}};__webpack_exports__.b=Object(es.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"})},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var _Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(173),_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_TaskList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(174),_Task_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(103);__webpack_exports__.default={component:_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,title:"TaskList",decorators:[function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())}]};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,args)},Default=Template.bind({});Default.args={tasks:[Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"1",title:"Task 1"}),Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"2",title:"Task 2"}),Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"3",title:"Task 3"}),Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"4",title:"Task 4"}),Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"5",title:"Task 5"}),Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=Template.bind({});Empty.args=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},Loading.args),{},{loading:!1}),Default.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"args => <PureTaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(_Users_jmelul_Code_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Empty.parameters)},550:function(module,exports,__webpack_require__){__webpack_require__(551),__webpack_require__(833),__webpack_require__(834),__webpack_require__(990),__webpack_require__(1208),__webpack_require__(1240),__webpack_require__(1245),__webpack_require__(1257),__webpack_require__(1259),__webpack_require__(1264),__webpack_require__(1266),module.exports=__webpack_require__(1269)},626:function(module,exports){},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(431)}},[[550,1,2]]]);
//# sourceMappingURL=main.b57f1a66585c6478e896.bundle.js.map
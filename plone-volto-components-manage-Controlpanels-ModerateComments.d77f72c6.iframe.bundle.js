"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[9540],{"./src/components/manage/Controlpanels/ModerateComments.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_intl__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/@formatjs+macro@0.2.8/node_modules/@formatjs/macro/dist/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.8.0_react@18.2.0/node_modules/react-intl/lib/components/message.js"),react_intl__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.8.0_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/actions/index.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/index.js"),_plone_volto_components_theme_Comments__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/theme/Comments/index.tsx"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_8__.O)({back:{id:"Back",defaultMessage:"Back"},ModerateComments:{id:"Moderate comments",defaultMessage:"Moderate comments"}});class ModerateComments extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onDelete=this.onDelete.bind(this),this.onEdit=this.onEdit.bind(this),this.onEditOk=this.onEditOk.bind(this),this.onEditCancel=this.onEditCancel.bind(this),this.state={showEdit:!1,editId:null,editText:null,isClient:!1}}componentDidMount(){this.props.searchContent("",{portal_type:"Discussion Item",fullobjects:!0}),this.setState({isClient:!0})}UNSAFE_componentWillReceiveProps(nextProps){this.props.deleteRequest.loading&&nextProps.deleteRequest.loaded&&this.props.searchContent("",{portal_type:"Discussion Item",fullobjects:!0})}onDelete(event,{value:value}){this.props.deleteComment(value)}onEdit(event,{value:value}){this.setState({showEdit:!0,editId:value.id,editText:value.text})}onEditOk(){this.setState({showEdit:!1,editId:null,editText:null}),this.props.searchContent("",{portal_type:"Discussion Item",fullobjects:!0})}onEditCancel(){this.setState({showEdit:!1,editId:null,editText:null})}onCancel(){this.props.history.push((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__.yn)(this.props.pathname))}render(){return __jsx("div",{id:"page-moderate-comments"},__jsx(_plone_volto_components_theme_Comments__WEBPACK_IMPORTED_MODULE_6__.W,{open:this.state.showEdit,onCancel:this.onEditCancel,onOk:this.onEditOk,id:this.state.editId,text:this.state.editText}),__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__.So,{title:this.props.intl.formatMessage(messages.ModerateComments)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.c,null,__jsx("article",{id:"content"},__jsx("header",null,__jsx("h1",{className:"documentFirstHeading"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Moderate comments",defaultMessage:"Moderate comments"}))),__jsx("section",{id:"content-core"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c,{compact:!0,singleLine:!0,striped:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Header,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Commenter",defaultMessage:"Commenter"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Date",defaultMessage:"Date"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Comment",defaultMessage:"Comment"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Action",defaultMessage:"Action"})))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Body,null,this.props.items.map((item=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Row,{key:item["@id"]},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Cell,null,item.author_name),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Cell,null,__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.c3f,{date:item.creation_date})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Cell,null,item.text.data),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c.Cell,null,item.is_editable&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,{onClick:this.onEdit,value:{id:item["@id"],text:item.text.data},primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Edit",defaultMessage:"Edit"})),item.is_deletable&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,{onClick:this.onDelete,value:item["@id"],color:"red"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.c,{id:"Delete",defaultMessage:"Delete"}))))))))))),this.state.isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.YT3,{pathname:this.props.pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.cH,{className:"item",to:"#",onClick:()=>this.onCancel()},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"30px",title:this.props.intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))}}__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_14__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_15__.cp,(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(((state,props)=>({items:state.search.items,deleteRequest:state.comments.delete,pathname:props.location.pathname})),{deleteComment:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.iN,searchContent:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.uU}))(ModerateComments),ModerateComments.__docgenInfo={description:"ModerateCommentsComponent class.\n@class ModerateComments\n@extends Component",methods:[{name:"onDelete",docblock:"Delete handler\n@method onDelete\n@param {Object} event Event object.\n@param {string} value Delete value.\n@returns {undefined}",modifiers:[],params:[{name:"event",description:"Event object.",type:{name:"Object"},optional:!1},{name:"{ value }",optional:!1}],returns:{},description:"Delete handler"},{name:"onEdit",docblock:"Edit handler\n@method onEdit\n@param {Object} event Event object.\n@param {string} value Delete value.\n@returns {undefined}",modifiers:[],params:[{name:"event",description:"Event object.",type:{name:"Object"},optional:!1},{name:"{ value }",optional:!1}],returns:{},description:"Edit handler"},{name:"onEditOk",docblock:"On edit ok\n@method onEditOk\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"On edit ok"},{name:"onEditCancel",docblock:"On edit cancel\n@method onEditCancel\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"On edit cancel"},{name:"onCancel",docblock:"Back/Cancel handler\n@method onCancel\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Back/Cancel handler"}],displayName:"ModerateComments",props:{searchContent:{description:"",type:{name:"func"},required:!0},deleteComment:{description:"",type:{name:"func"},required:!0},items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{"@id":{name:"string",required:!1},author_name:{name:"string",required:!1},creation_date:{name:"string",required:!1},text:{name:"shape",value:{data:{name:"string",required:!1}},required:!1},is_deletable:{name:"bool",required:!1},is_editable:{name:"bool",required:!1}}}},required:!0},deleteRequest:{description:"",type:{name:"shape",value:{loading:{name:"bool",required:!1},loaded:{name:"bool",required:!1}}},required:!0},pathname:{description:"",type:{name:"string"},required:!0}}}}}]);
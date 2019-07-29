/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/javascripts/interactive/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/javascripts/interactive/index.js":
/*!*****************************************************!*\
  !*** ./src/public/javascripts/interactive/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _data = {\n  id: ym.init.COMPILESTR.decrypt(all.json.id),\n  token: ym.init.COMPILESTR.decrypt(all.json.asset),\n  url: '/manage/systemUserList.html'\n};\nnew Vue({\n  el: '#c-container-body',\n  data: function data() {\n    return {\n      loading: false,\n      imageShow: false,\n      UpdateVisible: false,\n      DataVisible: {\n        realName: '',\n        adminMobile: '',\n        state: ''\n      },\n      adminName: ym.init.COMPILESTR.decrypt(JSON.parse(sessionStorage.getItem('_a'))._i)\n    };\n  },\n  created: function created() {\n    $('body').on('click', '.template-skins > a', function (e) {\n      e.preventDefault();\n      var skin = $(this).data('skin');\n      $('body').attr('id', skin);\n      localStorage.setItem(\"skin\", JSON.stringify({\n        skin: skin\n      }));\n    }); //if body not bg\n\n    if (JSON.parse(localStorage.getItem(\"skin\"))) {\n      $('body').attr('id', JSON.parse(localStorage.getItem(\"skin\")).skin);\n    }\n\n    ;\n    localStorage.getItem('uri') ? JSON.parse(\"[\" + localStorage.getItem('uri') + \"]\").forEach(function (els, index) {\n      console.log('Testing：\\n\\n' + JSON.stringify(els.uri.split('?')[1]));\n    }) : null;\n\n    if (!sessionStorage.getItem('token')) {\n      this.$message.error('登陆已失效');\n      setTimeout(function () {\n        location.href = '../../login.htm?hash:err(o012)';\n      }, 1000);\n    }\n\n    ; //tag 权限列表\n\n    var tag = JSON.parse(sessionStorage.getItem('tag')),\n        _tag = '',\n        icons = ['el-icon-s-cooperation', 'el-icon-s-order', 'el-icon-video-camera-solid', 'el-icon-s-data', 'el-icon-user-solid', 'el-icon-s-finance', 'el-icon-s-grid', 'el-icon-s-tools', 'el-icon-s-unfold'],\n        _lists = {\n      _admin: ['tables', 'u_Journal'],\n      _system: ['formulaList', 'productList', 'detailedList', 'equipmentList', 'equipmentLongUpdate', 'smallLocationConfig', 'machineAmap', 'machineLog', 'advertisementRootList', 'adRootDetailedList', 'chartsUser', 'chartsFinance', 'chartsActive', 'systemUserList', 'systemUserLvList', 'feedbackList', // 'systemUserLvSearch',\n      'couponList', 'orderList', 'refundOrder', 'orderEverDayList', 'financialManagement', 'RepairPersonnelList', 'materialLog'],\n      _shop: ['RepairPersonnelList', 'equipmentList', 'machineAmap', 'chartsFinance', 'orderList', 'orderEverDayList']\n    },\n        num = 0;\n\n    for (var i = 0; i < tag.length - 1; i++) {\n      _tag += \"<el-submenu index=\\\"\".concat(i + 1, \"\\\">\\n                        <template slot=\\\"title\\\">\\n                            <i class=\\\"\").concat(icons[i], \"\\\"></i>\\n                            <span>\").concat(tag[i].permissionName, \"</span>\\n                        </template>\\n                        <el-menu-item-group>\");\n\n      for (var j = 0; j < tag[i].pageInfoList.length; j++) {\n        // _tag += `<el-menu-item @click=Href({'uri':'${tag[i].pageInfoList[j].pageUrl}','title':'${tag[i].pageInfoList[j].pageName}'}) index=\"${i + 1}-${j}\">${tag[i].pageInfoList[j].pageName}</el-menu-item>`;\n        switch (tag.length) {\n          //启用本地路由\n          case 9:\n            _tag += \"<el-menu-item u=\\\"\".concat(_lists._system[num], \"\\\" v-on:click=Href({'uri':'../\").concat(_lists._system[num], \".html?hash:iforx\").concat(parseInt(13 * num / j + 2), \"','title':'\").concat(tag[i].pageInfoList[j].pageName, \"'}) index=\\\"\").concat(i + 1, \"-\").concat(j, \"\\\">\").concat(tag[i].pageInfoList[j].pageName, \"</el-menu-item>\");\n            break;\n\n          case 3:\n            _tag += \"<el-menu-item v-on:click=Href({'uri':'../\".concat(_lists._admin[num], \".html?hash:iforx\").concat(parseInt(13 * num / j + 2), \"','title':'\").concat(tag[i].pageInfoList[j].pageName, \"'}) index=\\\"\").concat(i + 1, \"-\").concat(j, \"\\\">\").concat(tag[i].pageInfoList[j].pageName, \"</el-menu-item>\");\n            break;\n\n          default:\n            _tag += \"<el-menu-item v-on:click=Href({'uri':'../\".concat(_lists._shop[num], \".html?hash:iforx\").concat(parseInt(13 * num / j + 2), \"','title':'\").concat(tag[i].pageInfoList[j].pageName, \"'}) index=\\\"\").concat(i + 1, \"-\").concat(j, \"\\\">\").concat(tag[i].pageInfoList[j].pageName, \"</el-menu-item>\");\n            break;\n        }\n\n        ;\n        num++;\n      }\n\n      ;\n      _tag += \"</el-menu-item-group>\\n                </el-submenu>\";\n    }\n\n    ;\n    jQuery('.menu').html(_tag);\n  },\n  methods: {\n    Error: function Error(err) {\n      this.$message.error('错了哦，' + err);\n    },\n    IsuccessFull: function IsuccessFull(e) {\n      this.$message({\n        message: '成功了哦!,' + e,\n        type: 'success'\n      });\n    },\n    Href: function Href(e) {\n      jQuery('#tagHref').attr('src', e.uri);\n      var c = [],\n          local = JSON.parse('[' + localStorage.getItem('uri') + ']');\n\n      if (localStorage.getItem('uri')) {\n        for (var i = 0; i < local.length; i++) {\n          if (local[i].uri == e.uri) {\n            c.push(localStorage.getItem('uri'));\n            tag();\n            return c;\n          }\n        }\n\n        c.push(localStorage.getItem('uri'));\n        c.push(JSON.stringify({\n          uri: e.uri,\n          title: e.title\n        }));\n        localStorage.setItem('uri', c);\n      } else {\n        localStorage.setItem('uri', JSON.stringify({\n          uri: e.uri,\n          title: e.title\n        }));\n      }\n\n      jQuery('#tagMenu ul').append( //关闭按钮\n      \"<li data-href=\\\"\".concat(e.uri, \"\\\" class=\\\"tag_40b8ff\\\">\").concat(e.title, \"<i data-click=\\\"\").concat(e.uri, \"\\\"><svg class=\\\"icon icon_clone\\\" aria-hidden=\\\"true\\\">\\n                <use xlink:href=\\\"#ym-icon-guanbi\\\"></use>\\n            </svg></i></li>\"));\n      tag();\n    },\n    querySearchAsync: function querySearchAsync(queryString, cb) {\n      //动态查询用户\n      var it = this;\n      _data['type'] = 1;\n      _data['name'] = queryString || '拉';\n      ym.init.XML({\n        method: 'POST',\n        uri: all.json._j.URLS.Development_Server_ + 'find_user_for_bind',\n        //查询绑定关系\n        async: false,\n        xmldata: _data,\n        done: function done(res) {\n          var _arr = [];\n          res.list.forEach(function (e) {\n            _arr.push({\n              value: e.nickName,\n              _id: e.userId\n            });\n          });\n          it.UnFormData = res.list; //用户批量操作\n\n          var results = queryString ? _arr.filter(it.createStateFilter(queryString)) : _arr;\n          clearTimeout(it.timeout);\n          it.timeout = setTimeout(function () {\n            cb(results);\n          }, 3000 * Math.random());\n        }\n      });\n    },\n    createStateFilter: function createStateFilter(queryString) {\n      //\n      return function (state) {\n        return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;\n      };\n    },\n    handleSelect: function handleSelect(item) {\n      //取得选择的用户ID\n      this.DataVisible.userId = item._id;\n    },\n    submit: function submit(_event) {\n      var it = this;\n\n      if (_event.en == 'post') {\n        _data['adminMobile'] = _event.DataVisible.adminMobile || '';\n        _data['adminPwd'] = _event.DataVisible.adminPwd || '';\n        _data['oldPwd'] = _event.DataVisible.oldPwd || '';\n        _data['realName'] = _event.DataVisible.realName || '';\n        _data['userId'] = it.DataVisible.userId;\n        _data['type'] = 2;\n      } else {\n        _data['type'] = 1;\n      }\n\n      _data['url'] = '/manage/information.html';\n      ym.init.XML({\n        method: 'POST',\n        uri: all.json._j.URLS.Development_Server_ + 'edit_information',\n        //查询绑定关系\n        async: false,\n        xmldata: _data,\n        done: function done(res) {\n          if (_event.en == 'pull') {\n            it.DataVisible.adminMobile = res.adminUser.adminMobile;\n            it.DataVisible.realName = res.adminUser.realName;\n            it.DataVisible.userId = res.adminUser.userId;\n            it.DataVisible.state = res.adminUser.nickName;\n          } else {\n            var i = 4,\n                delay = 1000;\n            setInterval(function () {\n              i--;\n              it.IsuccessFull(res.statusCode.msg + \"\".concat(i, \"s \\u540E\\u81EA\\u52A8\\u8DF3\\u8F6C\\u5230\\u767B\\u9646\\u9875\\u9762\"));\n\n              if (i < 1) {\n                window.location.href = \"../../login.htm?:hash(-kill-1)\";\n              }\n            }, delay);\n            it.UpdateVisible = false;\n          }\n        }\n      });\n    }\n  }\n});\n\n(function () {\n  //初始化检查是否存在缓存页面\n  var local = JSON.parse(\"[\" + localStorage.getItem('uri') + \"]\"),\n      _href = document.getElementById('tagHref');\n\n  for (var i = 0; i < local.length; i++) {\n    //渲染tag栏\n    $('#tagList').append(\"<li data-href=\\\"\".concat(local[0] != null ? local[i].uri : '../index.htm?hash:ix', \"\\\" class=\\\"tag_40b8ff\\\">\").concat(local[0] != null ? local[i].title : \"首页\", \"<i data-click=\\\"\").concat(local[0] != null ? local[i].uri : '../index.htm?hash:ix', \"\\\"><svg class=\\\"icon icon_clone\\\" aria-hidden=\\\"true\\\">\\n            <use xlink:href=\\\"#ym-icon-guanbi\\\"></use>\\n        </svg></i></li>\"));\n\n    if (local.length < 1) {\n      _href.setAttribute('src', local[0] != null ? local[i].uri : '../index.htm?hash:ix'); //默认最后一个页面内容\n\n\n      localStorage.getItem('uri') ? null : localStorage.setItem('uri', JSON.stringify({\n        uri: '../index.htm?hash:ix',\n        title: '首页'\n      }));\n    }\n  }\n\n  tag();\n})();\n\nfunction tag() {\n  jQuery('#tagMenu').show();\n\n  var _tag = document.getElementById('tagMenu'),\n      _href = document.getElementById('tagHref');\n\n  try {\n    var _loop = function _loop(i) {\n      if (_tag.childNodes[0].childNodes[i].getAttribute('data-href') == _href.getAttribute('src')) {\n        //显示当前页面的时候tag 的颜色变化\n        _tag.childNodes[0].childNodes[i].setAttribute('class', 'tag_40b8ff');\n      } else {\n        _tag.childNodes[0].childNodes[i].setAttribute('class', '');\n      }\n\n      if (!_tag.childNodes[0].childNodes[i].firstElementChild) {\n        //是否存在 del 标签\n        car = document.createElement('i');\n        car.setAttribute('data-click', _tag.childNodes[0].childNodes[i].getAttribute('data-href'));\n        car.innerHTML = \"<svg class=\\\"icon icon_clone\\\" aria-hidden=\\\"true\\\">\\n                                    <use xlink:href=\\\"#ym-icon-guanbi\\\"></use>\\n                                </svg>\";\n\n        _tag.childNodes[0].childNodes[i].appendChild(car); //执行添加del 标签节点\n\n      }\n\n      _tag.childNodes[0].childNodes[i].childNodes[1].onclick = function (e) {\n        var _this = this;\n\n        //del 标签执行方法\n        var arr = [];\n        JSON.parse(\"[\" + localStorage.getItem('uri') + \"]\").forEach(function (els, index) {\n          //删除某些页面\n          if (els.uri != _this.getAttribute('data-click')) {\n            //清除已存地址\n            arr.push(JSON.stringify(els)); //更新数组 重新编码\n\n            localStorage.setItem('uri', arr); //覆盖\n          }\n\n          ;\n        });\n\n        _tag.childNodes[0].removeChild(_tag.childNodes[0].childNodes[i]); // 清除tag节点\n\n\n        if (_tag.childNodes[0].childNodes.length == 0) {\n          //当前tag 标签只剩一个\n          _href.setAttribute('src', '../index.htm?hash:io');\n\n          localStorage.removeItem('uri'); //清除缓存uri\n\n          jQuery('#tagMenu').hide();\n        } else {\n          _tag.childNodes[0].childNodes[_tag.childNodes.length - 1].setAttribute('class', 'tag_40b8ff'); //执行当前长度 -1 的颜色变换\n\n\n          _href.setAttribute('src', _tag.childNodes[0].childNodes[_tag.childNodes.length - 1].childNodes[1].getAttribute('data-click')); //更改属性\n\n        }\n\n        tag(); //删除后重新初始化tag 方法\n\n        e.stopPropagation(); //阻止事件冒泡\n      };\n\n      _tag.childNodes[0].childNodes[i].onclick = function (e) {\n        //tag 点击\n        var uri = _tag.childNodes[0].childNodes[i].getAttribute('data-href');\n\n        _href.setAttribute('src', uri); //页面uri更改\n\n\n        _tag.childNodes[0].childNodes.forEach(function (element) {\n          element.setAttribute('class', ''); // 兄弟节点切换颜色\n        });\n\n        this.setAttribute('class', 'tag_40b8ff'); //当前改变颜色\n\n        e.stopPropagation(); //阻止事件冒泡\n      };\n    };\n\n    for (var i = 0; i < _tag.childNodes[0].childNodes.length; i++) {\n      var car;\n\n      _loop(i);\n    }\n\n    ;\n    $('#tagList li').hover(function () {\n      jQuery(this).children('i').show(100);\n    }, function () {\n      jQuery(this).children('i').hide(100);\n    });\n  } catch (error) {\n    alert(error);\n  }\n}\n\n//# sourceURL=webpack:///./src/public/javascripts/interactive/index.js?");

/***/ })

/******/ });
define('docs/renderers/Form/Picker.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"picker\" href=\"#picker\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Picker</h2><p>列表选取。可以静态数据，或者通过接口拉取动态数据。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>picker</code></li>\n<li><code>multiple</code> 是否为多选。</li>\n<li><code>options</code> 选项配置，类型为数组，成员格式如下。<ul>\n<li><code>label</code> 文字</li>\n<li><code>value</code> 值</li>\n</ul>\n</li>\n<li><code>source</code> Api 地址，如果选项不固定，可以通过配置 <code>source</code> 动态拉取。 另外也可以用 <code>$xxxx</code> 来获取当前作用域中的变量。</li>\n<li><code>joinValues</code> 默认为 <code>true</code></li>\n<li>单选模式：当用户选中某个选项时，选项中的 value 将被作为该表单项的值提交，否则，整个选项对象都会作为该表单项的值提交。</li>\n<li>多选模式：选中的多个选项的 <code>value</code> 会通过 <code>delimiter</code> 连接起来，否则直接将以数组的形式提交值。</li>\n<li><code>extractValue</code> 默认为 <code>false</code>, <code>joinValues</code>设置为<code>false</code>时生效, 开启后将选中的选项 value 的值封装为数组，作为当前表单项的值。</li>\n<li><code>delimiter</code> 默认为 <code>,</code></li>\n<li><code>modalMode</code> 设置 <code>dialog</code> 或者 <code>drawer</code>，用来配置弹出方式。</li>\n<li><code>pickerSchema</code> 默认为 <code>{mode: &#39;list&#39;, listItem: {title: &#39;${label}&#39;}}</code>, 即用 List 类型的渲染，来展示列表信息。更多的玩法请参考 <a href=\"#/docs/renderers/CRUD\">CRUD</a> 的配置。</li>\n<li>更多配置请参考 <a href=\"#/docs/renderers/Form/FormItem\">FormItem</a></li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\" scope=\"form-item\">{\n  \"type\": \"picker\",\n  \"name\": \"type4\",\n  \"joinValues\": true,\n  \"valueField\": \"id\",\n  \"labelField\": \"engine\",\n  \"label\": \"多选\",\n  \"source\": \"https://houtai.baidu.com/api/sample\",\n  \"size\": \"lg\",\n  \"value\": \"4,5\",\n  \"multiple\": true,\n  \"pickerSchema\": {\n    \"mode\": \"table\",\n    \"name\": \"thelist\",\n    \"quickSaveApi\": \"https://houtai.baidu.com/api/sample/bulkUpdate\",\n    \"quickSaveItemApi\": \"https://houtai.baidu.com/api/sample/$id\",\n    \"draggable\": true,\n    \"headerToolbar\": {\n      \"wrapWithPanel\": false,\n      \"type\": \"form\",\n      \"className\": \"text-right\",\n      \"target\": \"thelist\",\n      \"mode\": \"inline\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"keywords\",\n          \"addOn\": {\n            \"type\": \"submit\",\n            \"label\": \"搜索\",\n            \"level\": \"primary\",\n            \"icon\": \"fa fa-search pull-left\"\n          }\n        }\n      ]\n    },\n    \"columns\": [\n      {\n        \"name\": \"engine\",\n        \"label\": \"Rendering engine\",\n        \"sortable\": true,\n        \"searchable\": true,\n        \"type\": \"text\",\n        \"toggled\": true\n      },\n      {\n        \"name\": \"browser\",\n        \"label\": \"Browser\",\n        \"sortable\": true,\n        \"type\": \"text\",\n        \"toggled\": true\n      },\n      {\n        \"name\": \"platform\",\n        \"label\": \"Platform(s)\",\n        \"sortable\": true,\n        \"type\": \"text\",\n        \"toggled\": true\n      },\n      {\n        \"name\": \"version\",\n        \"label\": \"Engine version\",\n        \"quickEdit\": true,\n        \"type\": \"text\",\n        \"toggled\": true\n      },\n      {\n        \"name\": \"grade\",\n        \"label\": \"CSS grade\",\n        \"quickEdit\": {\n          \"mode\": \"inline\",\n          \"type\": \"select\",\n          \"options\": [\n            \"A\",\n            \"B\",\n            \"C\",\n            \"D\",\n            \"X\"\n          ],\n          \"saveImmediately\": true\n        },\n        \"type\": \"text\",\n        \"toggled\": true\n      },\n      {\n        \"type\": \"operation\",\n        \"label\": \"操作\",\n        \"width\": 100,\n        \"buttons\": [\n          {\n            \"type\": \"button\",\n            \"icon\": \"fa fa-eye\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n              \"title\": \"查看\",\n              \"body\": {\n                \"type\": \"form\",\n                \"controls\": [\n                  {\n                    \"type\": \"static\",\n                    \"name\": \"engine\",\n                    \"label\": \"Engine\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"static\",\n                    \"name\": \"browser\",\n                    \"label\": \"Browser\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"static\",\n                    \"name\": \"platform\",\n                    \"label\": \"Platform(s)\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"static\",\n                    \"name\": \"version\",\n                    \"label\": \"Engine version\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"static\",\n                    \"name\": \"grade\",\n                    \"label\": \"CSS grade\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"html\",\n                    \"html\": \"<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>\"\n                  }\n                ]\n              }\n            }\n          },\n          {\n            \"type\": \"button\",\n            \"icon\": \"fa fa-pencil\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n              \"position\": \"left\",\n              \"size\": \"lg\",\n              \"title\": \"编辑\",\n              \"body\": {\n                \"type\": \"form\",\n                \"name\": \"sample-edit-form\",\n                \"api\": \"https://houtai.baidu.com/api/sample/$id\",\n                \"controls\": [\n                  {\n                    \"type\": \"text\",\n                    \"name\": \"engine\",\n                    \"label\": \"Engine\",\n                    \"required\": true\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"text\",\n                    \"name\": \"browser\",\n                    \"label\": \"Browser\",\n                    \"required\": true\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"text\",\n                    \"name\": \"platform\",\n                    \"label\": \"Platform(s)\",\n                    \"required\": true\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"text\",\n                    \"name\": \"version\",\n                    \"label\": \"Engine version\"\n                  },\n                  {\n                    \"type\": \"divider\"\n                  },\n                  {\n                    \"type\": \"select\",\n                    \"name\": \"grade\",\n                    \"label\": \"CSS grade\",\n                    \"options\": [\n                      \"A\",\n                      \"B\",\n                      \"C\",\n                      \"D\",\n                      \"X\"\n                    ]\n                  }\n                ]\n              }\n            }\n          },\n          {\n            \"type\": \"button\",\n            \"icon\": \"fa fa-times text-danger\",\n            \"actionType\": \"ajax\",\n            \"confirmText\": \"您确认要删除?\",\n            \"api\": \"delete:https://houtai.baidu.com/api/sample/$id\"\n          }\n        ],\n        \"toggled\": true\n      }\n    ]\n  }\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Picker",
          "fragment": "picker",
          "fullPath": "#picker",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});

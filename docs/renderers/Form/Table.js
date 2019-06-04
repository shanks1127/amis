define('docs/renderers/Form/Table.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"table-formitem-\" href=\"#table-formitem-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Table(FormItem)</h2><p>可以用来展现数据的,可以用来展示数组类型的数据，比如 multiple 的<a href=\"#/docs/renderers/Form/SubForm\">子 form</a>。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>table</code></li>\n<li><code>columns</code> 数组类型，用来定义列信息。</li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 450px\"><script type=\"text/schema\" height=\"450\" scope=\"form\">[\n    {\n    \"type\": \"form\",\n    \"name\": \"form\",\n    \"label\": \"子Form\",\n    \"btnLabel\": \"设置子表单\",\n    \"multiple\": true,\n    \"form\": {\n      \"title\": \"配置子表单\",\n      \"controls\": [\n        {\n          \"name\": \"a\",\n          \"label\": \"A\",\n          \"type\": \"text\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\",\n          \"type\": \"text\"\n        }\n      ]\n    }\n  },\n  {\n    \"type\":\"table\",\n    \"name\":\"form\",\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\"\n        }\n    ]\n  }\n]\n</script></div>\n<p>当然也可以用来作为表单输入。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;table&quot;</code></td>\n<td>指定为 Table 渲染器</td>\n</tr>\n<tr>\n<td>addable</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否可增加一行</td>\n</tr>\n<tr>\n<td>editable</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否可编辑</td>\n</tr>\n<tr>\n<td>removable</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否可删除</td>\n</tr>\n<tr>\n<td>showAddBtn</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否显示添加按钮</td>\n</tr>\n<tr>\n<td>addApi</td>\n<td><a href=\"#/docs/renderers/Types#Api\">api</a></td>\n<td>-</td>\n<td>新增时提交的 API</td>\n</tr>\n<tr>\n<td>updateApi</td>\n<td><a href=\"#/docs/renderers/Types#Api\">api</a></td>\n<td>-</td>\n<td>修改时提交的 API</td>\n</tr>\n<tr>\n<td>deleteApi</td>\n<td><a href=\"#/docs/renderers/Types#Api\">api</a></td>\n<td>-</td>\n<td>删除时提交的 API</td>\n</tr>\n<tr>\n<td>addBtnLabel</td>\n<td><code>string</code></td>\n<td></td>\n<td>增加按钮名称</td>\n</tr>\n<tr>\n<td>addBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;fa fa-plus&quot;</code></td>\n<td>增加按钮图标</td>\n</tr>\n<tr>\n<td>updateBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>更新按钮名称</td>\n</tr>\n<tr>\n<td>updateBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;fa fa-pencil&quot;</code></td>\n<td>更新按钮图标</td>\n</tr>\n<tr>\n<td>deleteBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>删除按钮名称</td>\n</tr>\n<tr>\n<td>deleteBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;fa fa-minus&quot;</code></td>\n<td>删除按钮图标</td>\n</tr>\n<tr>\n<td>confirmBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>确认编辑按钮名称</td>\n</tr>\n<tr>\n<td>confirmBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;fa fa-check&quot;</code></td>\n<td>确认编辑按钮图标</td>\n</tr>\n<tr>\n<td>cancelBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>取消编辑按钮名称</td>\n</tr>\n<tr>\n<td>cancelBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;fa fa-times&quot;</code></td>\n<td>取消编辑按钮图标</td>\n</tr>\n<tr>\n<td>columns</td>\n<td><code>array</code></td>\n<td>[]</td>\n<td>列信息</td>\n</tr>\n<tr>\n<td>columns[x].quickEdit</td>\n<td><code>boolean</code> 或者 <code>object</code></td>\n<td>-</td>\n<td>配合 editable 为 true 一起使用</td>\n</tr>\n<tr>\n<td>columns[x].quickEditOnUpdate</td>\n<td><code>boolean</code> 或者 <code>object</code></td>\n<td>-</td>\n<td>可以用来区分新建模式和更新模式的编辑配置</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>更多配置请参考 <a href=\"#/docs/renderers/Form/FormItem\">FormItem</a></li>\n<li>更多 Demo 详情请参考 <a href=\"/amis/#/form/table\">表格编辑</a></li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 450px\"><script type=\"text/schema\" height=\"450\" scope=\"form-item\">{\n    \"type\":\"table\",\n    \"name\":\"form\",\n    \"editable\": true,\n    \"addable\": true,\n    \"removable\": true,\n    \"label\": \"表格输入\",\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\",\n          \"quickEdit\": {\n            \"type\": \"select\",\n              \"options\": [\n                {\n                  \"label\": \"A\",\n                  \"value\": \"a\"\n                },\n                {\n                  \"label\": \"B\",\n                  \"value\": \"b\"\n                }\n              ]\n          }\n        }\n    ]\n  }\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Table(FormItem)",
          "fragment": "table-formitem-",
          "fullPath": "#table-formitem-",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});

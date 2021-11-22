/**
 * @Description: 
 * @author: shuxiaokai
 * @Date: 2019-05-04 14:23:41
 * @LastEditors: bubao
 * @LastEditTime: 2021-11-23 00:18:33
 */
/*
	作者: shuxiaokai
	相关参考: https://cn.eslint.org/docs/rules 
	日期: 2019-05-04
	最近更新: 
*/

module.exports = {
	"root": true,
	globals: {
		__static: true,
	},
	"env": {
		// 一个环境定义了一组预定义的全局变量。
		"es6": true, // 启用 es6 语法
		"node": true, // - Node.js 全局变量和 Node.js 作用域。
		"browser": true,
		// "Fluid": true
	},
	parserOptions: {
		sourceType: "module",
	},
	parser: "babel-eslint",
	"extends": [
		"standard",
		"plugin:node/recommended"
	],
	"plugins": [
		"standard",
		"node",
		"html"
	],
	"rules": {
		// indent: [2, 4], //强制为4格缩进
		quotes: [
			2,
			"double",
			{
				//强制双引号
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"spaced-comment": "off", //注释后面可以没有空格
		"space-before-function-paren": "off", //取消函数后面一致的空格
		// semi: "off", //末尾是否有分号不做限制
		// "comma-dangle": "off", //拖尾逗号不做限制
		// "no-trailing-spaces": "off", //允许存在额外空白换行
		// "no-multiple-empty-lines": "off", //允许多行空白
		// "dot-notation": "off",
		"semi": [
			"error",
			"always"
		],
		// "quotes": [
		//     "error",
		//     "double"
		// ],
		"no-multiple-empty-lines": "error",
		"no-var": "error",
		"no-template-curly-in-string": "off",
		"node/no-deprecated-api": "off",
		"camelcase": "off",
		"no-bitwise": "off",
		"no-case-declarations": "off",
		"no-new": "off",
		"new-cap": "off",
		"no-unmodified-loop-condition": "off",
		"no-loop-func": "off",
		"prefer-promise-reject-errors": "off",
		"node/no-unsupported-features/es-syntax": "off",
		"standard/no-callback-literal": "off",
		"no-tabs": "off",
		"indent": [
			"error",
			"tab"
		],
		"space-before-function-paren": [
			"error",
			{
				"anonymous": "never",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"arrow-parens": [
			"error",
			"as-needed"
		]
	}
}

var isntEmpty = require('../../utils/isnt_empty')
var path = require('path')
var getPath = require( path.resolve(process.cwd(), 'fabium/utils/get_path.js') )

module.exports = function(config) {
	var pageReplace = "//- Append Pages Here"

	return {
		description: 'Create a new page',
		prompts: [
			{
				name: 'name',
				type: 'input',
				message: "Page's name",
				validate: isntEmpty
			}
		],
		actions: [
			{
				type: 'add',
				path: '../../src/templates/pages/{{kebabCase name}}.pug'
			},
			{
				type: 'modify',
				pattern: pageReplace,
				path: '../../src/templates/pages/index.pug',
				template:
					"li: a(href='./{{kebabCase name}}.html') {{titleCase name}}\n"+
					"\t\t\t\t"+
					pageReplace
			}
		]
	}
}

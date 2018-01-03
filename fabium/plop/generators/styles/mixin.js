var isntEmpty = require('../../utils/isnt_empty')
var path = require('path')
var getPath = require( path.resolve(process.cwd(), 'fabium/utils/get_path.js') )

module.exports = function(config) {
	var mixinsReplace = "/*---------- Append Here ----------*/"
	return {
		description: 'Create a new mixin',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Mixin\'s name',
				validate: isntEmpty
			}
		],
		actions: [
			{
				type: 'add',
				path: '../../src/assets/styles/mixins/{{kebabCase name}}.sass',
				templateFile: 'templates/styles/mixin.sass'
			},
			{
				type: 'modify',
				path: '../../src/assets/styles/mixins/index.sass',
				pattern: mixinsReplace,
				template:
					'@import "./{{kebabCase name}}.sass"\n'+
					mixinsReplace
			}
		]
	}
}

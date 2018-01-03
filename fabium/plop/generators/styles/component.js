var isntEmpty = require('../../utils/isnt_empty')
var path = require('path')
var getPath = require( path.resolve(process.cwd(), 'fabium/utils/get_path.js') )

module.exports = function(config) {
	return {
		description: 'Create a new component\'s style file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component\'s name',
				validate: isntEmpty
			},
			{
				type: 'list',
				name: 'responsive',
				message: "Responsive file?",
				default: true,
				choices: [
					{name: "Yes", value: true},
					{name: "No", value: false}
				]
			}
		],
		actions: function(data) {
			var componentsReplace = "/*----------  Components: End  ----------*/"

			var actions = [
				{
					type: 'add',
					path: '../../src/assets/styles/components/{{kebabCase name}}/{{kebabCase name}}.sass',
					templateFile: 'templates/styles/component.sass'
				}
			]

			if (data.responsive) {
				actions = actions.concat([
					{
						type: 'add',
						path: '../../src/assets/styles/components/{{kebabCase name}}/{{kebabCase name}}-responsive.sass',
						templateFile: 'templates/styles/component-responsive.sass'
					}
				])
			}

			actions = actions.concat([
				{
					type: 'modify',
					path: '../../src/assets/styles/main.sass',
					pattern: componentsReplace,
					template:
						'/* {{kebabCase name}} */\n'+
						'@import "components/{{kebabCase name}}/{{kebabCase name}}.sass"\n'+
						(data.responsive ? '@import "components/{{kebabCase name}}/{{kebabCase name}}-responsive.sass"\n' : '')+
						'\n'+
						componentsReplace
				}
			])

			return actions

		}
	}
}

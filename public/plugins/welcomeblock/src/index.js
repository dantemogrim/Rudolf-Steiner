/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/welcomeblock', {

	attributes: {
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
		},
		title: {
			type: 'string',
			default: 'RUDOLF STEINERSKOLAN GÖTEBORG'
		},
		button: {
			type: 'string',
			default: 'Ansök nu'
		},
		h2: {
			type: 'string',
			default: 'Välkommen till oss!'
		},
		p: {
			type: 'string',
			default: 'Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.'
		},
		slogan: {
			type: 'string',
			default: 'En väg till frihet'
		},
		mediaType: {
			type: 'string',
			default: 'video'
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: withSelect((select, props) => {
		return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
	})(Edit),
	
	

	/**
	 * @see ./save.js
	 */
	save,
});

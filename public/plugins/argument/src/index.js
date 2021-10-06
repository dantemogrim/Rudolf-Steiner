/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

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
registerBlockType('create-block/argument', {

	attributes: {
		h1: {
			type: 'string',
			default: 'Kunskap och utvärdering'
		},
		p: {
			type: 'string',
			default: 'Waldorfskolan har ambitiösa kunskapsmål för varje enskild elev. Samtidigt är det pedagogiska syftet långsiktigt: avsikten är att skapa livslång lust till att lära genom engagemang, nyfikenhet och förundran...'
		},
		link: {
			type: 'string',
			default: 'http://google.se'
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});

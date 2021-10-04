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
registerBlockType('create-block/personcta', {

	attributes: {
		ctaLink: {
			type: 'string',
			default: 'http://google.se'
		},
		ctaText: {
			type: 'string',
			default: 'Ansök här'
		},
		text: {
			type: 'string',
			default: '“Lorem ipsum dolor sit amet, conse adipiscing elit. Tortor, viverra leo nunc at. At ut sapien, elit mattis cursus kole dictumst.”',
		},
		name: {
			type: 'string',
			default: 'Name Namesson',
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
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

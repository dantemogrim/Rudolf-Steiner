/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import person from './person.jpeg'
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div className='flexContainer'>
			<div className='imageContainer'>
				<img src={person}></img>
			</div>
			<div className='textContainer'>
				<p className='upperText'>“Lorem ipsum dolor sit amet, conse adipiscing elit. Tortor, viverra leo nunc at. At ut sapien, elit mattis cursus kole dictumst.”</p>
				<p className='lowerText'>Johan Karlström, lärare</p>
			</div>
		</div>
	);
}

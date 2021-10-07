/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

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
export default function save({attributes}) {
	console.log(attributes)

	return (
		<p {...useBlockProps.save()}>
			{__(
				<>
				<div className='topSection'>
					<h1>{attributes.title}</h1>
					<p>{attributes.slogan}</p>
					<button className='buttonStyle'>{attributes.button}</button>
					{
						attributes.mediaType === 'video' ? 
						<video autoPlay='true' muted='true' loop className='backgroundImage' src={attributes.mediaUrl}></video>
						:
						<img src={attributes.mediaUrl}></img>
					}
					
				</div> 
				<div className='bottomSection'>
					<h2>{attributes.h2}</h2>
					<p>{attributes.p}</p>
				</div>
				</>
			)}
		</p>
	);
}

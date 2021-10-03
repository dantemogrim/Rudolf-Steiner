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
					<h1>RUDOLF STEINERSKOLAN GÖTEBORG</h1>
					<p>“En väg till frihet”</p>
					<button>Ansök nu</button>
					<img className='backgroundImage' src={attributes.mediaUrl}></img>
				</div> 
				<div className='bottomSection'>
					<h2>Välkommen till oss!</h2>
					<p>Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.</p>
				</div>
				</>
			)}
		</p>
	);
}

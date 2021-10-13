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
export default function save({ attributes }) {

	let bgClass
	let nameClass
	if(attributes.color === 'green') {
		bgClass = 'person_bgGreen'
		nameClass = 'person_nameGreen'
	} 
	if(attributes.color === 'yellow') {
		bgClass = 'person_bgYellow'
		nameClass = 'person_nameYellow'
	} 
	if(attributes.color === 'red') {
		bgClass = 'person_bgRed'
		nameClass = 'person_nameRed'
	} 

	return (

		attributes.inverted ? 
		<div className='outerOuterContainer'>
			<div className='moveRight outerContainer'>
				<div className={`flexContainerNew flexContainerRight`}>
					<div className={`textContainer textRightContainer blobMaskInverted ${bgClass}`}>
						<p className='upperTextRight textRightP'>{attributes.text}</p>
						<p className={`lowerText textRightName ${nameClass}`}>{attributes.name}</p>
					</div>
					<div className='imageContainer'>
						<img src={attributes.mediaUrl}></img>
					</div>
				</div>
			</div>
		</div>
		:
		<div className='outerOuterContainer'>
			<div className='outerContainer'>
				<div className={`flexContainerNew`}>
					<div className='imageContainer'>
						<img src={attributes.mediaUrl}></img>
					</div>
					<div className={`textContainer textLeftContainer blobMask ${bgClass}`}>
						<p className='upperText'>{attributes.text}</p>
						<p className={`lowerText textRightName ${nameClass}`}>{attributes.name}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

{/* <div className={`flexContainerNew ${bgClass} blobMask`}>
<div className='imageContainer'>
	<img src={attributes.mediaUrl}></img>
</div>
<div className='textContainer'>
	<p className='upperText'>{attributes.text}</p>
	<p className={`lowerText ${nameClass}`}>{attributes.name}</p>
</div>
</div>  */}
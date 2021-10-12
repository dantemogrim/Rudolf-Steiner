/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
const { ResponsiveWrapper } = wp.components;
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ media, attributes, setAttributes }) {

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}

	const changeTextHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			text: value
		})
	}
	const changeNameHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			name: value
		})
	}
	const invertHandler = (e) => {
		console.log(e.currentTarget)
		const value = e.currentTarget.checked;
		setAttributes({
			inverted: value
		})
	}
	const changeColorHandler = (e) => {
		const value = e.currentTarget.value;
		if(value === 'blue' || value === 'yellow' || value === 'white') {
			setAttributes({
				color: value
			})
			console.log('value set')
		}
console.log(value)
	}

	let bgClass
	let nameClass
	if(attributes.color === 'white') {
		bgClass = 'person_bgWhite'
		nameClass = 'person_nameWhite'
	} 
	if(attributes.color === 'yellow') {
		bgClass = 'person_bgYellow'
		nameClass = 'person_nameYellow'
	} 
	if(attributes.color === 'blue') {
		bgClass = 'person_bgBlue'
		nameClass = 'person_nameBlue'
	} 

	return (
		<>
			<InspectorControls >
				<PanelBody
				title={'Select image'}
				initialOpen={ true }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={attributes.mediaId}
							allowedTypes={ ['image'] }
							render={({open}) => (
								<Button 
									className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
									onClick={open}
								>
									{!media && 'Choose an image'}
									{media && 
										<ResponsiveWrapper
											naturalWidth={ media.media_details.width }
											naturalHeight={ media.media_details.height }
											>
											<img src={media.source_url} />
										</ResponsiveWrapper>
									}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{attributes.mediaId != 0 && 
						<MediaUploadCheck>
							<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}</Button>
						</MediaUploadCheck>
					}
					
				</PanelBody>
				
				<PanelBody
					title='Chose color'
					initialOpen={ true }
					>
				<input onChange={changeColorHandler} placeholder='blue | white | yellow' defaultValue={attributes.color}/>
				</PanelBody>
				<PanelBody>
					<p>Invert</p>
					<input checked={attributes.inverted} onChange={invertHandler} type='checkbox'></input>
				</PanelBody>
			</InspectorControls> 
			{
			attributes.inverted ? 
			<div className={`flexContainer flexContainerRight ${bgClass}`}>
				<div className="textContainer moveHigher textRightContainer" >
					<textarea onChange={changeTextHandler} rows="4" className='textRightP upperText person_input' defaultValue={attributes.text}/>
					<input onChange={changeNameHandler} className={`textRightName lowerText person_input ${nameClass}`} defaultValue={attributes.name}/> 
				</div>
				<div className='imageContainer'>
					<img src={attributes.mediaUrl}></img>
				</div>
			</div> 
			:
			<div className={`flexContainer ${bgClass}`}>
				<div className='imageContainer'>
					<img src={attributes.mediaUrl}></img>
				</div>
				<div className="textContainer moveHigher" >
					<textarea onChange={changeTextHandler} rows="4" className='upperText person_input' defaultValue={attributes.text}/>
					<input onChange={changeNameHandler} className={`lowerText person_input ${nameClass}`} defaultValue={attributes.name}/> 
				</div>
			</div>
			}
		</>
	);
}

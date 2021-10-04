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

	const changeCtaLinkHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			ctaLink: value
		})
	}
	const changeCtaTextHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			ctaText: value
		})
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
									className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' + ' imageUploadContainer'}
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
					title='CTA'
					initialOpen={ true }
					>
				<label htmlFor='ctaLink'>Link</label><br/>
				<input id='ctaLink' onChange={changeCtaLinkHandler} placeholder='http://google.se' defaultValue={attributes.ctaLink}/>
				</PanelBody>
			</InspectorControls>
			<div className={`flexContainer`}>
				<div className='orangeDiv'/>
				<div className='imageContainer'>
					<img src={attributes.mediaUrl}></img>
				</div>
				<div className="textContainer" >
					<input onChange={changeNameHandler} className={`lowerText person_input`} defaultValue={attributes.name}/> 
					<textarea onChange={changeTextHandler} rows="4" className='upperText person_input' defaultValue={attributes.text}/>
					<input className='ctaButton' id='ctaText' onChange={changeCtaTextHandler} placeholder='Ansök här' defaultValue={attributes.ctaText}/><br/>
				</div>
			</div>
		</>
	);
}

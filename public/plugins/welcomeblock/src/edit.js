// const { InspectorControls, MediaUpload } = wp.blockEditor;
// const { PanelBody, button } = wp.components;
const { Fragment } = wp.element;
const { ResponsiveWrapper } = wp.components;
import videoPlaceholder from './PtbGQ.png'
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
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, Button } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({media, attributes, setAttributes}) {
	
	const onSelectMedia = (media) => {
		console.log(media)
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaType: media.type
		});
	}

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}

	const changeTitleHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			title: value
		})
	}
	const changeSloganHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			slogan: value
		})
	}
	const changeButtonHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			button: value
		})
	}
	const changeH2Handler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			h2: value
		})
	}
	const changePHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			p: value
		})
	}

	console.log(attributes)
	console.log({media})
	return (
			<Fragment>
				<InspectorControls>
					<PanelBody
					title={__('Select block background image', 'awp')}
					initialOpen={ true }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={attributes.mediaId}
								allowedTypes={ ['image', 'video'] }
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
												<img className='previewImage' src={attributes.mediaType === 'video' ? videoPlaceholder : media.source_url} />
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
				</InspectorControls>
				<div className='topSection'>
					<input className='titleInput' onChange={changeTitleHandler} defaultValue={attributes.title}/>
					<input className='sloganInput' onChange={changeSloganHandler} defaultValue={attributes.slogan}/>
					<input className='buttonInput buttonStyle' defaultValue={attributes.button} onChange={changeButtonHandler}/>
					{
						attributes.mediaType === 'video' ? 
						<video autoPlay='true' muted='true' loop className='backgroundImage' src={attributes.mediaUrl}></video>
						:
						<img src={attributes.mediaUrl}></img>
					}
				</div> 
				<div className='bottomSection'>
					<input className='h2Input input' onChange={changeH2Handler} defaultValue={attributes.h2}/>
					<textarea className='pInput input' onChange={changePHandler} defaultValue={attributes.p}/>
				</div>
			</Fragment>
	);
}

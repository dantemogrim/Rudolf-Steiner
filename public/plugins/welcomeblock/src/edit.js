// const { InspectorControls, MediaUpload } = wp.blockEditor;
// const { PanelBody, button } = wp.components;
const { Fragment } = wp.element;
const { ResponsiveWrapper } = wp.components;
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

	console.log(attributes)
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
					<div className="editor-post-featured-image">
						<p>...We will add code here...</p>
					</div>
					</PanelBody>
				</InspectorControls>
				<div className='topSection'>
					<h1>RUDOLF STEINERSKOLAN GÖTEBORG</h1>
					<p>“En väg till frihet”</p>
					<button>Ansök nu</button>
					<img src={attributes.mediaUrl}></img>
				</div> 
				<div className='bottomSection'>
					<h2>Välkommen till oss!</h2>
					<p>Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.</p>
				</div>
			</Fragment>
	);
}

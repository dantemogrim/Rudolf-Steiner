/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import pil from './nypil.svg'
import kids from './kidsbook.png'
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
export default function Edit({ attributes, setAttributes }) {

	const h1ChangeHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			h1: value
		})
	}
	const pChangeHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			p: value
		})
	}
	const linkChangeHandler = (e) => {
		const value = e.currentTarget.value;
		setAttributes({
			link: value
		})
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title='Link'
					initialOpen={ true }
				>
					<input defaultValue={attributes.link} onChange={linkChangeHandler} />
				</PanelBody>
			</InspectorControls>
			<img className='top-image' src={kids}></img>
			<div className='argument_flex-div'>
				<input onChange={h1ChangeHandler} defaultValue={attributes.h1} className='h2-input' placeholder='Kunskap'></input>
				<textarea onChange={pChangeHandler} defaultValue={attributes.p} className='p-input' placeholder='Waldorfskolan har ambitiösa kunskapsmål för varje enskild elev. Samtidigt är det pedagogiska syftet långsiktigt: avsikten är att skapa livslång lust till att lära genom engagemang, nyfikenhet och förundran' ></textarea>
				<a href={attributes.link}><div className='arrow-flex'>
					<p>Läs fler anledningar här</p>
					<img src={pil}></img>
				</div></a>
			</div>
		</>
	);
}

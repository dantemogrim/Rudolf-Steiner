/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import pil from "./nypil.svg";
import blobDownYellowDesktop from "./blobDownYellowDesktop.svg";
import blobDownYellowMobile from "./blobDownYellowMobile.svg";
import blobUpYellowDesktop from "./blobUpYellowDesktop.svg";
import blobUpYellowMobile from "./blobUpYellowMobile.svg";
import kids from "./kidsbook.png";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

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
	return (
		<>
			<img className="blobUpYellowDesktop" src={blobUpYellowDesktop}></img>
			<img className="blobUpYellowMobile" src={blobUpYellowMobile}></img>

			<div className="outerDiv">
				<div className='argument_imageContainer'>
					<img className="top-image" src={kids}></img>
				</div>
				<div className="argument_flex-div-container">
					<div className="argument_flex-div">
						<div className="upperContainer">
							<h2>{attributes.h1}</h2>
							<p>{attributes.p}</p>
						</div>
						<a className="blackLink" href={attributes.link}>
							<div className="arrow-flex">
								<p className="noMargin" href={attributes.link}>
									Läs fler anledningar här
								</p>
									<img src={pil}></img>
							</div>
						</a>
					</div>
				</div>
			</div>

			<img className="blobDownYellowDesktop" src={blobDownYellowDesktop}></img>
			<img className="blobDownYellowMobile" src={blobDownYellowMobile}></img>
		</>
	);
}

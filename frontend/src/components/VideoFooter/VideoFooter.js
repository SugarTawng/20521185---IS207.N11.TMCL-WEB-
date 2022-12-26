import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "nice-react-ticker";
import "./VideoFooter.css";

const VideoFooter = ({ channel, description, song }) => {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className="videoFooter__ticker">
					<MusicNoteIcon className="videoFooter__icon" />
					<Ticker mode="smooth">
						<p>{song}</p>;
					</Ticker>
				</div>
			</div>

			<img
				className="videoFooter__record"
				src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/video-icon.png"
				alt="video footer"
			/>
		</div>
	);
};

export default VideoFooter;

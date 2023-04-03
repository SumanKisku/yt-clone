import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'

// useEffect

function App() {

	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	function onTermSubmit(term) {
		youtube.get("/search", {
			param: {
				q: term,
				type: "video",
			}
		})
		.then((response) => {
			console.log(response.data.items);
			setVideos(response.data.items);
			setSelectedVideo(response.data.items[0]);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	return (
		<div className="container">
			{/* Search */}
			<SearchBar provideTerm={onTermSubmit}/>
		</div>
	)
}

export default App;
import axios from 'axios';

export default class FakeYoutubeClient {
	search({ params }) {
		return params.relatedTovideoId ? axios.get(`/videos/related.json`) : axios.get(`/videos/search.json`);
	}

	videos() {
		return axios.get(`/videos/popular.json`);
	}

	channels() {
		return axios.get(`/videos/channel.json`);
	}
}

export default class Youtube {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	async #searchByKeyword(keyword) {
		const {
			data: { items }
		} = await this.apiClient.search({
			params: {
				part: 'snippet',
				maxResults: 25,
				type: 'video',
				q: keyword
			}
		});
		return items.map(item => ({ ...item, id: item.id.videoId }));
	}

	async #mostPopular(keyword) {
		const {
			data: { items }
		} = await this.apiClient.videos({
			params: {
				part: 'snippet',
				maxResults: 25,
				chart: 'mostPopular'
			}
		});
		return items;
	}

	search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular(keyword);
	}

	channelImageUrl(id) {
		return this.apiClient.channels({ params: { part: 'snippet', id } }).then(res => res.data.items[0].snippet.thumbnails.default.url);
	}

	relatedVideos(id) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					relatedTovideoId: id
				}
			})
			.then(res => res.data.items.map(item => ({ ...item, id: item.id.videoId })));
	}
}

import axios from 'axios';

const KEY = 'AIzaSyCI2FQ7paP9cVgZbcjcYOE8MjY5R0pQ8BM';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});
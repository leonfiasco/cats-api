import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = () => {
	const [cats, setCats] = useState([]);

	const requestApi = async () => {
		const baseUrl = 'https://api.thecatapi.com/v1/breeds';
		const result = await axios.get(baseUrl).then((res) => setCats(res.data));
		return result;
	};

	useEffect(() => {
		return requestApi();
	}, []);

	return [cats];
};

export default useApi;

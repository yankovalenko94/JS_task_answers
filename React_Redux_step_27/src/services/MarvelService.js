import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const { request, clearError, process, setProcess } = useHttp();

	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	// ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
	const _apiKey = "apikey=c5d6fc8b83116d92ed468ce36bac6c62";
	const _baseOffset = 210;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	// Вариант модификации готового метода для поиска по имени.
	// Вызывать его можно вот так: getAllCharacters(null, name)

	// const getAllCharacters = async (offset = _baseOffset, name = '') => {
	//     const res = await request(`${_apiBase}characters?limit=9&offset=${offset}${name ? `&name=${name}` : '' }&${_apiKey}`);
	//     return res.data.results.map(_transformCharacter);
	// }

	// Или можно создать отдельный метод для поиска по имени

	const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = 0) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description
				? `${char.description.slice(0, 210)}...`
				: "There is no description for this character",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
		};
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	return {
		clearError,
		process,
		setProcess,
		getAllCharacters,
		getCharacterByName,
		getCharacter,
		getAllComics,
		getComic,
	};
};

export default useMarvelService;

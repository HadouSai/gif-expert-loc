/**
 * 
 * @param {string} category 
 * @returns {Promise<any[]>}
 */
export const getGiffs = async (category) => {

    let giff = [];

    try {
        const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
        )}&limit=10&api_key=bNswpTGOYgMowtc7ZXQGuwIzK2YQVqnq`;

        const response = await fetch(URL);

        const { data } = await response.json();

        giff = data.map((giff) => ({
            id: giff.id,
            title: giff.title,
            url: giff.images.downsized_medium.url,
        }));

    } catch (error) {
        console.error(error);
    }

    return giff;
};
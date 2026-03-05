import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xZRjc3bioYTbks_WClz3-GVhD_6pJlOQWLNNhf_JFqE'
        },
        params:{
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;
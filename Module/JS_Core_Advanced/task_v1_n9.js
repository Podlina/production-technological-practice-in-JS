const apiKey = 'c0fa67fa210241d389de69b1dc46a27f';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchData(apiUrl)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

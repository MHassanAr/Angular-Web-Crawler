const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;
app.use(cors());

app.get('/scrape', async (req, res) => {
    try {
        const response = await axios.get('https://www.bbc.com/');
        const html = response.data;
        const $ = cheerio.load(html);

        const results = [];
        const seenTitles = new Set();  // To track and avoid duplicates

        // Iterate over each article element and extract the title and description
        $('article, section, div').each((index, element) => {
            // Extract title
            const title = $(element).find('h2').first().text().trim();
            // Extract description (first paragraph in the article)
            const description = $(element).find('p').first().text().trim();

            // Ensure both title and description are non-empty and title is not already seen
            if (title && description && !seenTitles.has(title)) {
                results.push({ title, description });
                seenTitles.add(title);  // Mark this title as seen
            }
        });

        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).send('No titles and descriptions found.');
        }

    } catch (error) {
        console.error('Error scraping the website:', error);
        res.status(500).send('Error scraping the BBC website.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

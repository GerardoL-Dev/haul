import React, { useState, useEffect } from "react";
import RSSParser from "rss-parser";
import "../../styles/news/news.css"; // Asegúrate de tener estilos para el componente

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('https://www.sciencenews.org/feed');
                const data = await res.text();  // Obtener el contenido como texto (XML)
                const parser = new RSSParser();
                const parsed = await parser.parseString(data);  // Parsear el XML
                setNews(parsed.items.slice(0, 6));  // Mostrar solo las primeras 6 noticias
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news", error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading news...</div>;
    }

    return (
        <div className="news-container">
            <h2>Latest News</h2>
            {news.length === 0 ? (
                <p>No news available.</p>
            ) : (
                news.map((item, index) => (
                    <div key={index} className="news-card">
                        <img src={item.enclosure ? item.enclosure.url : "https://via.placeholder.com/600x200"} alt={item.title} />
                        <div className="news-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default News;

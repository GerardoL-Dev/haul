import React, { useEffect, useState } from 'react';
import "../../styles/news/news.css";

const News = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/science_and_environment/rss.xml";
    
    const obtenerNoticias = async () => {
      try {
        let response = await fetch(API_URL);
        let data = await response.json();
        setNoticias(data.items); // Guardamos las noticias en el estado
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };
    
    obtenerNoticias();
  }, []);

  return (
    <div className="news-container">
      <h1 className="title">Noticias Científicas</h1>
      <ul className="news-list">
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <li key={index} className="news-item">
              <h2><a href={noticia.link} target="_blank" rel="noopener noreferrer">{noticia.title}</a></h2>
              <p className="pub-date"><strong>Fecha:</strong> {new Date(noticia.pubDate).toLocaleDateString()}</p>
              <p>{noticia.description}</p>
              {noticia.enclosure && <img src={noticia.enclosure.thumbnail} alt="Imagen de la noticia" className="news-thumbnail" />}
            </li>
          ))
        ) : (
          <p>Cargando noticias...</p>
        )}
      </ul>
    </div>
  );
};

export default News;


import React, { useEffect, useState } from 'react';
import "../../styles/news/news.css";

const News = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.sciencenews.org/feed";
    
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
              <p><strong>Autor:</strong> {noticia.author}</p>
              <p><strong>Fecha:</strong> {new Date(noticia.pubDate).toLocaleDateString()}</p>
              <p>{noticia.description}</p>
              
              {/* Solo mostrar la imagen si existe */}
              {noticia.thumbnail ? (
                <img src={noticia.thumbnail} alt="Imagen de la noticia" className="news-thumbnail" />
              ) : (
                <div className="no-thumbnail-placeholder"></div>
              )}
              
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leer más</a>
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

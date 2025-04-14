import React, { useEffect, useState, useRef } from 'react';
import "../styles/news.css";

const News = () => {
  const [noticias, setNoticias] = useState([]);
  const newsRef = useRef(null);

  useEffect(() => {
    const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.sciencenews.org/feed";
    
    const obtenerNoticias = async () => {
      try {
        let response = await fetch(API_URL);
        let data = await response.json();
        setNoticias(data.items);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };
    
    obtenerNoticias();

    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
      newsRef.current.focus();
    }

  }, []);

  return (
    <div className="news-container" ref={newsRef} tabIndex={-1}>
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
              
              {/* Botón "Leer más" con ID */}
              <div className="read-more">
                <a id="read-more-link" href={noticia.link} target="_blank" rel="noopener noreferrer">Leer más</a>
              </div>
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

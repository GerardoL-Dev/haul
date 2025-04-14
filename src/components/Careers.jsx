import React, { useEffect, useState, useRef } from 'react';
import { obtenerCarreras } from '../services/firestoreService';
import '../styles/careers.css';

export default function Careers() {
  const [carreras, setCarreras] = useState([]);
  const mainRef = useRef(null); // Referencia al contenedor principal

  useEffect(() => {
    // Desplazamiento suave hacia la sección principal cuando se carga el componente
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
      mainRef.current.focus();
    }

    // Obtener datos de Firestore
    const fetchData = async () => {
      const datos = await obtenerCarreras();
      setCarreras(datos);
    };
    fetchData();
  }, []);

  // Mapeo de colores para áreas
  const areaColors = {
    INFORMATICA: '#00bcd4',
    CIENCIAS_EXACTAS: '#ff5722',
    CIENCIAS_NATURALES: '#4caf50',
    CIENCIAS_ECONOMICAS: '#e91e63',
    DERECHO: '#f44336',
    MARKETING: '#ffeb3b',
    INGENIERIA: '#3f51b5',
    MEDICINA: '#8bc34a',
    ARQUITECTURA: '#9c27b0',
    PSICOLOGIA: '#ff9800',
    COMUNICACION: '#009688',
    DISEÑO: '#673ab7',
    EDUCACION: '#795548',
    TURISMO: '#03a9f4',
    GASTRONOMIA: '#ec407a',
    MUSICA: '#ab47bc',
    ARTES: '#26a69a',
    FILOSOFIA: '#d4e157',
    HISTORIA: '#ef5350',
    LITERATURA: '#ffee58',
    SOCIOLOGIA: '#5c6bc0',
    ANTROPOLOGIA: '#66bb6a',
    RELACIONES_INTERNACIONALES: '#42a5f5',
    CIENCIAS_POLITICAS: '#f06292',
    AGRONOMIA: '#29b6f6',
    VETERINARIA: '#7e57c2',
    FARMACIA: '#8d6e63',
    BIOTECNOLOGIA: '#9ccc65',
    ENFERMERIA: '#b2dfdb',
    KINESIOLOGIA: '#ff7043',
    TERAPIA_OCUPACIONAL: '#ba68c8',
    FONOAUDIOLOGIA: 'ffe082',
    NUTRICION: '#b3e5fc'
  };

  // Mapeo de colores para idiomas
  const idiomaColors = {
    Español: '#091f30',
    Inglés: '#ff5722',
    Portugués: '#4caf50'
  };

// Mapeo de imágenes para áreas
const areaImages = {
  INFORMATICA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553479/informatica_yh2aae.png',
  CIENCIAS_EXACTAS: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744552846/ciencias_exactas_mbkykz.png',
  CIENCIAS_NATURALES: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553716/ciencias_naturales_bhkzuf.png',
  CIENCIAS_ECONOMICAS: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553696/ciencias_economicas_uvs8jk.png',
  DERECHO: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553083/derecho_ze9vga.png',
  MARKETING: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553598/marketing_gobbd4.png',
  INGENIERIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553478/ingenieria_cvpvyl.png',
  MEDICINA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553600/medicina_wvnawi.png',
  ARQUITECTURA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553060/arquitectura_zuylrk.png',
  PSICOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553612/psicologia_sklxjw.png',
  COMUNICACION: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553685/comunicacion_vdq6r6.png',
  DISEÑO: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553741/diseno_hmbcmb.png',
  EDUCACION: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553259/educacion_j9eonr.png',
  TURISMO: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553664/turismo_hu9jc8.png',
  GASTRONOMIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553781/gastronomia_hnjk7d.png',
  MUSICA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553653/musica_d2b8bs.png',
  ARTES: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553143/artes_rx6ufm.png',
  FILOSOFIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553714/filosofia_qbpjyz.png',
  HISTORIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553808/historia_ydkmbi.png',
  LITERATURA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553587/literatura_rjrniy.png',
  SOCIOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553629/sociologia_co4vao.png',
  ANTROPOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744552936/antropologia_x3czg4.png',
  RELACIONES_INTERNACIONALES: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553628/relaciones_internacionales_ll0wdi.png',
  CIENCIAS_POLITICAS: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553695/ciencias_politicas_yxmxm2.png',
  AGRONOMIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744552893/agronomia_jk6zrr.png',
  VETERINARIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553669/veterinaria_ltbjvw.png',
  FARMACIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553718/farmacia_jptk5x.png',
  BIOTECNOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744552992/biotecnologia_f978he.png',
  ENFERMERIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553288/enfermeria_egvl2m.png',
  KINESIOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553572/kinesiologia_nbmn6u.png',
  TERAPIA_OCUPACIONAL: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553693/terapia_ocupacional_tan0tq.png',
  FONOAUDIOLOGIA: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553724/fonoaudiologia_xo3lte.png',
  NUTRICION: 'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553638/nutricion_e8yy91.png'
};


  return (
    <div className="careers-container" ref={mainRef} tabIndex={-1}>
      <h1 className="careers-title">Carreras Disponibles</h1>
      <div className="careers-grid">
        {carreras.length > 0 ? (
          carreras.map(carrera => {
            // Normalizar el área para coincidir con el mapeo
            const normalizedArea = carrera.area.toUpperCase().replace(/ /g, '_');

            return (
              <div key={carrera.id} className="career-card">
                {/* Imagen */}
                <img
                  src={areaImages[normalizedArea] || '/ruta/por-defecto.png'}
                  alt={`${carrera.area} Image`}
                />

                {/* Nombre de la carrera */}
                <h3>{carrera.nombre}</h3>

                {/* Etiquetas de Área, Idioma y Duración */}
                <div>
                  <span
                    className="etiqueta"
                    style={{ backgroundColor: areaColors[normalizedArea] }}
                  >
                    Área: {carrera.area}
                  </span>
                  <span
                    className="etiqueta"
                    style={{ backgroundColor: idiomaColors[carrera.idioma] }}
                  >
                    Idioma: {carrera.idioma}
                  </span>
                  <span className="etiqueta">
                    Duración: {`${carrera.anios_cursada} años ${carrera.meses_cursada} meses`}
                  </span>
                </div>

                {/* Descripción */}
                <p>{carrera.descripcion}</p>
              </div>
            );
          })
        ) : (
          <p>Cargando carreras...</p>
        )}
      </div>
    </div>
  );
}
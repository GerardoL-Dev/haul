import React, { useEffect, useState } from 'react';
import '../../styles/infogeneral.css';

const InfoGeneral = () => {
  const [fecha, setFecha] = useState({});
  const [ciudad, setCiudad] = useState('');
  const [coordenadas, setCoordenadas] = useState(null);
  const [clima, setClima] = useState(null);

  const [paises, setPaises] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]); // Nueva lista para ciudades
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(''); // Nueva selección de ciudad

  const [menuDesplegado, setMenuDesplegado] = useState(false); // Estado para controlar el menú desplegable

  const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  useEffect(() => {
    const hoy = new Date();
    setFecha({
      diaNombre: diasSemana[hoy.getDay()],
      diaNumero: hoy.getDate(),
      mesNombre: meses[hoy.getMonth()],
      anio: hoy.getFullYear()
    });
  }, []);

  useEffect(() => {
    // Obtener ubicación usando navigator.geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordenadas({ lat: latitude, lon: longitude });
          obtenerClima(latitude, longitude);
          obtenerCiudadPorCoordenadas(latitude, longitude);
        },
        (error) => {
          console.error('Error al obtener ubicación:', error.message);
          // Valores predeterminados si falla
          setCiudad('Ubicación desconocida');
          setCoordenadas({ lat: -34.6037, lon: -58.3816 }); // Coordenadas de Buenos Aires
          obtenerClima(-34.6037, -58.3816);
        }
      );
    } else {
      console.error('Geolocalización no soportada por este navegador.');
      // Valores predeterminados si no hay soporte
      setCiudad('Ubicación desconocida');
      setCoordenadas({ lat: -34.6037, lon: -58.3816 }); // Coordenadas de Buenos Aires
      obtenerClima(-34.6037, -58.3816);
    }
  }, []);

  const obtenerCiudadPorCoordenadas = async (lat, lon) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await res.json();
      if (data && data.address) {
        const { city, town, village } = data.address;
        setCiudad(city || town || village || 'Ubicación desconocida');
      }
    } catch (err) {
      console.error('Error al obtener ciudad por coordenadas:', err);
      setCiudad('Ubicación desconocida');
    }
  };

  const obtenerClima = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      if (!res.ok) throw new Error('Error al obtener el clima');
      const data = await res.json();
      setClima(data.current_weather);
    } catch (err) {
      console.error('Error al obtener clima:', err.message);
      alert('Hubo un error al obtener el clima. Por favor, intenta nuevamente.');
      setClima(null); // Limpiar el estado del clima en caso de error
    }
  };

  useEffect(() => {
    // Cargar lista de países
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const lista = data.map(p => p.name.common).sort();
        setPaises(lista);
      })
      .catch(err => console.error('Error al cargar países:', err));
  }, []);

  useEffect(() => {
    if (paisSeleccionado === 'Argentina') {
      setProvincias([
        'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
        'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
        'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
        'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
      ]);
    } else {
      setProvincias([]);
    }
  }, [paisSeleccionado]);

  useEffect(() => {
    if (provinciaSeleccionada === 'Buenos Aires') {
      setCiudades(['La Plata', 'Capital Federal', 'Lomas de Zamora']);
    } else if (provinciaSeleccionada === 'Formosa') {
      setCiudades(['Formosa', 'Clorinda', 'Resistencia']);
    } else {
      setCiudades([]);
    }
  }, [provinciaSeleccionada]);

  const buscarClimaManual = async () => {
    if (!provinciaSeleccionada || !ciudadSeleccionada) {
      alert('Por favor, selecciona una provincia y una ciudad.');
      return;
    }

    try {
      const nominatimRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${ciudadSeleccionada}, ${provinciaSeleccionada}, ${paisSeleccionado}`
      );
      const resultados = await nominatimRes.json();

      if (resultados.length > 0) {
        const { lat, lon, display_name } = resultados[0];
        setCiudad(display_name);
        setCoordenadas({ lat, lon });
        obtenerClima(lat, lon);
        setMenuDesplegado(false); // Cierra el menú después de buscar
      } else {
        alert('No se encontró la ciudad seleccionada.');
        setCiudad('Ubicación desconocida');
        setClima(null);
      }
    } catch (err) {
      console.error('Error al buscar clima manual:', err);
      alert('Hubo un error al buscar la ubicación. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="info-general-container">
      {/* Fecha */}
      <p className="info-fecha">📅 <strong>{fecha.diaNombre}</strong>, {fecha.diaNumero} de <strong>{fecha.mesNombre}</strong> de {fecha.anio}</p>

      {/* Ciudad y Clima */}
      <p className="info-ciudad">🌍 <strong>{ciudad || 'Cargando ciudad...'}</strong></p>
      {clima ? (
        <p className="info-clima">🌡️ Temp. actual: <strong>{clima.temperature}°C</strong> | Viento: {clima.windspeed} km/h</p>
      ) : (
        <p className="info-clima">Cargando clima...</p>
      )}

      {/* Botón para desplegar el menú */}
      <div className="manual-selector">
        <button className="btn-toggle" onClick={() => setMenuDesplegado(!menuDesplegado)}>
          Cambiar localidad
        </button>

        {/* Contenido del menú desplegable */}
        {menuDesplegado && (
          <div className="selector-content">
            <select value={paisSeleccionado} onChange={e => setPaisSeleccionado(e.target.value)}>
              <option value="">Seleccionar país</option>
              {paises.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {provincias.length > 0 && (
              <select value={provinciaSeleccionada} onChange={e => setProvinciaSeleccionada(e.target.value)}>
                <option value="">Seleccionar provincia</option>
                {provincias.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            )}

            {ciudades.length > 0 && (
              <select value={ciudadSeleccionada} onChange={e => setCiudadSeleccionada(e.target.value)}>
                <option value="">Seleccionar ciudad</option>
                {ciudades.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            )}

            <button className="btn-weather" onClick={buscarClimaManual}>Cambiar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoGeneral;
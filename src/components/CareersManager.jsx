import React, { useState, useEffect } from 'react';
import {
  obtenerCarreras,
  agregarCarrera,
  editarCarrera,
  eliminarCarrera
} from '../services/firestoreService';
import Modal from '../components/Modal'; // Importamos el componente Modal
import '../styles/careersManager.css';

export default function CareersManager() {
  const [carreras, setCarreras] = useState([]);
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    area: '',
    descripcion: '',
    anios_cursada: '',
    meses_cursada: '',
    anio_alta: '',
    idioma: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [actionToConfirm, setActionToConfirm] = useState(null);

  const areas = [
    "INFORMATICA", "CIENCIAS EXACTAS", "CIENCIAS NATURALES", "CIENCIAS ECONOMICAS", "DERECHO", "MARKETING",
    "INGENIERIA", "MEDICINA", "ARQUITECTURA", "PSICOLOGIA", "COMUNICACION", "DISEÑO", "EDUCACION",
    "TURISMO", "GASTRONOMIA", "MÚSICA", "ARTES", "FILOSOFÍA", "HISTORIA", "LITERATURA", "SOCIOLOGÍA",
    "ANTROPOLOGÍA", "RELACIONES INTERNACIONALES", "CIENCIAS POLÍTICAS", "AGRONOMÍA", "VETERINARIA",
    "FARMACIA", "BIOTECNOLOGÍA", "ENFERMERÍA", "KINESIOLOGÍA", "TERAPIA OCUPACIONAL", "FONOAUDIOLOGÍA", "NUTRICIÓN"
  ];

  const idiomas = ["Español", "Inglés", "Portugués"];

  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const datos = await obtenerCarreras();
        setCarreras(datos);
      } catch (error) {
        console.error('Error al cargar las carreras:', error.message || error);
        alertError('Hubo un error al cargar las carreras');
      }
    };
    fetchCarreras();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const invalidChars = /[{}[\]"<>]/;
    if (invalidChars.test(value)) {
      alertError('No se permiten caracteres especiales como {}, [], ", <, >.');
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleEditar = (carrera) => {
    setForm({ ...carrera });
    setEditandoId(carrera.id);
  };

  const generarIdCarrera = (nombre, anioAlta) => {
    return `${nombre
      .trim()
      .split(/\s+/)
      .map(word => word.slice(0, 4).toUpperCase())
      .join('_')}_${anioAlta}`;
  };

  const handleGuardar = async () => {
    const {
      nombre,
      area,
      descripcion,
      anios_cursada,
      meses_cursada,
      anio_alta,
      idioma
    } = form;

    if (!nombre || !area || !descripcion || !anio_alta || !idioma) {
      alertError('Por favor, completa todos los campos');
      return;
    }

    const currentYear = new Date().getFullYear();
    if (parseInt(anio_alta) > currentYear) {
      alertError(`El año de alta no puede ser mayor a ${currentYear}`);
      return;
    }

    let aniosCursadaFinal = parseInt(anios_cursada);
    let mesesCursadaFinal = parseInt(meses_cursada);

    if (isNaN(aniosCursadaFinal)) aniosCursadaFinal = 0;
    if (isNaN(mesesCursadaFinal)) mesesCursadaFinal = 0;

    if (aniosCursadaFinal === 0 && mesesCursadaFinal === 0) {
      alertError('Debes especificar la duración en años o meses.');
      return;
    }

    const nuevoId = generarIdCarrera(nombre, anio_alta);

    const nuevaCarrera = {
      id: nuevoId,
      nombre,
      area,
      descripcion,
      anios_cursada: aniosCursadaFinal,
      meses_cursada: mesesCursadaFinal,
      anio_alta,
      idioma
    };

    try {
      if (!editandoId) {
        const carrerasExistentes = await obtenerCarreras();
        const idExistente = carrerasExistentes.some(c => c.id === nuevoId);
        if (idExistente) {
          alertError('Ya existe una carrera con este ID. Cambia el nombre o el año de alta.');
          return;
        }

        await agregarCarrera(nuevaCarrera);
        alertSuccess('Carrera creada correctamente');
      } else {
        await editarCarrera(form.id, nuevaCarrera);
        alertSuccess('Carrera actualizada correctamente');
      }

      const datos = await obtenerCarreras();
      setCarreras(datos);

      setForm({
        id: '',
        nombre: '',
        area: '',
        descripcion: '',
        anios_cursada: '',
        meses_cursada: '',
        anio_alta: '',
        idioma: ''
      });
      setEditandoId(null);
    } catch (error) {
      console.error('Error al guardar/editar la carrera:', error.message || error);
      alertError('Hubo un error al guardar/editar la carrera');
    }
  };

  const handleEliminar = (id) => {
    setModalMessage('¿Estás seguro de que deseas eliminar esta carrera?');
    setActionToConfirm(() => () => confirmarEliminacion(id)); // Guardamos la acción a confirmar
    setIsModalOpen(true);
  };

  const confirmarEliminacion = async (id) => {
    try {
      await eliminarCarrera(id);
      const datos = await obtenerCarreras();
      setCarreras(datos);
      alertSuccess('Carrera eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar la carrera:', error.message || error);
      alertError('Hubo un error al eliminar la carrera');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActionToConfirm(null);
  };

  const handleConfirm = () => {
    if (actionToConfirm) actionToConfirm(); // Ejecuta la acción confirmada
    closeModal();
  };

  const alertSuccess = (message) => {
    setModalMessage(message);
    setActionToConfirm(null); // Sin acción adicional
    setIsModalOpen(true);
  };

  const alertError = (message) => {
    setModalMessage(message);
    setActionToConfirm(null); // Sin acción adicional
    setIsModalOpen(true);
  };

  return (
    <div className="manager-container">
      {/* Ventana modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        message={modalMessage}
      />

      {/* Contenido principal */}
      <div className="manager-inner">
        {/* Sección Izquierda: Crear Nueva Carrera */}
        <div className="create-section">
          <h2>CREAR NUEVA CARRERA</h2>
          <div className="form-container">
            <label>NOMBRE</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} />
            <label>ÁREA</label>
            <select name="area" value={form.area} onChange={handleChange}>
              <option value="">Seleccione un área</option>
              {areas.map((areaOption) => (
                <option key={areaOption} value={areaOption}>{areaOption}</option>
              ))}
            </select>

            <label>DESCRIPCIÓN</label>
            <textarea name="descripcion" value={form.descripcion} onChange={handleChange} />

            <label>AÑOS DE CURSADA</label>
            <input name="anios_cursada" type="number" value={form.anios_cursada} onChange={handleChange} />

            <label>MESES DE CURSADA</label>
            <input name="meses_cursada" type="number" value={form.meses_cursada} onChange={handleChange} />

            <label>AÑO DE ALTA</label>
            <input name="anio_alta" type="number" value={form.anio_alta} onChange={handleChange} />

            <label>IDIOMA</label>
            <select name="idioma" value={form.idioma} onChange={handleChange}>
              <option value="">Seleccione un idioma</option>
              {idiomas.map((idiomaOption) => (
                <option key={idiomaOption} value={idiomaOption}>{idiomaOption}</option>
              ))}
            </select>

            <button onClick={handleGuardar}>
              {editandoId ? 'GUARDAR CAMBIOS' : 'CREAR CARRERA'}
            </button>
          </div>
        </div>

        {/* Sección Derecha: Lista de Carreras */}
        <div className="carreras-section">
          <h2>LISTA DE CARRERAS</h2>
          <div className="carreras-list">
            {carreras.length === 0 ? (
              <p>No hay carreras disponibles.</p>
            ) : (
              <ul>
                {carreras.map((carrera) => (
                  <li key={carrera.id}>
                    <strong>{carrera.nombre}</strong> - {carrera.area}
                    <div>
                      <button onClick={() => handleEditar(carrera)} className="edit-btn">EDITAR</button>
                      <button onClick={() => handleEliminar(carrera.id)} className="delete-btn">ELIMINAR</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

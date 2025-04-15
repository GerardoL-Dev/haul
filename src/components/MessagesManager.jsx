import React, { useEffect, useState } from "react";
import { obtenerMensajes, eliminarMensaje } from "../services/firestoreService";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal"; // Modal para confirmaciones
import MessageModal from "../components/MessageModal"; // Nuevo modal para mensajes
import "../styles/messagesManager.css";

// Variables de entorno para EmailJS
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function MessagesManager() {
  const [mensajes, setMensajes] = useState([]);
  const [mensajeSeleccionado, setMensajeSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [respuesta, setRespuesta] = useState("");

  // Estado para el modal de confirmación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [actionToConfirm, setActionToConfirm] = useState(null);

  // Estado para el modal de mensajes
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageModalMessage, setMessageModalMessage] = useState("");

  useEffect(() => {
    const obtenerMensajesDeFirestore = async () => {
      try {
        const mensajesData = await obtenerMensajes();
        if (mensajesData.length === 0) {
          alert("No se encontraron mensajes en la colección 'mensajes'.");
        }
        setMensajes(mensajesData);
      } catch (error) {
        alert("Hubo un error al cargar los mensajes. Por favor, revisa la consola.");
      }
    };

    obtenerMensajesDeFirestore();
  }, []);

  const handleEliminar = (id) => {
    setModalMessage("¿Estás seguro de que deseas eliminar este mensaje?");
    setActionToConfirm(() => () => confirmarEliminacion(id));
    setIsModalOpen(true);
  };

  const confirmarEliminacion = async (id) => {
    try {
      await eliminarMensaje(id);
      const mensajesActualizados = await obtenerMensajes();
      setMensajes(mensajesActualizados);
      alertSuccess("Mensaje eliminado correctamente");
    } catch (error) {
      alertError("Hubo un error al eliminar el mensaje");
    }
  };

  const responderMensaje = () => {
    if (!mensajeSeleccionado) {
      alertError("No has seleccionado ningún mensaje.");
      return;
    }

    const { mail, nombre } = mensajeSeleccionado;

    if (!mail || mail.trim() === "") {
      alertError("El mensaje seleccionado no tiene un correo válido.");
      return;
    }

    const templateParams = {
      name: nombre,
      email: mail,
      message: respuesta,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          alertSuccess("Respuesta enviada correctamente");
        },
        (error) => {
          alertError("Hubo un error al enviar la respuesta. Por favor, intenta nuevamente.");
        }
      );
  };

  const filtrarMensajes = () => {
    return mensajes.filter(
      (mensaje) =>
        mensaje.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        mensaje.mail.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActionToConfirm(null);
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
  };

  const handleConfirm = () => {
    if (actionToConfirm) actionToConfirm();
    closeModal();
  };

  const alertSuccess = (message) => {
    setMessageModalMessage(message);
    setIsMessageModalOpen(true);
  };

  const alertError = (message) => {
    setMessageModalMessage(message);
    setIsMessageModalOpen(true);
  };

  return (
    <div className="messages-container">
      {/* Ventana modal de confirmación */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        message={modalMessage}
      />

      {/* Ventana modal de mensajes */}
      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={closeMessageModal}
        message={messageModalMessage}
      />

      {/* Sidebar con lista de mensajes */}
      <div className="sidebar">
        <input
          type="text"
          placeholder="Buscar remitente..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />

        <ul className="mensajes-recibidos">
          {filtrarMensajes().map((msg) => (
            <li
              key={msg.id}
              className={`mensaje-item ${
                mensajeSeleccionado?.id === msg.id ? "activo" : ""
              }`}
              onClick={() => setMensajeSeleccionado(msg)}
            >
              <div className="nombre">{msg.nombre}</div>
              <div className="mail">{msg.mail}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Panel de detalles del mensaje seleccionado */}
      <div className="panel-detalle">
        {mensajeSeleccionado ? (
          <>
            <div className="detalle-info">
              <h2>{mensajeSeleccionado.nombre}</h2>
              <p className="email">{mensajeSeleccionado.mail}</p>
              <p className="mensaje-texto">{mensajeSeleccionado.mensaje}</p>
            </div>

            <div className="acciones">
              <button
                className="btn eliminar"
                onClick={() => handleEliminar(mensajeSeleccionado.id)}
              >
                Eliminar
              </button>
            </div>

            <textarea
              placeholder="Escribe tu respuesta..."
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
            ></textarea>

            <button
              className="btn enviar"
              onClick={() => {
                responderMensaje();
                setRespuesta(""); // Limpia el campo de respuesta después de enviar
              }}
            >
              Enviar Respuesta
            </button>
          </>
        ) : (
          <div className="placeholder">
            <p>Selecciona un mensaje para ver los detalles.</p>
          </div>
        )}
      </div>
    </div>
  );
}

import { FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <FaMapMarkerAlt className="footer-icon" />
        <h4>Location</h4>
        <p>Parque Industrial Cortines, Ruta Nacional N°7 km 75995, Luján</p>
      </div>
      <div className="footer-section">
        <FaWhatsapp className="footer-icon" />
        <h4>Número de Teléfono</h4>
        <a href="https://wa.link/dvgsxb">11-3344-8592</a>
      </div>
      <div className="footer-section">
        <FaClock className="footer-icon" />
        <h4>Horario de Atención</h4>
        <p>Lunes a Viernes: 9:30 - 17:00</p>
        <p>Sábados: 9:00 - 13:00</p>
      </div>
    </footer>
  );
};

export default Footer;

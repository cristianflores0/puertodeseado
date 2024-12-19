import Carousel from 'react-bootstrap/Carousel';
import MotorCarousel1 from '../assets/motor.jpeg';
import MotorCarousel2 from '../assets/motor2.jpg';
import MotorCarousel3 from '../assets/motor3.jpg';
import './carousel.css';

function Carousel1() {
  return (
    <div 
    className="container-fluid"
    >
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src={MotorCarousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenidos a Puerto Deseado Autopartes</h3>
          <p>La primera casa de autopartes atendida por un vigushi</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src={MotorCarousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselimg"
          src={MotorCarousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousel1;

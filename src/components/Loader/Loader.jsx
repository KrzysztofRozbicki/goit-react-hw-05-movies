import camera from '../../assets/images/camera.png';
import film from '../../assets/images/film.png';

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <div className="loader__film">
          <img className="loader__film-img" src={film} alt="" />
          <img className="loader__film-img" src={film} alt="" />
        </div>
        <img className="loader__camera" src={camera} alt="" />
      </div>
    </div>
  );
};

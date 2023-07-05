import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3 className="error">
        I am sorry but it seems that you are lost in the internet space, click
        below to return to planet of movies
      </h3>
      <Link to="/">
        <button>GO HOME!</button>
      </Link>
    </div>
  );
};

export default NotFound;

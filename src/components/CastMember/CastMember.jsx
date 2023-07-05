import { IMG_URL } from '../../services/constants';
import PropTypes from 'prop-types';

export const CastMember = ({ person }) => {
  const { name, character, profile_path } = person;
  return (
    <>
      <img src={`${IMG_URL}/${profile_path}`} alt={name} />
      <p>
        {name} as {character}
      </p>
    </>
  );
};

CastMember.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};

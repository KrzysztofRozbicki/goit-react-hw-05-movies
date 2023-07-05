import { IMG_URL } from '../../services/constants';

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

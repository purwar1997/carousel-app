import { TECHNOLOGIES, IMAGE_URLS } from '../constants';

const Card = ({ index }) => {
  return (
    <div className='carousel-card'>
      <img src={IMAGE_URLS[index]} alt={TECHNOLOGIES[index]} />
      <p>{TECHNOLOGIES[index]}</p>
    </div>
  );
};

export default Card;

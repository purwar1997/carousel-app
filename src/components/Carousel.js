import Card from './Card';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { IoMdRefresh } from 'react-icons/io';
import { TECHNOLOGIES } from '../constants';

const Carousel = ({ index, setIndex }) => {
  const handlePrevious = () => setIndex(index === 0 ? TECHNOLOGIES.length - 1 : index - 1);
  const handleNext = () => setIndex(index === TECHNOLOGIES.length - 1 ? 0 : index + 1);
  const handleReset = () => setIndex(0);

  return (
    <section className='carousel'>
      <div className='carousel-main'>
        <button onClick={handlePrevious}>
          <GrFormPrevious />
        </button>

        <Card index={index} />

        <button onClick={handleNext}>
          <GrFormNext />
        </button>
      </div>

      <button onClick={handleReset}>
        <IoMdRefresh />
      </button>
    </section>
  );
};

export default Carousel;

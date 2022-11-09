import Card from "./Card";

function Carousel({ index, setIndex }) {
  return (
    <div className="carousel">
      <button onClick={() => setIndex(index - 1)}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <Card index={index} />

      <button onClick={() => setIndex(index + 1)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Carousel;

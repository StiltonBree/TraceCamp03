function Square({onClick, blinky}) {

    return (
      <button className={blinky? "squareBlink":"square"}onClick={onClick}>
        
      </button>
    );
  }

  export default Square;
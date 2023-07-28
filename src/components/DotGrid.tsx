/* eslint-disable @typescript-eslint/no-explicit-any */
import anime from "animejs";

type Props = {
  quantity: number;
};

const DotGrid = ({ quantity }: Props) => {
  const GRID_WIDTH = quantity;
  const GRID_HEIGHT = quantity;

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        {
          value: 1.35,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 1,
          easing: "easeInOutQuad",
          duration: 500,
        },
      ],

      translateY: [
        {
          value: -15,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 0,
          easing: "easeInOutQuad",
          duration: 500,
        },
      ],

      opacity: [
        {
          value: 1,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 0.5,
          easing: "easeInOutQuad",
          duration: 500,
        },
      ],

      delay: anime.stagger(60, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let x = 0; x < GRID_WIDTH; x++) {
    for (let y = 0; y < GRID_HEIGHT; y++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          onClick={handleDotClick}
          key={`${x}-${y}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>,
      );

      index++;
    }
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr )`,
      }}
      className="grid w-fit"
    >
      {dots.map((dot) => (
        <div style={{ margin: `2px` }} key={Math.random()}>
          {dot}
        </div>
      ))}
    </div>
  );
};

export default DotGrid;

type Props = {};

const ScrollAnimation = ({}: Props) => {
  return (
    <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2">
      <div
        className="
          relative h-10 w-6 overflow-hidden rounded-full border-2 border-solid border-[#ffffff66]
          
          before:absolute before:left-1/2 before:top-[7px] before:h-[5px] before:w-[5px] before:-translate-x-1/2 before:animate-wheel before:rounded-full before:bg-[#ffffff66]"
      ></div>
    </div>
  );
};

export default ScrollAnimation;

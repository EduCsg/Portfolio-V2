type Props = {
  text: any;
  icon: string;
  color: string;
  link: string;

  externalLink?: boolean;
  download?: string;
  radius?: boolean;
  rotate?: boolean;

  onClick?: () => void;
};

const ActionButton = ({
  text,
  icon,
  color,
  radius,
  link,
  externalLink,
  download,
  rotate,
  onClick,
}: Props) => {
  interface colors {
    [key: string]: string | undefined;
  }

  const colors: colors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  return (
    <button
      onClick={onClick}
      className={`group min-w-[160px] transform transition-all duration-300 ease-in-out hover:-translate-y-1

      ${colors[color]} ${radius ? "rounded-full" : "rounded-lg"} `}
    >
      <a
        href={link}
        target={externalLink ? "_blank" : "_self"}
        className={`flex items-center justify-center gap-3 px-7 py-4 text-lg leading-none`}
        download={download ? download : undefined}
      >
        <span className="text-white">{text}</span>

        {rotate ? (
          <img
            src={icon}
            className="transition-all duration-[350ms] group-hover:rotate-90"
          />
        ) : (
          <img src={icon} />
        )}
      </a>
    </button>
  );
};

export default ActionButton;

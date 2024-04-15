import Feels from "./Icons/Feels";
import Humidity from "./Icons/Humidity";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";
import Visibility from "./Icons/Visibility";
import Wind from "./Icons/Wind";

type Props = {
  icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <article className="w-56 h-32 text-white bg-gradient-to-b from-blue-500 to-purple-600 bg-opacity-50 rounded-lg shadow-lg p-3 mb-4 flex flex-col justify-between">
      <div className="flex items-center text-sm font-semibold">
        <Icon />
        <h4 className="ml-1 text-sm">{title}</h4>
      </div>
      <h3 className="mt-1 text-base">{info}</h3>
      <div className="text-xs font-semibold">{description}</div>
    </article>
  );
};
export default Tile;

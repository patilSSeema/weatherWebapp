import SearchInput from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-sky-400 px-4 py-2">
      <div className="text-white text-lg font-bold">Weather Application</div>
      <div className="flex items-center">
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;

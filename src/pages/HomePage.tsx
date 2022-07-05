import Menu from "../components/Menu";
import Posts from "../components/PostStuff/Posts";

const HomePage = () => {
  return (
    <div className="p-4 h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex h-full gap-3 rounded-3xl px-3 py-2 bg-gradient-to-r from-slate-100 to-purple-200 border-8 border-white ">
        <Menu />
        <div className="flex-grow bg-inherit flex flex-col">
          <div className="h-24 border-b-2 border-white">Stories</div>
          <div className="flex justify-between">
            <span>Feeds</span>
            <span>Categories</span>
          </div>
          <Posts mode="Feed" />
        </div>
        <div className="w-96 bg-inherit border-l-2 border-white">UserStuff</div>
      </div>
    </div>
  );
};
export default HomePage;

import { useAppSelector } from "../../app/hooks";
import Posts from "../PostStuff/Posts";

interface Props {
  mode: "Feed" | "Page";
}

const MainPart = ({ mode }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  return (
    <div className="flex-grow max-w-[55%] bg-inherit flex flex-col">
      <div className="flex-none border-b-2 border-white flex gap-3 overflow-x-scroll h-28 scrollbar scrollbar-thumb-purple-300 scrollbar-track-white">
        {/* followers.map(follower => <Storie storie={follower.storie})/> */}
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 relative cursor-pointer">
            <img src={currentUser.picture} alt="" className="rounded-full" />
            <div className="absolute bottom-0 right-0 bg-blue-700 h-5 w-5 flex justify-center items-center text-white rounded-full">
              <span>+</span>
            </div>
          </div>

          <div className="text-xs">Vova</div>
        </div>

        <div className="flex flex-col items-center gap-1 ">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full h-16 w-16 bg-white border-2 border-purple-500"></div>
          <div className="text-xs">Vova</div>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Feeds</span>
        <div className="flex gap-3">
          <span className="text-slate-400 cursor-pointer">All</span>
          <span className="text-slate-500 cursor-pointer">Following</span>
          <span className="text-gray-400 cursor-pointer">Newest</span>
          <span className="text-purple-400 cursor-pointer">Popular</span>
        </div>
      </div>
      <Posts mode={mode} />
    </div>
  );
};
export default MainPart;

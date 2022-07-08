import { useAppSelector } from "../app/hooks";

const UserStuff = () => {
  const posts = useAppSelector((state) => state.posts.posts).slice(0, 3);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  return (
    <div className="w-96 bg-inherit border-l-2 border-white flex flex-col gap-5 p-5">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="h-16 border-4 text-white p-5 text-xl placeholder:text-white text-center border-white bg-inherit rounded-full focus:outline-none"
        />
        <button className="rounded-full bg-inherit w-12 h-12 flex items-center justify-center border-2 border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mx-1">
          <h2 className="text-xl">Suggestions</h2>
          <h2 className="text-xl font-bold text-purple-500 cursor-pointer">
            See all
          </h2>
        </div>
        <div className="flex flex-col mx-1 gap-4 mt-2 border-b border-white h-52 py-4 overflow-y-auto scrollbar-hide ">
          {currentUser.subscriptions.map((user) => (
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-white" />
                <div>{user.name}</div>
              </div>
              <button className="bg-purple-500 w-24 h-8 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
                Follow
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 border border-white" />
              <div>Albert Rudenko</div>
            </div>
            <button className="bg-purple-100 w-24 h-8 text-black border border-white rounded-md overflow-y-auto">
              Following
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 border border-white" />
              <div>Albert Rudenko</div>
            </div>
            <button className="bg-purple-500 w-24 h-8 text-white rounded-md hover:border hover:border-purple-400 hover:bg-purple-100 hover:text-black">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl">Recommended Posts</h2>
        <div className="flex flex-col gap-[2px]">
          {posts.map((post) => (
            <div className="cursor-pointer flex bg-white w-full mt-3 rounded-2xl justify-start items-center px-3 py-1 gap-3">
              <img
                className="w-28 rounded-2xl h-14 object-cover blur-[1px]"
                src={
                  post.selectedFile ||
                  "http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
                }
                alt=""
              />
              <div>
                <div className="text-xl">{post.title}</div>
                <div className="text-slate-300 text-xs">
                  {post.tags.toString()}
                </div>
                <div className="text-sm text-purple-400">{post.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default UserStuff;

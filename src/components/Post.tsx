import { PostType } from "../types";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="shadow-2xl rounded-lg ">
      <div className="relative">
        <div className="z-[1] flex absolute  w-full text-white justify-between px-2.5">
          <div className="" >
            <div className="">{post.creator}</div>
            <div>{post.time+" min ago"}</div>
          </div>
          <h1>. . .</h1>
        </div>
        <img className="blur-[1px] rounded-t-lg" src="http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg" alt="" />
      </div>
      <div className="grid grid-cols-1 gap-5 px-2.5">
        <div className="text-slate-300">{post.tags.join(" ")}</div>
        <div className="text-[36px]">{post.title}</div>
        <div className="">{post.message}</div>
        <div className="flex w-full justify-between px-2.5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <div>{post.likes+"LIKES"}</div>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <div>DELETE</div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};
export default Post;

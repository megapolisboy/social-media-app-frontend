import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import AvatarImage from "../components/UI/AvatarImage";
import Header from "../components/Header";
import Comments from "../components/CommentsStuff/Comments";
import RecomendationsWheel from "../components/RecomendationsWheel";
import LikeButton from "../components/UI/LikeButton";
import { RootState } from "../app/store";

const PostDetailsPage: React.FC = () => {
  //const { id } = useParams();
  const post = useAppSelector((state: RootState) => state.posts.current);

  return (
    <div>
        <Header/>
        <div className="flex p-1.5 gap-4">
            <div className="grow">
              <div className={`${post?.title.length as any > 15 ? "text-[64px]" : "text-[96px]"} `}>{post?.title}</div>
              <div className="text-[24px] text-slate-400">{post?.tags.join(" ")}</div>
              <div className="mt-12 text-[24px] grow">{post?.message}</div>
              <div className="mt-12 text-[24px]">{"Created by : "+post?.creator}</div>
              <div className="mt-1">35 min ago</div>
              <div className="mt-14 max-w-[100px]">
                <LikeButton  post={post as any}/>
              </div>
            </div>
            <img
              className=""
              src="http://northeastchamber.org/wp-content/uploads/2021/06/fireworks.jpeg"
              alt=""
            />
        </div>
        <Comments/>
        <RecomendationsWheel/>
    </div>
  );
};

export default PostDetailsPage;

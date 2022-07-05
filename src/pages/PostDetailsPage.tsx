import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import AvatarImage from "../components/UI/AvatarImage";
import Header from "../components/Header";
import Comments from "../components/CommentsStuff/Comments";
import RecomendationsWheel from "../components/RecomendationsWheel";
import { RootState } from "../app/store";
import { UserType } from "../types";

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const post = useAppSelector((state: RootState) =>
    state.posts.posts.find((post) => post._id === id)
  );

  return (
    <div>
      <Header />
      <div className="flex p-1.5 gap-4">
        <div className="grow">
          <div
            className={`${
              (post?.title.length as any) > 15 ? "text-[64px]" : "text-[96px]"
            } `}
          >
            {post?.title}
          </div>
          <div className="text-[24px] text-slate-400">
            {post?.tags.join(" ")}
          </div>
          <div className="mt-12 text-[24px] grow">{post?.message}</div>
          <div className="mt-12 text-[24px]">
            {"Created by : " +
              (typeof post?.creator === "string"
                ? post?.creator
                : (post?.creator as UserType).name)}
          </div>
          <div className="mt-1">35 min ago</div>
          <div className="mt-14 max-w-[100px]">Like button</div>
        </div>
        <img className="" src={post.selectedFile} alt="" />
      </div>
      <Comments />
      <RecomendationsWheel />
    </div>
  );
};

export default PostDetailsPage;

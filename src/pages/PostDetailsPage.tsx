import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  return <div>PostDetailsPage</div>;
};

export default PostDetailsPage;

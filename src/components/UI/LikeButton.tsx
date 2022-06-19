import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { addLike } from '../../features/postsSlice';
import { PostType } from '../../types';

interface Props {
  post: PostType;
}

const LikeButton: React.FC<Props> = ({ post }) =>{
  const dispatch = useAppDispatch();

  function addLikes() {
    dispatch(addLike(post.id));
  }

  return (
    <div
      className="flex gap-1 cursor-pointer hover:bg-slate-100 rounded-sm p-2"
      onClick={addLikes}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    <div>{post.likes + " LIKES"}</div>
  </div>
  )
}

export default LikeButton
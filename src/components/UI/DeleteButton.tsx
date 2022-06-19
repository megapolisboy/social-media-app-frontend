import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { removePostById } from '../../features/postsSlice';
import { PostType } from '../../types';

interface Props {
    post: PostType;
  }
  
const DeleteButton: React.FC<Props> = ({ post }) => {
    const dispatch = useAppDispatch();
    
    function removePost() {
        dispatch(removePostById(post.id));
    }

  return (
    <div
        className="flex cursor-pointer hover:bg-slate-100 rounded-sm p-2"
        onClick={removePost}
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
        </svg>
        <div>DELETE</div>
    </div>
  )
}

export default DeleteButton
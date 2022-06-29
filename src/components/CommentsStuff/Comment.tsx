import React from 'react'
import AvatarImage from '../UI/AvatarImage';

interface Props {
  comment: any;
}

const Comment: React.FC<Props> = ({comment}) => {
  return (
    <div className='flex'>
      <AvatarImage></AvatarImage>
      <div>
          <div>vvvvv</div>
          <div>{comment}</div>
      </div>
    </div>
  )
}

export default Comment
export interface PostType {
  _id: string;
  comments: any[]; //TODO: CommentType[] | string[]
  creator: UserType | string;
  createdAt: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile?: string;
  likes: UserType[] | string[];
}

export interface ShortPostType {
  title: string;
  message: string;
  tags: string[];
  selectedFile?: string;
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  password?: string;
  picture?: string;
  posts: PostType[] | string[];
}

export interface UserShortType {
  email: string;
  password: string;
}

export interface UserLongType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResponseType {
  result: UserType;
  token: string;
}

export interface GoogleUser {
  _id: string;
  email: string;
  name: string;
  image?: string;
  posts: PostType[] | string[];
}

export interface GoogleResponseType {
  result: GoogleUser;
  token: string;
}

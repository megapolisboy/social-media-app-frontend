export interface PostType {
  _id: string;
  comments: Array<CommentType | string>;
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
  createdAt: Date;
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  password?: string;
  picture?: string;
  posts: PostType[] | string[];
  subscribers: UserType[];
  subscriptions: UserType[];
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
  subscribers: UserType[];
  subscriptions: UserType[];
}

export interface GoogleResponseType {
  result: GoogleUser;
  token: string;
}

export interface CommentType {
  creator: UserType;
  message: string;
  createdAt: string;
}

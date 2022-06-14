export interface PostType {
  creator: string;
  title: string;
  message: string;
  tags: string[];
  image?: File;
}

export interface UserType {
  name: string;
  email: string;
  password: string;
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

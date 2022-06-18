export interface PostType {
  id:number;
  creator: string;
  title: string;
  message: string;
  tags: string[];
  time?:string;
  image?: File;
  likes:number;
}

export interface UserType {
  name: string;
  email: string;
  password?: string;
  picture?: string;
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
  email: string;
  name: string;
  image: string;
}

export interface GoogleResponseType {
  result: GoogleUser;
  token: string;
}

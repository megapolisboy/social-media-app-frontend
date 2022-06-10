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

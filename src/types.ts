export interface PostType {
  creator: string;
  title: string;
  message: string;
  tags: string[];
  time?:string;
  image?: File;
  likes?:number;
}

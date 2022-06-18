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

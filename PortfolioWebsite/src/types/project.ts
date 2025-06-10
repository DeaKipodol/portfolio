export interface ProjectItem {
  name: string;
  title: string;
  subject: string;
  tag: string[];
  imgurl: string;
  giturl: string;
  depoloyurl: string;
  type?: string; // filtering-slice에서 사용되는 속성
}
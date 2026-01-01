export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}


export interface Skill {
  name: string;
  level: number;
}

export interface SocialIcon {
  icon: string;
  color: string;
  link?: string;
}
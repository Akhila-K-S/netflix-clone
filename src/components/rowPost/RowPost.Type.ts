export interface IMovie {
  id: string;
  backdrop_path: string;
}

export interface IRowPost {
  title: string;
  isSmall?: boolean;
  data: IMovie[];
  onVideoClick: (id: string) => void;
}

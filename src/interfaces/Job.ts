
interface Duty {
  description: string;
  languages: string;
};

interface Role {
  title: string;
  time: string;
  location: string;
  description: string;
  duties: Duty[];
};

export interface Job {
  place: string;
  logo: string;
  time: string;
  roles: Role[];
};

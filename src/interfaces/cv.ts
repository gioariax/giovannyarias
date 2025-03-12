export interface Job {
  id: string;
  companyId: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  projects?: Project[];
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  tools?: Tool[];
  roles?: string[];
  customers?: Company[];
  startDate: Date;
  endDate?: Date;
}

export interface Tool {
  id: number;
  name: string;
  urlImage?: string;
  rate?: number;
  type?: string;
  favorite?: boolean;
}

export interface Companies {
  [key: string]: Company;
}

export interface Company {
  name: string;
  country: string;
  urlImage?: string;
  color?: string;
}


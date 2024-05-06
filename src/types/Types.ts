export interface users {
  user: string;
  fullName: string;
  password: string;
  roles: string;
}

export interface Roles {
  Admin: number;
  User: number;
}



export interface RouteObject {
  path: string;
  element: React.ReactNode;
  roles: string[];
}
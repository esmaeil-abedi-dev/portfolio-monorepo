// Auth related types
export interface Session {
  user: {
    id: string;
    name?: string;
    email?: string;
    image?: string;
  };
  expires: string;
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

export interface AuthOptions {
  providers: any[];
  adapter: any;
  session: {
    strategy: 'jwt' | 'database';
  };
  secret?: string;
  callbacks?: {
    [key: string]: (...args: any[]) => Promise<any>;
  };
  pages?: {
    signIn?: string;
    error?: string;
  };
}

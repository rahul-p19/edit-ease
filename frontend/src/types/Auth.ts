type AuthContextType = {
  token: string;
  isAuthenticated: boolean;
  role: string;
  slug: string;
  login: (
    token: string,
    role: string,
    slug: string
  ) => void;
  logout: () => void;
};

export type { AuthContextType };

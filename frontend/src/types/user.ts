// src/types/user.ts

export interface UserProfile {
  phone: string | null;
  address: string | null;
  avatar: string | null;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile: UserProfile;
}

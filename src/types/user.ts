export type UserRole = "teacher" | "student";

export interface AppUser {
  uid: string;
  name: string;
  role: UserRole;
}

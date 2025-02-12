/* eslint-disable */
import NextAuth from "next-auth";

// Extend NextAuth types
declare module "next-auth" {
  interface User {
    aa?: string;
    page?: string;
    u_profile?: string; // Add your custom property here
    // Include other properties if needed
  }

  interface Session {
    user: User; // Ensure the session user includes your extended User type
  }
}

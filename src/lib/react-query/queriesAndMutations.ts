import { useMutation } from "@tanstack/react-query";
import { INewUser } from "@/types";
import { createUserAccount, signInAccount } from "../appwrite/api";

// create user Account
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

// sign In
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

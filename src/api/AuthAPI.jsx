import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const loginAPI = async ({ email, password }) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerAPI = async ({ email, password }) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

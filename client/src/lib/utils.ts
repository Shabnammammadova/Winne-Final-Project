import { User } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, format = "DD/MM/YYYY") {
  return moment(date).format(format)
}


export function getUserId(user?: User | null) {
  if (user) return user._id;
  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    guestId = Math.random().toString(36).substring(7)
    localStorage.setItem("guestId", guestId)
  }
  return guestId;
}
import { ReactNode } from "react";

export interface CardProps {
  title: string;
  content: ReactNode;
}

export interface PostModalProps {
  onSubmit: (post: { title: string; content: string }) => void;
  trigger?: React.ReactElement; 
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-full" | "rounded-md";
}

export interface PostCardProps {
  title : string
  content : ReactNode
  userId : string
}

export interface UserProps {
  Name : string
  Email : string
  address : string
}

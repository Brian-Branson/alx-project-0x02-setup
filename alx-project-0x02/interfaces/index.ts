import { ReactNode } from "react";

export interface CardProps {
  title: string;
  content: ReactNode;
}

export interface PostModalProps {
  onSubmit: (post: { title: string; content: string }) => void;
  trigger?: React.ReactElement; 
}
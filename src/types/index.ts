// Language types
export interface Language {
  id: number;
  name: string;
  code: string;
  flag: string;
}

// Unit types
export interface Unit {
  id: number;
  languageId: number;
  name: string;
  order: number;
}

// Lesson types
export interface Lesson {
  id: number;
  unitId: number;
  name: string;
  order: number;
}

// Question types
export interface Question {
  id: number;
  lessonId: number;
  hindi: string;
  english: string;
}

// Hindi Letter types
export interface HindiLetter {
  id: number;
  letter: string;
  romanized: string;
}

// User Progress types
export interface UserProgress {
  id: number;
  userId: number;
  lessonId: number;
  completed: boolean;
  hearts: number;
  currentQuestionIndex: number;
}

// Auth Modal types
export type AuthMode = "login" | "signup";

// Lesson Button types
export interface LessonButtonProps {
  active?: boolean;
  onClick?: () => void;
  size?: number;
  className?: string;
  icon?: React.ReactNode;
  tooltipContent?: React.ReactNode;
  index: number;
}

// Learning Path types
export interface LearningPathProps {
  lessons: Lesson[];
}
export interface TodoInt {
  text: string;
  isChecked: boolean;
  postedAt: number;
}
export interface InputChange {
  e: React.ChangeEvent<HTMLInputElement>;
}
export interface HandleTodo {
  e: React.KeyboardEvent;
}

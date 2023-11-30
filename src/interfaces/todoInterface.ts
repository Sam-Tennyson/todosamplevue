export interface ITodoData {
    data: string;
    isInvalid?: boolean;
    errMsg?: string;
    isEditable?: boolean;
    isDeleteable?: boolean;
}

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
    desc: string;
}

export interface IDummyData {
    id: number;
    name: string;
    username: string;
}

export interface TodoItemProps {
  todo: ITodo;
  index: number;
}
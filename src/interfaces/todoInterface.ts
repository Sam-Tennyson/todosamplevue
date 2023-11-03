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
}
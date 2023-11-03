export interface ITodoData {
    data: string;
    isInvalid?: boolean;
    errMsg?: string;
    isEditable?: boolean;
    isDeleteable?: boolean;
}

export interface ITodo {
    text: string;
    completed: boolean;
}
export interface CallbackFunc {
    (push: boolean): void;
}

export interface IHogeEventProvider{
    publish: (push:boolean) => void,
    subscribe: (cbFunc:CallbackFunc) => void
}
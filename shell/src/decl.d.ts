declare module 'mfe1/SharedService' {
    export class SharedService {
        getSharedData(): string;
      setMessage(newMessage: string): void;
    }
}
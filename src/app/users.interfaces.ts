export interface User {
    id: string;
    pictureUrl?: string;
    pictureAlt?: string;
    userName: string;
    lastMessage: {
        messageAuthor: string;
        messageText: string;
        messageDate: string;
        readStatus: string;
    }
}
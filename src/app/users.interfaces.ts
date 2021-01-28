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

export interface Message {
    userId: string;
    messages: [
        {
            messageId: string;
            message: string;
            messageDate: Date;
        }
    ]
}
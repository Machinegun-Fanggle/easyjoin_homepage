export interface IQnA {
    title: string
    content: string
    category: string
    createAt: string
    writer: string
}

export interface IAccount {
    userId: string
    password: string
}

export interface IAnnouncement {
    subject: string
    content: string
    date: string
    creater: string
}

export interface IPress {
    subject: string
    url: string
    content: string
    image: string
    creater: string
}

export type PersonType = {
    id: number
    name: string
}
export type FriendType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
export interface IMessageType {
    id: number
    message: string
}
export interface IPostType extends IMessageType {
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string    
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType    
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type SearchStringType = {
    term: string
    friend: boolean | null
    page: number
}

export type ChatMessageType = {
    userId: number
    message: string
    photo: string
    userName: string
}

export type ChatStatusType = 'pending' | 'ready' | 'error';
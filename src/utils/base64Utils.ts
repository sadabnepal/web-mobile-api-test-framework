export const encodeToBase64String = (data: string) => {
    return Buffer.from(data).toString('base64');
}

export const decodeFromBase64String = (data: string) => {
    return Buffer.from(data, 'base64').toString()
}
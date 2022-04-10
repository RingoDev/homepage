export const getImageDimension = (url:string) => {
    return {
        width: url.split('/')[5].split('x')[0],
        height: url.split('/')[5].split('x')[1]
    }
}

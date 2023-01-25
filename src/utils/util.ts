export const shortText = (text: string) => {
    if (text.length >= 18) {
        return text.substring(0, 15) + "...";
    } else {
        return text;
    }
}

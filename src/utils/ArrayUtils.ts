export function arrayJoin<T>(
    array: Array<T>,
    delimiter: (
        array: Array<T>,
        before: T,
        next: T,
    ) => T
) {
    const out: T[] = []
    for (let i = 0; i < array.length; i++) {
        out.push(array[i])
        if (i !== array.length - 1) {
            out.push(delimiter(array, array[i], array[i + 1]))
        }
    }
    return out
}
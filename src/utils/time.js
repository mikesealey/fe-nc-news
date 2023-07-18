export const time = (input) => {
    const outputObject = {
        year: input.substring(0, 3),
        month: input.substring(5,6),
        day: input.substring(8,9)
    }

    return outputObject
}

// 2020-10-04T02:03:00.000Z"

console.log(time("2020-10-04T02:03:00.000Z"))
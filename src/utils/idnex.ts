// Reshapes the 1D functions to 2D function. Used in pagination to break a list of items into many smaller slices.
export const reshape = <T extends any>(arr: T[], col: number) => {
    const newArr = [];
    while (arr.length) newArr.push(arr.splice(0, col));
    return newArr;
};

/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Check if x and y are numeric
    if (isNaN(x) || isNaN(y)) {
        console.log(-1);
        return;
    }

    // Swap values using a temporary variable
    let temp = x;
    x = y;
    y = temp;

    console.log(`${x}, ${y}`);
}

// Print output
swap("Apple", 10);
swap(9, 17);
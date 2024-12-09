/**
 * Generates a sequence of numbers up to a specified stop value (exclusive).
 * 
 * @param {object} params - Parameters object containing configuration.
 * @param {number} params.stop - The last number (exclusive) in the sequence.
 * @returns {Array} - An array containing the sequence of numbers.
 */
function generateSequence(params) {
    let sequence = [];
    for (let i = 1; i < params.stop; i++) {
        sequence.push(i);
    }
    return sequence;
}

// Example usage:
let sequence = generateSequence({ stop: 10 });
console.log(sequence); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Number Extractor

A JavaScript library to extract numbers from nested arrays.

Originaly made out of pure hatred towards this one array task,
where .flat() was forbidden.

# How to Use 

Include the library:

    <script src="numberExtractor.js"></script>

Use in your code:

    // Extract numbers from nested arrays
    const numbers = NumberExtractor.extractNumbers([1, [2, '3', 'abc'], 4]);
    // Returns: [1, 2, 3, 4]
    
    // Use utility functions
    const sum = NumberExtractor.NumberUtils.sum([1, [2, '3']]);
    // Returns: 6

# What It Does :

- Extracts numbers from any level of nested arrays

- Handles numbers, strings, null, undefined values



# Provides utility functions:

  - sum() - Calculate total sum

  - average() - Calculate average

  - onlyEven() - Filter even numbers

  - onlyOdd() - Filter odd numbers

  - unique() - Remove duplicates

  - max() / min() - Find highest/lowest numbers

/**
 * @version 1.0.0
 * @license MIT
 */

(function(global) {
    'use strict';
    
    /**
     * @param {Array} array - Input array
     * @returns {Array} Flat array of numbers
     */

    function extractNumbers(array) {
        if (!Array.isArray(array)) {
            throw new TypeError('extractNumbers: Input must be an array');
        }

        let result = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (Array.isArray(element)) {
                const recursiveResult = extractNumbers(element);
                result = result.concat(recursiveResult);
            } else if (element != null && element !== '' && element !== false) {
                const number = Number(element);
                if (!isNaN(number) && typeof element !== 'boolean') {
                    result.push(number);
                }
            }
        }

        return result;
    }

    /**
     * Utility functions for number operations
     */
    
    const NumberUtils = {
        // Main extraction
        extract: extractNumbers,
        
        // Filtering
        onlyEven: function(array) { 
            return extractNumbers(array).filter(function(x) { return x % 2 === 0; });
        },
        onlyOdd: function(array) { 
            return extractNumbers(array).filter(function(x) { return x % 2 !== 0; });
        },
        onlyPositive: function(array) { 
            return extractNumbers(array).filter(function(x) { return x > 0; });
        },
        onlyNegative: function(array) { 
            return extractNumbers(array).filter(function(x) { return x < 0; });
        },
        onlyIntegers: function(array) { 
            return extractNumbers(array).filter(function(x) { return Number.isInteger(x); });
        },
        
        // Math operations
        sum: function(array) { 
            return extractNumbers(array).reduce(function(acc, x) { return acc + x; }, 0);
        },
        product: function(array) { 
            return extractNumbers(array).reduce(function(acc, x) { return acc * x; }, 1);
        },
        average: function(array) {
            var numbers = extractNumbers(array);
            return numbers.length ? numbers.reduce(function(a, b) { return a + b; }) / numbers.length : 0;
        },
        
        // Statistics
        max: function(array) {
            var numbers = extractNumbers(array);
            return numbers.length ? Math.max.apply(null, numbers) : null;
        },
        min: function(array) {
            var numbers = extractNumbers(array);
            return numbers.length ? Math.min.apply(null, numbers) : null;
        },
        
        // Utilities
        count: function(array) { 
            return extractNumbers(array).length; 
        },
        unique: function(array) { 
            return Array.from(new Set(extractNumbers(array))); 
        },
        sorted: function(array, descending) {
            var numbers = extractNumbers(array);
            return numbers.sort(function(a, b) { 
                return descending ? b - a : a - b; 
            });
        }
    };

    // Create global object
    const NumberExtractor = {
        extractNumbers: extractNumbers,
        NumberUtils: NumberUtils,
        
        // Aliases for convenience
        extract: extractNumbers,
        utils: NumberUtils,
        
        // Version
        version: '1.0.0'
    };

    // Export based on environment
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return NumberExtractor;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = NumberExtractor;
    } else {
        global.NumberExtractor = NumberExtractor;
    }
    
})(typeof window !== 'undefined' ? window : global);

#!/usr/bin/node

// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers', function() {
        assert.strictEqual(calculateNumber(-1, -3), -4);
        assert.strictEqual(calculateNumber(-2.3, -3.7), -6);
    });

    it('should handle zero', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0, 3.7), 4);
    });

    it('should handle edge cases', function() {
        assert.strictEqual(calculateNumber(1.49, 1.49), 2);
        assert.strictEqual(calculateNumber(1.5, 1.5), 4);
    });
});

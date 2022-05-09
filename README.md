# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lancey1/lotide`

**Require it:**

`const _ = require('@lancey1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that asserts if two arrays are equals
* `assertEqual`: a function that asserts if two values are equals
* `assertObjectsEqual`: a function that asserts if two objects are equals
* `countLetters`: a function that return the counts of each letter in a given string
* `countOnly`: a function that takes items and return the counts of the specified items
* `eqArrays`: a function that compares two arrays
* `eqObjects`: a function that compares two objects
* `findKey`: a function that searches the object and return the first key for which the callback returns a truthy value
* `findKeyByValue`: a function that searches for a key on an object where it matches a given value
* `head`: a function that returns the first element from the array
* `letterPositions`: a function that returns an object containing all the indices in the string where each letter is located
* `map`: a function that creates a new array with the results of the callback function
* `middle`: a function that returns the middle element of an array, if the array length is even it will return the two middle element in the array
* `tail`: a function that retrieves all elements except the head of the array
* `takeUntil`: function that returns a slice of the array with elements taken from the beginning and stop once the callback returns truthy.
* `without`: function that removes specified elements from the array

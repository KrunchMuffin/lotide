# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade
software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first item in an array.
* `middle(...)`:  returns the middle item in an array, if it's length is an even number returns the 2 middle items.
* `findKeyByValue(...)`: returns key with given value
* `map(...)`: takes 2 arguments, array to map, callback function and returns a new array with the applied callback
  function.
* `takeUntil(...)`: takes array and returns new array untill call back is satisfied.
* `without(...)`: compare arrays and print elements in first array that do not appear in second.
* `findKey(...)`: returns first key where argument is a match to value.
* `eqObjects(...)`: compares two objects for equality.
* `eqArrays(...)`: compares two arrays for equality.
import { isFunction } from 'lodash'

/**
 * Verify if the passed arguments is a function and run it
 * if the argument pass the verification
 *
 * @param {function} fn  a function.
 * @param {function} args  the arguments to run the function
 */
export const runIfFunction = (fn, ...args) => isFunction(fn) && fn(...args)

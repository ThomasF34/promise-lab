/** This function should return a Promise that will resolve without any output */
function promiseResolving(): Promise<undefined> | void{}

/** This function should return a Promise that will reject without any output */
function promiseRejecting(): Promise<undefined> | void{}

/** This function should return a Promise that will resolve with the number 3 as output */
function promiseResolvingWith3(): Promise<number> | void{}

/** This function should return a Promise that will resolve with an empty Error as output
 *
 * Help: See how to build error here
 * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
 */
function promiseRejectingWithError(): Promise<Error> | void{}

export default {
  promiseResolving,
  promiseRejecting,
  promiseResolvingWith3,
  promiseRejectingWithError,
}
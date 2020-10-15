# Promise Lab in TypeScript

Welcome in this **Promise lab**.

You'll discover the so-called Promise mechanism in TypeScript.

## :test_tube: Enter the Promise Lab :microscope:

**You can follow the explanations to learn about Promises or you can just do the exercises to learn how to manipulate them.**

The structure is quite self-explanatory. In each set of exercises you will find an `answers.ts` file in which you will have to implement your answer for each function. A file `answer.test.ts` will be useful to test your answers.

For each exercise, you have a script that can be executed to see if you have successed or not. Simply run `npm run <name_of_the_exercice>` where the name is one of the following:

- [01-creating-promises](/01-creating-promises/)
- [02-using-promises](/02-using-promises/)
- [03-chaining-promises](/03-chaining-promises/)
- [04-further-usage](/04-further-usage/)

---

## Introduction

The Promise mechanism is used to perform action in an asynchronous way in Javascript (and TypeScript of course).

This object will represent an action that is to be either resolved, if everything went right, or rejected, if an error occured.

It will have 3 distinct status:

- Pending
- Fulfilled (*or resolved*)
- Rejected

Initially the Promise has the **pending** status. It means that the action you asked to be done is not yet finished (not resolved nor rejected)

When the action is correclty done, you'll see the **fulfilled** status and you will gain access to the return value of the action. However, if something went wrong during the execution of the desired task, you'll see the **rejected** status and will gain access to the reason of the failure.

But let's walk through everything step-by-step. First, you need to see and learn how the adventure of Promise began :

**:baby_bottle: The Creation of any Promise instance ! :baby_bottle:**

[:point_right: Next step : Creating a Promise :point_left:](/01-creating-promises/)

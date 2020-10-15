# 01 - Creating Promises

In order to use Promises, you first need to create them.

> :warning: **Please be aware that you will not do this step manually everytime you will use Promises. Most libraries create Promises for you and basically returns this type of objects or other that inherits from Promise**
>
> <sub>(though, IMHO, it's important to know how creation is working)</sub>

As expected, when you create a Promise you will need to give the function, the action, that must be performed asynchronously.

Let's see a basic exemple :

```typescript
const promise = new Promise((resolve, reject) =>{
  setTimeout(() => resolve(), 2000);
})
```

As you can see, the **constructor takes a function with two parameters, *resolve* and *reject***.
These are two functions that you can access to actually tell if the action went well or not.

> Remember that you are here the creator of the Promise. Hence, you are to decide wether or not the action went well, and if the Promise instance should be rejected or resolved.

In my example I decided to execute the **setTimeout** function that will resolve the action after a 2-seconds delay.

Another version, with a rejection would be the following:

```typescript
const promise = new Promise((resolve, reject) =>{
  setTimeout(() => reject(), 2000);
})
```

---

## Are all data lost forever?

My last example is actually useless outside of showing the global structure because it does not give anything to the resolve or reject methods.

An important aspect of Promise is gathering action result (wether it is after rejection or not) !

Let's say you want to make asynchronous calls to an API, it is quite obvious that you will want to do something with this result.

This can be made by **giving the resolve function some data or the reject function some reason why the action failed**

```typescript
const promise = new Promise((resolve, reject) =>{
  setTimeout(
    () => resolve("Good Job, here is your potato"),
    2000
  );
})
```

```typescript
const promise = new Promise((resolve, reject) =>{
  setTimeout(
    () => reject(new Error("You did not read everything, did you ?")),
    2000
  );
})
```

We will see how to access these informations in the second part of this lab.

---

### Hands on keyboard ! :keyboard:

Check the file `01-creating-promise/answer.ts` to create your first promises.

---

### Want to learn more?

[:point_right: Read this :point_left:](./furtherReading.md)

---

[:point_right: Next step : Using a Promise :point_left:](/02-using-promises/)

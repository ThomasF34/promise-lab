import answers from './answers';

describe("Creating Promises", () => {
  test('Returns a Promise that should resolve without outputs', (done) => {
    const result = answers.promiseResolving();

    expect(result).toBeInstanceOf(Promise);

    result.then((value) => {
      expect(value).toBeUndefined();
      done()
    })
  });

  test('Returns a Promise that should reject without outputs', (done) => {
    const result = answers.promiseRejecting();

    expect(result).toBeInstanceOf(Promise);

    result
      .then(() => fail('The Promise should not be resolved but rejected !'))
      .catch((err) => {
        expect(err).toBeUndefined();
        done()
    });
  });

  test('Returns a Promise that should resolve with the number 3', (done) => {
    const result = answers.promiseResolvingWith3();

    expect(result).toBeInstanceOf(Promise);

    result.then((value) => {
      expect(value).toBe(3);
      done();
    })
  });

  test('Returns a Promise that should reject with empty Error', (done) => {
    const result = answers.promiseResolving();

    expect(result).toBeInstanceOf(Promise);

    result
      .then(() => fail('The Promise should not be resolved but rejected !'))
      .catch((err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBeUndefined();
        done()
    });
  });
})
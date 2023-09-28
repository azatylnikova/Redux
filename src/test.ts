function* generatorFunction() {
  //// генератор это ф-я ( помеченая звездочкой) и которая возвращает нам какие-то данные поэтапно
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const iter = generatorFunction();
console.log(iter.next(), "iter.next()");

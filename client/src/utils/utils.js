
export const equalPartArray = (items, n) => 
  new Array(Math.ceil(items.length / n))
  .fill()
  .map(_ => items.splice(0, n))
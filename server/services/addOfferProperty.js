function palindrome(productKey) {
  var re = /[\W_]/g;

  if(typeof productKey == "number" && productKey > 9){
    const reverseStr = productKey.toString().split('').reverse().join('');
    return reverseStr === productKey.toString();
  }

  if(typeof productKey == "string"){
    const lowRegStr = productKey.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
  }
}

const addOfferProperty = products => {

  products.forEach((product, i) => {

    if(palindrome(product.id))
      products[i]._doc.offer = true;

    if(!product.offer && palindrome(product.brand))
      products[i]._doc.offer = true;

    if(!product.offer && palindrome(product.description))
      products[i]._doc.offer = true;

  });

  return products;
}

module.exports = addOfferProperty;
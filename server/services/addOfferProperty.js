function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

const addOfferProperty = products => {
  products.forEach((product, i) => {
    // if(palindrome(p.id)){
    //   p.offer = true
    // }
    if(!product.offer && palindrome(product.brand)){

      products[i]._doc.offer = true;
      console.log(products[i])
    }
    if(!product.offer && palindrome(product.description)){
      products[i]._doc.offer = true
    }
  });
  return products;
}


module.exports = addOfferProperty;
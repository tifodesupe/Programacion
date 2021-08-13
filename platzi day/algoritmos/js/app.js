function el2MasGrande(arrayNum) {
  let uno = arrayNum[0]
  let dos = 0
  for (let i = 0; i < arrayNum.length; i++) {
    if(arrayNum[i] >= uno){
      dos = uno
      uno = arrayNum[i]
    }else if(arrayNum[i] >= dos && arrayNum[i] <= uno){
      arrayNum[i]
    }
  }
  return dos
}

let numArray = [24,8,4,10,2,9,11]
document.write(el2MasGrande(numArray))
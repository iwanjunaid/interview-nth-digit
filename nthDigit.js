module.exports = function (nth) {
  let digitGroup = 1;
  let limit = 0;
  let digitSubGroupPos = 0;
  let digitSubGroupIndex = 0;
  let value = 0;
  let firstValueIndex = 0;
  let result = -1;
  
  while (true) {
    oldLimit = limit;
    limit = digitGroup * 9 * (Math.pow(10, digitGroup - 1));

    if (nth <= limit) {
      digitSubGroupPos = nth - oldLimit;
      digitSubGroupIndex = Math.ceil(digitSubGroupPos / digitGroup);
      value = (oldLimit) + (digitSubGroupIndex);
      firstValueIndex = digitSubGroupPos - (((digitSubGroupIndex - 1) * digitGroup) + 1) + 1;
      result = parseInt(value.toString().charAt(firstValueIndex - 1));

      break;
    }

    digitGroup++;
  }

  return result;
}

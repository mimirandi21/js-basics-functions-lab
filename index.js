function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  return Math.abs(num1 - num2) * 264;
}

function calculatesFarePrice(num1, num2) {
  let distance = distanceTravelledInFeet(num1, num2);
  let price = (distanceTravelledInFeet(num1, num2) - 400) * 0.02;
  if (distance <= 400) {
    return 0;
  } else if (distance < 2000) {
    return price;
  } else if (distance < 2500) {
    return 25;
  } else {
    return `cannot travel that far`;
  }
}

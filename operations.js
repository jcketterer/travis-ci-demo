function add(a = 0, b = 0) {
  return a + b
}

function subtract(a = 0, b = 0) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function average(...nums) {
  if (nums.length === 0) return 0
  const total = nums.reduce(function (acc, num) {
    return add(acc, num)
  })
  return total / nums.length
}

module.exports = { add, subtract, multiply, average }

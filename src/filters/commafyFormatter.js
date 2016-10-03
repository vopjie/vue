module.exports = function (number) {
  var result
  if (number === null || number === '' || isNaN(number)) {
    result = '-'
  } else {
    // 去除空格
    number = number.replace(/[ ]/g, '')
    // 2.针对是否有小数点，分情况处理
    var index = number.indexOf('.')
    if (index === -1) {
      // 无小数点
      let reg = /(-?\d+)(\d{3})/
      while (reg.test(number)) {
        result = number.replace(reg, '$1,$2')
      }
    } else {
      var intPart = number.substring(0, index)
      var pointPart = number.substring(index + 1, number.length)
      let reg = /(-?\d+)(\d{3})/
      while (reg.test(intPart)) {
        intPart = intPart.replace(reg, '$1,$2')
      }
      result = intPart + '.' + pointPart
    }
  }
  return result
}

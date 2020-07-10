'use strict'
// 日期格式化
export const dateFormat = (date, fmt = 'YYYY-MM-DD HH:mm:ss') => {
    if (!date) {
      return ''
    }
    if (typeof date === 'string') {
      date = new Date(date.replace(/-/g, '/'))
    }
    if (typeof date === 'number') {
      date = new Date(date)
    }
    var o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }
    var week = {
      '0': '\u65e5',
      '1': '\u4e00',
      '2': '\u4e8c',
      '3': '\u4e09',
      '4': '\u56db',
      '5': '\u4e94',
      '6': '\u516d'
    }
    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }

  /**
 * 
 * 12345 => $12,345.00
 *
 * @param {String} symbol
 * @param {Number} decimals Decimal places
 * @param {Object} options
 */
//  货币格式化处理
export const currency = (value, symbol, decimals, options) => {
  var thousandsSeparator, symbolOnLeft, spaceBetweenAmountAndSymbol
  var digitsRE = /(\d{3})(?=\d)/g
  options = options || {}
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  symbol = symbol != null ? symbol : '$'
  decimals = decimals != null ? decimals : 2
  thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ','
  symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true
  spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false
  var stringified = Math.abs(value).toFixed(decimals)
  stringified = options.decimalSeparator ?
    stringified.replace('.', options.decimalSeparator) :
    stringified
  var _int = decimals ?
    stringified.slice(0, -1 - decimals) :
    stringified
  var i = _int.length % 3
  var head = i > 0 ?
    (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : '')) :
    ''
  var _float = decimals ?
    stringified.slice(-1 - decimals) :
    ''
  symbol = spaceBetweenAmountAndSymbol ?
    (symbolOnLeft ? symbol + ' ' : ' ' + symbol) :
    symbol
  symbol = symbolOnLeft ?
    symbol + head +
    _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float :
    head +
    _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol
  var sign = value < 0 ? '-' : ''
  return sign + symbol
}

/**
 * 
 * 12345 => $12,345.00
 *
 * @param {String} symbol
 * @param {Number} decimals Decimal places
 * @param {Object} options
 */

export const remainDateFormat = (value, mode) => {

  var hour = 0,
    minute = 0,
    second = 0
  if (value >= 60) {
    minute = Math.floor(value / 60)
    second = value % 60
    if (minute >= 60) {
      hour = Math.floor(minute / 60)
      minute = minute % 60
    } else {
      hour = 0
    }
  } else {
    second = value
    hour = 0
    minute = 0
  }
  hour = parseInt(hour) < 10 ? '0' + hour : hour
  minute = parseInt(minute) < 10 ? '0' + minute : minute
  second = parseInt(second) < 10 ? '0' + second : second

  return mode == 'html' ? `<span>${hour}</span><i></i><span>${minute}</span><i></i><span>${second}</span>` : `${hour}:${minute}:${second}`
}

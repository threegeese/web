/**
 * 如果传入字符串是一个有效的美国电话号码，则返回 true
 * https://freecodecamp.cn/challenges/validate-us-telephone-numbers
 */
function telephoneCheck(p_num){

    /**
     * 这两个正则表达式能通过测试,但好像不完美
     * return /^1?\s?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/.test(p_num);
     * return /^1?\s?(\d{3}|\(\d{3}\))(([- ]?\d{3})){2}\d$/.test(p_num);
     */

    /**
     * 1. '^1?\s?',匹配1、1+空格、空格开头.(不完美,只允许1、1+空格开头更好)
     * 2. '((\d{3}([- ]?)\d{3}\3)|(\(\d{3}\)[ ]?\d{3}-))',
     *   i. '(\d{3}([- ]?)\d{3}\3)',匹配没有括号的情况
     *   ii. '(\(\d{3}\)[ ]?\d{3}-)',匹配有括号的情况
     * 3. '\d{4}$',匹配结尾
     * return /^1?\s?((\d{3}([- ]?)\d{3}\3)|(\(\d{3}\)[ ]?\d{3}-))\d{4}$/.test(p_num);
     */

    return /^(1|(1 ))?((\d{3}([- ]?)\d{3}\5)|(\(\d{3}\)[ ]?\d{3}-))\d{4}$/.test(p_num);
}
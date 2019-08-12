/**
 * compose函数的实现，仅需将reduce替换为reduceRight即可
 * 现在下面体现的是管道函数 从左至右运行函数代码。
 */
module.exports.pipe = (...fns) => {
    return function(x){
        return fns.reduce(function(arg,fn){
            return fn(arg);
        },x)
    }
}
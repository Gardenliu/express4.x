/**
 * 通过该模型与mongodb数据库进行数据库连接
 * Created by Administrator on 2015/12/16.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose=mongoose;
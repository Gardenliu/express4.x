/**
 * Created by Administrator on 2015/12/16.
 * 通过user模型与mongodb进行数据库映射
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userScheMa=new Schema({
    username:String,
    password:String
});
exports.user=mongoose.model('users',userScheMa);
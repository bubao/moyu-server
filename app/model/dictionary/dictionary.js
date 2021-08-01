/**
 * @description        词汇表字典库
 * @author             shuxiaokai
 * @create             2021-03-19 22:05
 */

module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;
	const dictionarySchema = new Schema({
		cnName: { //中文名称
			type: String,
		},
		synonym: { //同义词
			type: Array
		},
		enName: { //英文名称
			type: String,
		},
		example: { //例子
			type: String,
		},
		refer: { //标准参考链接
			type: String
		},
		remark: { //备注信息
			type: String,
		},
		tags: { //标签信息
			type: Array,
		},
		creator: { //词汇创建者
			type: String,
		},
		maintainer: { //更新人员维护人员
			type: String
		},
		enabled: { //使能
			type: Boolean,
			default: true
		}
	}, { timestamps: true });

	return mongoose.model("dictionary", dictionarySchema);
};

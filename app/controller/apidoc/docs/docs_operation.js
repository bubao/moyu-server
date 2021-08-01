/**
    @description  文档相关操作控制器
    @author        shuxiaokai
    @create       2021-03-01 13:54"
*/

const Controller = require("egg").Controller;

class docsOperationController extends Controller {
	/** 
     * @description        导出为html
     * @author              shuxiaokai
     * @create             2020-11-13 09:24
     * @param  {String}    projectId 项目id
     * @param  {Array}     selectedNodes 被选择的需要导出的节点
     * @return {String}    返回字符串
     */
	async exportAsHTML() {
		try {
			const params = this.ctx.request.body;
			const reqRule = {
				projectId: {
					type: "string"
				},
				selectedNodes: {
					type: "array",
					required: false,
				},
			};
			this.ctx.validate(reqRule, params);
			const result = await this.ctx.service.apidoc.docs.docsOperation.exportAsHTML(params);
			this.ctx.body = result;
		} catch (error) {
			this.ctx.helper.throwError(error);
		}
	}

	/** 
     * @description        导出为摸鱼文档
     * @author              shuxiaokai
     * @create             2020-11-13 09:24
     * @param  {String}    projectId 项目id
     * @param  {Array}     selectedNodes 被选择的需要导出的节点
     * @return {String}    返回字符串
     */
	async exportAsMoyuDoc() {
		try {
			const params = this.ctx.request.body;
			const reqRule = {
				projectId: {
					type: "string"
				},
				selectedNodes: {
					type: "array",
					required: false,
				},
			};
			this.ctx.validate(reqRule, params);
			const result = await this.ctx.service.apidoc.docs.docsOperation.exportAsMoyuDoc(params);
			this.ctx.body = result;
		} catch (error) {
			this.ctx.helper.throwError(error);
		}
	}

	/**
     * @description        导入文档
     * @author             shuxiaokai
     * @create             2021-03-01 14:04
     * @param {any}        projectId - 项目id
     * @param {boolean}    cover - 是否覆盖原有数据
     * @param {moyu}       moyuData - 摸鱼接口文档类型数据
     * @return {String}    返回字符串
     */
	async importAsMoyuDoc() {
		try {
			const params = this.ctx.request.body;
			const reqRule = {
				projectId: {
					type: "string"
				},
				cover: {
					type: "boolean",
				},
				moyuData: {
					type: "object"
				},
			};
			this.ctx.validate(reqRule, params);
			const result = await this.ctx.service.apidoc.docs.docsOperation.importAsMoyuDoc(params);
			this.ctx.helper.successResponseData(result);
		} catch (error) {
			this.ctx.helper.throwError(error);
		}
	}

	/** 
     * @description        生成在线链接
     * @author             shuxiaokai
     * @create             2020-11-13 09:24
     * @param  {String}    projectId 项目id
     * @param  {String?}   password 密码
     * @param  {String?}   maxAge 过期时间
     * @param  {Array}     selectedDocs 被选择的需要导出的节点
     * @return {String}    返回在线链接
     */
	async exportAsOnlineDoc() {
		try {
			const params = this.ctx.request.body;
			const reqRule = {
				projectId: {
					type: "string"
				},
				password: {
					type: "string",
					required: false,
				},
				maxAge: {
					type: "number",
					convertType: "number",
					required: false
				},
				selectedDocs: {
					type: "array",
					required: false,
				},
			};
			this.ctx.validate(reqRule, params);
			const result = await this.ctx.service.apidoc.docs.docsOperation.exportAsOnlineDoc(params);
			this.ctx.helper.successResponseData(result);
		} catch (error) {
			this.ctx.helper.throwError(error);
		}
	}

	/** 
     * @description        fork项目中部分文档
     * @author             shuxiaokai
     * @create             2020-11-13 21:24
     * @param  {String}    sourceProjectId 源项目id
     * @param  {String}    targetProjectId 目标项目id
     * @param  {String}    targetMountedId 挂载点文档id
     * @param  {Number}    targetNodeSort 目标节点排序
     * @param  {Array}     selectedDocIds 被选择的需要导出的节点
     * @param  {String}    sourceRootId 源节点根元素id
     * @return {String}    返回字符串
     */
	async forkDocs() {
		try {
			const params = this.ctx.request.body;
			const reqRule = {
				sourceProjectId: {
					type: "string"
				},
				targetProjectId: {
					type: "string",
				},
				targetMountedId: {
					type: "string",
					required: false
				},
				selectedDocIds: {
					type: "array",
				},
				sourceRootId: {
					type: "string"
				},
				targetNodeSort: {
					type: "number"
				},
			};
			this.ctx.validate(reqRule, params);
			const result = await this.ctx.service.apidoc.docs.docsOperation.forkDocs(params);
			this.ctx.helper.successResponseData(result);
		} catch (error) {
			this.ctx.helper.throwError(error);
		}
	}
}

module.exports = docsOperationController;

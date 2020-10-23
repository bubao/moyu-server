/** 
    @description  项目相关控制器
    @author       shuxiaokai
    @create        2020-10-08 22:10
*/


const Controller = require("egg").Controller;

class ProjectController extends Controller {
    /** 
        @description  获取项目列表
        @author       shuxiaokai
        @create        2020-10-08 22:10
        @param {Number?}           pageNum 当前页码
        @param {Number?}           pageSize 每页大小   
        @param {number?}           startTime 创建日期     @remark 默认精确到毫秒       
        @param {number?}           endTime 结束日期       @remark 默认精确到毫秒
        @param {String?}           projectName 项目名称 
        @param {String?}           projectType<?String>   项目类型    @remark 不传获取全部类型,可以多选类型,以逗号分隔
        @return       null
    */

    async getProjectList() { 
        try {
            const params = this.ctx.query;
            const reqRule = {
                pageNum: {
                    type: "number",
                    convertType: "number",
                    required: false
                },
                pageSize: {
                    type: "number",
                    convertType: "number",
                    required: false
                },
                startTime: {
                    type: "number",
                    convertType: "number",
                    required: false
                },
                endTime: {
                    type: "number",
                    convertType: "number",
                    required: false
                },
                projectName: {
                    type: "string",
                    convertType: "string",
                    required: false
                },
                projectType: {
                    type: "string",
                    required: false
                }
            };
            this.ctx.validate(reqRule, params);
            const result = await this.ctx.service.apidoc.project.project.getProjectList(params);
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }

    /**
        @description  获取项目基本信息
        @author        shuxiaokai
        @create        2020-10-08 22:10
        @param {Number?}           _id 项目id
        @return       null
    */

    async getProjectInfo() { 
        try {
            const params = this.ctx.query;
            const reqRule = {
                _id: {
                    type: "string",
                },
            };
            this.ctx.validate(reqRule, params);
            const result = await this.ctx.service.apidoc.project.project.getProjectInfo(params);
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }


    /** 
        @description  获取项目列表枚举
        @author       shuxiaokai
        @create        2020-10-08 22:10
        @return       null
    */

    async getProjectEnum() { 
        try {
            const result = await this.ctx.service.apidoc.project.project.getProjectEnum();
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }
    /** 
        @description  新增项目
        @author       shuxiaokai
        @create        2020-10-08 22:10
        @param {String?}           projectName 项目名称
        @param {String?}           remark 备注       
        @param {Array<Object>}     members 成员       
        @return       null
    */

    async addProject() { 
        try {
            const params = this.ctx.request.body;
            const reqRule = {
                projectName: {
                    type: "string",
                    required: true
                },
                remark: {
                    type: "string",
                    required: false
                },
                members: {
                    type: "array",
                    required: false,
                    default: []
                },
            };
            this.ctx.validate(reqRule, params);
            const result = await this.ctx.service.apidoc.project.project.addProject(params);
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }

    /** 
        @description  删除项目
        @author       shuxiaokai
        @create        2020-10-08 22:10
        @param {Array<String>}      ids 项目id数组
        @return       null
    */

    async deleteProjectList() { 
        try {
            const params = this.ctx.request.body;
            const reqRule = {
                ids: {
                    type: "array",
                    itemType: "string"
                },
                
            };
            this.ctx.validate(reqRule, params);
            const result = await this.ctx.service.apidoc.project.project.deleteProjectList(params);
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }
    /** 
        @description  修改项目基本信息
        @author       shuxiaokai
        @create        2020-10-08 22:10
        @param {String}      id 项目id
        @param {String}      projectName 项目名称
        @param {Array}       members 成员信息
        @param {String}      remark 项目备注
        @return       null
    */

    async editProject() { 
        try {
            const params = this.ctx.request.body;
            const reqRule = {
                _id: {
                    type: "string",
                },
                projectName: {
                    type: "string",
                    required: false
                },
                remark: {
                    type: "string",
                    required: false
                },
                members: {
                    type: "array",
                    required: false
                },
            };
            this.ctx.validate(reqRule, params);
            const result = await this.ctx.service.apidoc.project.project.editProject(params);
            this.ctx.helper.successResponseData(result);
        } catch (error) {
            this.ctx.helper.throwError(error);
            return;
        }
    }
}

module.exports = ProjectController;


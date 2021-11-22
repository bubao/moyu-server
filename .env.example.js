/**
 * @Description: 
 * @author: bubao
 * @Date: 2021-11-22 23:37:10
 * @LastEditors: bubao
 * @LastEditTime: 2021-11-23 00:17:03
 */
module.exports = {
	cluster: {
		listen: {
			path: "",
			port: 7004,
			hostname: "0.0.0.0",
		}
	},
	jwtConfig: {
		secretOrPrivateKey: "moyu", //私钥或者
		expiresIn: `${1000 * 60 * 60 * 24 * 7}`, //过期时间
	},
	// multipart :{
	//     mode: "file",
	//     fileSize: "5mb",
	//     fileExtensions: ["xls", "xlsx"],
	//     tmpdir: path.join(os.tmpdir(), "egg-multipart-tmp", appInfo.name),
	//     cleanSchedule: {
	//         cron: "0 30 4 * * *",
	//     },
	// },
	mongoose: {
		url: "mongodb://127.0.0.1:27017",
		options: {
			user: "",
			pass: "",
			useUnifiedTopology: true
		},
		plugins: []
	},
	//sms短信服务
	smsConfig: {
		base: { //基础信息 
			accessKeyId: "",
			accessKeySecret: "",
			endpoint: "",
			apiVersion: "2017-05-25"
		},
		template: { //模板配置
			RegionId: "",
			SignName: "",
			TemplateCode: "",
		},
		maxAge: 1000 * 60 * 5, //五分钟过期
	},
	//oss服务
	ossConfig: {
		base: { //基础信息 
			accessKeyId: "",
			accessKeySecret: "",
			arn: "",
			bucket: "",
			region: ""
		},
		policy: { //授权策略
			Statement: [
				{
					Action: [
						"oss:GetObject",
						"oss:PutObject",
						"oss:ListParts",
						"oss:ListObjects"
					],
					Effect: "Allow",
					Resource: []
				}
			],
			Version: "1"
		}
	},
	//日志模块 https://eggjs.org/zh-cn/core/logger.html
	logger: {
		dir: `../moyu-logs`,
		appLogName: "app-web.log",
		coreLogName: "web.log",
		agentLogName: "agent.log",
		errorLogName: "error.log",
		outputJSON: true,
	},
	//bodyparser
	bodyParser: {
		jsonLimit: "3mb",
	}
}
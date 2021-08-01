
module.exports = options => {
	return async function permission(ctx, next) {
		const requestUrl = ctx.request.url.replace(/\?.*$/g, "");
		let serverRoutes = []; //用户所拥有得权限列表
		try {
			const isInWhiteList = options.whiteList.find(val => {
				const reg = new RegExp(val);
				return requestUrl.match(reg);
			});
			if (isInWhiteList) { //路由白名单放行
				await next();
				return;
			} else if (!ctx.session.userInfo) {
				ctx.helper.throwCustomError("登录过期", 4100);
			} else if (options.free) { //free模式全部放行
				await next();
				return;
			}
			const loginName = ctx.session.userInfo.loginName;
			const userInfo = await ctx.model.Security.User.findOne({ loginName });
			if (!userInfo) {
				ctx.helper.throwCustomError("登录过期", 4100);
			}
			const allServerRoutes = await ctx.model.Security.ServerRoutes.find({}, { path: 1, method: 1 });
			const roleIds = userInfo.roleIds;
            
			for (let i = 0; i < roleIds.length; i++) {
				const roleInfo = await ctx.model.Security.Role.findById({ _id: roleIds[i] });
				if (roleInfo) {
					const serverRoutesPathes = roleInfo.serverRoutes.map(val => {
						return allServerRoutes.find(val2 => {
							return val2._id.toString() === val;
						});
					});
					serverRoutes = serverRoutes.concat(serverRoutesPathes);
				}
			}
			serverRoutes = ctx.helper.unique(serverRoutes, "id");
			const reqMethod = ctx.request.method.toLowerCase();
			const hasPermission = serverRoutes.find(val => {
				return val.method === reqMethod && val.path === requestUrl;
			});
			if (!hasPermission) {
				ctx.helper.throwCustomError("暂无权限", 4002);
			}
			await next();            
		} catch (error) {
			ctx.helper.throwError(error);
		}
	};
};

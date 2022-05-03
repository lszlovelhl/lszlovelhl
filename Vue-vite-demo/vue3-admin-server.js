const server = require('pushstate-server');
server.start({
    port: 3000,
    // build的输出目录，与dist同级
    directory: './dist'
});

/**
 * pm2常用命令
 *  // 启动应用并设置name
 *  pm2 start app.js --name app
 *  // 查看启动列表
 *  pm2 list
 *  // 停止指定应用
 *  pm2 stop <appName>
 *  // 重启指定应用
 *  pm2 reload|restart <appName>
 *  // 删除指定应用
 *  pm2 delete <appName>
 *  // 查看指定应用的日志，即标准输出和标准错误
 *  pm2 logs <appName>
 */
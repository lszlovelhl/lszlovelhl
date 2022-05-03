import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 根目录，即index.html所在目录，默认值
  // root: process.cwd(),
  // 打包路径，默认值 /
  // base: "/",
  // 静态资源文件夹，构建时原样被拷贝到outDir根目录，默认
  // publicDir: "public",
  // build: {
    // 设置最终构建的浏览器兼容目标
    // 可以写esnext。表示适配最新版本
    // target: "esnext",
    // 指定输出路径
    // outDir: "dist",
    // 指定生成静态资源的存放路径（相对于build.outDir）
    // assetsDir: "assets",
    // 构建时的压缩方式
    // minify: 'terser'
  // },
  // server: {
    // 指定服务器端口
    // port: 3000,
    // 在服务器启动时自动在浏览器中打开应用程序
    // open: true,
    // 为开发服务器配置自定义代理规则
    // proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567/foo',
      // 选项写法
      // '/api': {
        // 代理网址
        // target: 'http://123.56.85.24:5000',
        // 默认false表示请求头中host是浏览器发送过来的host，设置为true表示转发请求头中host会设置成上面target参数的值
        // changeOrigin: true,
        // 重写URL，这里是删除/api/
        // rewrite: (path) => path.replace(/^\/api/,'')
        // },
    // },
    // 为开发服务器配置CORS，默认启用并允许任何源
    // cors: true
  // },
  // 插件数组
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, '.', 'src'),
      '@components': path.join(__dirname, '.', 'src/components'),
      '@utils': path.join(__dirname, '.', 'src/utils')
    }
  },
  // 调整控制台输出的级别
  // logLevel: 'info'
})

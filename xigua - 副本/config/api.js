const root = process.env.API_ROOT; //在开发模式下为会调用代理  未用
export const getList = root

/*

proxyConfig
module.exports = {
  proxy: {
    '/': {    //将www.exaple.com印射为/apis  
      target: 'http://www.lqpph.com',  // 接口域名
      secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      pathRewrite: {   //  如果本身的接口地址就有 '/api' 这种通用前缀，也就是说https://www.exaple.com/api，就可以把 pathRewrite 删掉
        '^/': '/'   //需要rewrite的,
      }
    }
  }
}*/
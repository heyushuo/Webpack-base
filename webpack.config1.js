module.exports = {
  devtool: 'eval-source-map',//这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件    “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  
  //本地服务器
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } ,
  
  //模块
  module:{
  	rules:[
  		{
  			test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "env", "react"
                ]
            }
        },
        exclude: /node_modules/    //不解析这个文件夹里的内容（排除）
  		},
  		//1.这是一种css-loader的写法
  		{
  			test:/\.css$/,
  			use:[
  				{loader:"style-loader"},  //style-loader则将解析后的样式嵌入js代码   要把css-loader放到前边
  				{loader:"css-loader"},    //css-loader用于解析
  				{loader:"postcss-loader"},
  				{loader:"less-loader"}
  			]
  		}
  		//2.这是第二种css-loader的写法
  	{
  				test:/\.css$/,
  				loader:"style-loader!css-loader!postcss!less"
  		}
  	]
  }
}

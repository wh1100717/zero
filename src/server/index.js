import 'babel/polyfill'
import express from 'express'
import path from 'path'

import config from './entry/config'
import expressConfig from './entry/express'
import route from './routes'

const app = express()

// 配置静态资源文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 配置views目录
app.set('views', path.join(__dirname, 'views'))

// Express初始化配置
expressConfig(app)

// Express初始化路由配置
route(app)

app.listen(config.web.port, () => console.log('http service started at ', config.web.port))

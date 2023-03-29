import detail from './detail.json';
import Mock from 'mockjs'

// webpack默认对外暴露图片和json数据
import banner from './banners.json'

import floor from "./floors.json";


Mock.mock("/mock/banner",{code:200,data:banner})
// 模拟服务器
Mock.mock("/mock/floor",{code:200,data:floor})

Mock.mock("/mock/item",{code:200,data:detail})
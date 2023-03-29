import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'

export default [
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        name: 'home',
        meta: { show: true }
    }
    ,
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        // params传参占位符必须有
        path: '/search/:keyWord?',
        name: 'search',
        component: Search,
        // 这个meta控制footer内容的显示
        meta: { show: true }
    },
    {
        // 一访问就跑到根目录
        path: '*',
        redirect: "/home"
    }
]
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/about/About'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'


//二级导航
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import phone from './components/about/Contact/phone'
import personName from './components/about/Contact/personName'



//路由跳转配置
//export暴露接口
export const routes = [
    {path:'/',name:"homelink",components:{
       //default: 默认为首页
        default:Home,
        'orderingGuide':OrderingGuide,
        'history':History,
        'delivery':Delivery
    }},
    {path:'/menu',name:"menulink",component:Menu},
    {path:'/about',name:"aboutlink",component:About,redirect:'/about/contact', children:[
        {path:'/about/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[
        {path:'/phone',name:"phoneNumber",component:phone},
        {path:'/personname',name:"personName",component:personName}
      ]},
      {path:'/history',name:'historyLink',component:History},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
    ]},
    {path:'/admin',name:"adminlink",component:Admin},
    {path:'/login',name:"loginlink",component:Login},
    {path:'/register',name:"registerlink",component:Register},
    {path:'*',redirect:'/'}
   ]

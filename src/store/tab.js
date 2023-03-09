// 存储主页菜单的数据和操作
import Cookie from "js-cookie"
export default {
    namespaced: true,//开启命名空间
    // 存储数据
    state: {
        isCollapse: false,
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: "home",
        menu: [],
    },
    mutations: {
        // 打开关闭菜单栏
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 选则菜单栏
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val.name
                const result = state.tabList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabList.push(val)
                }
            } else {
                state.currentMenu = "home"
            }
        },
        // 关闭面包屑
        closeTag(state, val) {
            const result = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(result, 1)
        },
        // 设置菜单
        setMenu(state, val) {
            state.menu = val
            // 设置浏览器的Cookie的menu
            Cookie.set('menu', JSON.stringify(val)) //字符串化
        },
        // 清除菜单
        clearMenu(state) {
            state.menu = []
            // 清除浏览器的Cookie的menu
            Cookie.remove('menu')
        },
        // 增加菜单
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu')) //把浏览器的字符串menu转换成数组赋值给menu
            state.menu = menu
            const menuArray = []
            // 处理从浏览器返回的menu
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            // 路由动态台添加,把每个路由都添加到Main主路由里面
            menuArray.forEach(item => {
                // console.log(item);
                router.addRoute('Main', item)
            })
            // console.log(menuArray);
        }
    }
}
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            component: (resolve) => {
                require(['../components/index'], resolve)
            }
        }, {
            path: '/news',
            name: 'News',
            component: (resolve) => {
                require(['../components/News'], resolve)
            }
        }, {
            path: '/newsdel/:id',
            name: 'Newsdel',
            component: (resolve) => {
                require(['../components/Newsdel'], resolve)
            }
        }, {
            path: '/product',
            name: 'Product',
            component: (resolve) => {
                require(['../components/Product'], resolve)
            }
        }, {
        path: '/technology',
        name: 'Technology',
        component: (resolve) => {
            require(['../components/Technology'], resolve)
        }
    },{
        path: '/index',
        name: 'index',
        component: (resolve) => {
            require(['../components/index'], resolve)
        }
    },
        {
            path: '/opencommunity',
            name: 'OpenCommunity',
            component: (resolve) => {
                require(['../components/OpenCommunity'], resolve)
            }
        }
        , {
            path: '/case',
            name: 'Case',
            component: (resolve) => {
                require(['../components/Case'], resolve)
            }
        }, {
            path: '/caseDetail/:id',
            name: 'CaseDetail',
            component: (resolve) => {
                require(['../components/CaseDetail'], resolve)
            }
        }, {
            path: '/goto',
            name: 'Goto',
            component: (resolve) => {
                require(['../components/Goto'], resolve)
            }
        }, {
            path: '/help',
            name: 'Help',
            component: (resolve) => {
                require(['../components/Help'], resolve)
            }
        }, {
            path: '/recruitment',
            name: 'Recruitment',
            component: (resolve) => {
                require(['../components/Recruitment'], resolve)
            }
        }, {
            path: '/about',
            name: 'About',
            component: (resolve) => {
                require(['../components/About'], resolve)
            }
        }, {
            path: '/study',
            name: 'Study',
            component: (resolve) => {
                require(['../components/Study'], resolve)
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: (resolve) => {
                require(['../components/Login'], resolve)
            }
        },{
            path: '/contact',
            name: 'Contact',
            component: (resolve) => {
                require(['../components/Contact'], resolve)
            }
        },{
            path: '/corporateProfile',
            name: 'CorporateProfile',
            component: (resolve) => {
                require(['../components/CorporateProfile'], resolve)
            }
        },{
            path: '/development',
            name: 'Development',
            component: (resolve) => {
                require(['../components/Development'], resolve)
            }
        },{
            path: '/education',
            name: 'Education',
            component: (resolve) => {
                require(['../components/Education'], resolve)
            }
        },{
            path: '/supplier',
            name: 'Supplier',
            component: (resolve) => {
                require(['../components/Supplier'], resolve)
            }
        },
        {
            path: '/appDownload',
            name: 'AppDownload',
            component: (resolve) => {
                require(['../components/AppDownload'], resolve)
            }
        }, {
            path: '/robotOperateSystem',
            name: 'RobotOperateSystem',
            component: (resolve) => {
                require(['../components/RobotOperateSystem'], resolve)
            }
        }, {
            path: '/cloudPlatform',
            name: 'CloudPlatform',
            component: (resolve) => {
                require(['../components/CloudPlatform'], resolve)
            }
        },{
            path: '/dataPlatform',
            name: 'DataPlatform',
            component: (resolve) => {
                require(['../components/DataPlatform'], resolve)
            }
        }, {
            path: '/scenarioService',
            name: 'ScenarioService',
            component: (resolve) => {
                require(['../components/ScenarioService'], resolve)
            }
        }, {
            path: '/hardwareDriver',
            name: 'HardwareDriver',
            component: (resolve) => {
                require(['../components/HardwareDriver'], resolve)
            }
        }, {
            path: '/admin',
            name: 'Admin',
            // 需要登录才能进入的页面可以增加一个meta属性
            meta: {
                requireAuth: false
            },
            component: (resolve) => {
                require(['../components/Admin'], resolve)
            },
            children: [{
                path: '/admin/user',
                name: 'User',
                component: (resolve) => {
                    require(['../components/admin/User'], resolve)
                }
            }, {
                path: '/admin/news',
                name: 'AdminNews',
                component: (resolve) => {
                    require(['../components/admin/News'], resolve)
                }
            }, {
                path: '/admin/recruitment',
                name: 'AdminRecruitment',
                component: (resolve) => {
                    require(['../components/admin/Recruitment'], resolve)
                }
            }, {
                path: '/admin/messages',
                name: 'Messages',
                component: (resolve) => {
                    require(['../components/admin/Messages'], resolve)
                }
            }, {
                path: '/admin/demand',
                name: 'Demand',
                component: (resolve) => {
                    require(['../components/admin/Demand'], resolve)
                }
            }, {
                path: '/admin/cases',
                name: 'Cases',
                component: (resolve) => {
                    require(['../components/admin/Cases'], resolve)
                }
            }, {
                path: '/admin/team',
                name: 'Team',
                component: (resolve) => {
                    require(['../components/admin/Team'], resolve)
                }
            }, {
                path: '/admin/course',
                name: 'Course',
                component: (resolve) => {
                    require(['../components/admin/Course'], resolve)
                }
            }, {
                path: '/admin/dictionary',
                name: 'Dictionary',
                component: (resolve) => {
                    require(['../components/admin/DataDictionary'], resolve)
                }
            }, {
                path: '/admin/honor',
                name: 'Honor',
                component: (resolve) => {
                    require(['../components/admin/Honor'], resolve)
                }
            }, {
                path: '/admin/study',
                name: 'AdminStudy',
                component: (resolve) => {
                    require(['../components/admin/Study'], resolve)
                }
            }, {
                path: '/admin/enterprise',
                name: 'Adminenterprise',
                component: (resolve) => {
                    require(['../components/admin/Enterprise'], resolve)
                }
            },
            ]
        }
    ]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {
        // 判断是否需要登录权限
        if (sessionStorage.getItem('Ticket')) {
            // 判断是否登录
            next()
        } else {

            // 没登录则跳转到登录界面
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})

export default router
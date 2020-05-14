module.exports = {
    title: '李城的博客',
    head: [
        ['link', {rel: 'icon', href: '/avatar.png'}]
    ],
    themeConfig: {
        logo: '/avatar.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '技术文档', link: '/tech/interview'},
            {text: '百度主页', link: 'http://www.baidu.com'}
        ],
        sidebar: 'auto'
    }
}
import Taro from '@tarojs/taro';

const ENV = Taro.getEnv();


export default function (item) {
    if (ENV === 'WEB') {
        window.wx.ready(function () {   //需在用户可能点击分享按钮前就先调用

            //分享给朋友”及“分享到QQ
            window.wx.updateAppMessageShareData({
                title: item.title, // 分享标题
                desc: item.desc, // 分享描述
                link: item.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: item.imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })
            //自定义“分享到朋友圈”及“分享到QQ空间”按钮
            window.wx.updateTimelineShareData({
                title: item.title, // 分享标题
                desc: item.desc, // 分享描述
                link: item.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: item.imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })



        });
    }
}

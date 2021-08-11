import Taro from '@tarojs/taro';

const ENV = Taro.getEnv();


export default function (item) {
    if (ENV === 'WEB') {
        window.wx.checkJsApi({
            jsApiList: ['openLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                window.wx.openLocation({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    address: item.address,
                    name: item.name,
                    scale: 18
                });
            },
            fail: (res) => {
            }
        });
    } else if (ENV === 'WEAPP') {
        Taro.openLocation({
            latitude: item.latitude,
            longitude: item.longitude,
            address: item.address,
            name: item.name,
            scale: 18
        })
    }


}

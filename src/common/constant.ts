//性别
const SexMap = new Map();
SexMap.set(1, '男')
SexMap.set(2, '女')

//生肖
const ChineseZodiacArr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']


//星座
const ConstellationArr = [
  '白羊座',
  '金牛座',
  '双子座',
  '巨蟹座',
  '狮子座',
  '处女座',
  '天秤座',
  '天蝎座',
  '射手座',
  '摩羯座',
  '水瓶座',
  '双鱼座',
]



//工作时间
const WorkTimeList = ['住家', '不住家', '全天', '上午', '下午', '不限'];



//工作经验
const WorkingLifeDataList = new Map();
new Array(40).fill(1).forEach((item, index) => {
  WorkingLifeDataList.set(index + 1, `${index + 1}年`);
})


//做饭能力
const CookAbleList = ['不会', '一般', '很好'];


//菜系
const cuisineList = ['本地菜', '上海菜', '浙江菜', '川菜', '粤菜', '江苏菜', '东北菜', '鲁菜', '潮州菜', '湘菜', '面食', '西餐', '海鲜', '煲汤', '其他菜系'];



//语言能力
const languageList = ['本地方言', '普通话', '四川话', '上海话', '东北话', '广东话', '客家话', '闽南话', '英语', '德语', '日语', '韩语', '其他语言'];


//学历
const educationTextList = [
  '小学以下',
  '小学',
  '初中',
  '高中',
  '中专',
  '大专',
  '本科',
  '研究生',
  '硕士',
  '博士',
];

//婚姻状态
const Marriage = ['未婚', '已婚', '离异', '丧偶']


//普通话水平
const Mandarin = ['标准', '一般', '乡音']


//证书
const Certificate = new Map()


//阿姨工作状态
const jobStatusMap = new Map();
jobStatusMap.set(0, '待岗')
jobStatusMap.set(1, '上工中')
jobStatusMap.set(2, '休假')
jobStatusMap.set(3, '培训中')
jobStatusMap.set(4, '黑名单')

//民族
const nationList = [
  '汉族',
  '朝鲜族',
  '赫哲族',
  '达斡尔族',
  '鄂伦春族',
  '鄂温克族',
  '蒙古族',
  '回族',
  '东乡族',
  '保安族',
  '撒拉族',
  '土族',
  '裕固族',
  '俄罗斯族',
  '乌兹别克族',
  '塔塔尔族',
  '锡伯族',
  '哈萨克族',
  '克尔克孜族',
  '维吾尔族',
  '塔吉克族',
  '藏族',
  '珞巴族',
  '门巴族',
  '纳西族',
  '彝族',
  '普米族',
  '白族',
  '傈僳族',
  '怒族',
  '独龙族',
  '景颇族',
  '阿昌族',
  '德昂族',
  '佤族',
  '拉祜族',
  '布朗族',
  '傣族',
  '基诺族',
  '哈尼族',
  '京族',
  '黎族',
  '毛南族',
  '壮族',
  '仫佬族',
  '瑶族',
  '侗族',
  '苗族',
  '水族',
  '布依族',
  '仡佬族',
  '羌族',
  '土家族',
  '畲族',
  '高山族',
  '满族',
];

//相关证书
const auntCertTextList = [
  '健康证',
  '母婴护理证',
  '营养师证',
  '育婴师证',
  '早教证',
  '厨师证',
  '驾驶证',
  '家政服务员证',
  '护理工上岗证',
  '养老护理证',
  '催乳师证',
  '美国签证',
  '英国签证',
  '意大利签证',
  '澳大利亚签证',
  '加拿大签证',
  '港澳通行证',
  '管家证',
  '面点师证',
  '其他证书',
];

// 个人技能
const compositeList = [
  {
    "value": 0,
    "text": "面点"
  },
  {
    "value": 1,
    "text": "煲汤"
  },
  {
    "value": 2,
    "text": "月子餐"
  },
  {
    "value": 3,
    "text": "辅食餐"
  },
  {
    "value": 4,
    "text": "营养餐"
  },
  {
    "value": 5,
    "text": "催乳"
  },
  {
    "value": 6,
    "text": "产后修复"
  },
  {
    "value": 7,
    "text": "母婴护理"
  },
  {
    "value": 8,
    "text": "老年护理"
  },
  {
    "value": 9,
    "text": "家务"
  },
  {
    "value": 10,
    "text": "收纳"
  },
  {
    "value": 11,
    "text": "家教"
  },
  {
    "value": 12,
    "text": "驾驶"
  },
  {
    "value": 13,
    "text": "园艺"
  },
  {
    "value": 14,
    "text": "照看宠物"
  }
];

export const CONTACT_STATE = [
  { state: 0, title: '已签约' },
  { state: 1, title: '服务中' },
  { state: 2, title: '已取消' },
  { state: 3, title: '已暂停' },
  { state: 4, title: '已完成' },
];

export const DefaultShopPic = 'http://oss.bm001.com/arena/arenaimg/prod/defaultIcon/defaultShop.png';
export const DefaultUserPic = 'http://oss.bm001.com/static/ka/a/user-photo.png';

export default {
  SexMap,
  ChineseZodiacArr,
  ConstellationArr,
  WorkTimeList,
  WorkingLifeDataList,
  cuisineList,
  CookAbleList,
  languageList,
  educationTextList,
  Marriage,
  Mandarin,
  Certificate,
  jobStatusMap,
  nationList,
  compositeList,
  CONTACT_STATE,
  auntCertTextList,
  DefaultShopPic,
  DefaultUserPic,
}

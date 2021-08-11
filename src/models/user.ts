import modelExtend from 'dva-model-extend';
import common from '@/models/common';
import commonUtil from '@/utils/common'
import api from '@/api/userApi'

export default modelExtend(common, {
  namespace: 'user',
  state: {
    openid: "",
    actType: "",
    userType: "",
    token: "",
    userId: "",
    fansInfo: {
      openId: "",
      unionId: "",
      nickName: "",
      sex: "",
      country: "",
      province: "",
      city: "",
      headImgUrl: ""
    },
    user: {
      id: "",
      companyId: "",
      phone: "",
      name: "",
      headImgUrl: ""
    }

  },

  effects: {

    // 查询用户信息
    * loadUserInfo({ payload }, { select, call, put }) {
      const user = yield commonUtil.getUser()
      console.log('user ', user)
      yield put({
        type: 'updateStore',
        payload: {
          id: user.id,
          name: user.name || '',
          nickname: user.nickname || '',
          phone: user.phone || '',
          headImgUrl: user.headImgUrl || '', // 头像
          idcard: user.idcard || '',
          sex: user.sex || 0,
          birthday: user.birthday || 0,
          companyId: user.companyId || '', // 公司id
          province: user.province || '',
          city: user.city || '',
          district: user.district || '',
          addTime: user.addTime || 0, // 添加时间
          addShopId: user.addShopId || '', // 添加店铺id
          addUserId: user.addUserId || '', // 添加人id
          state: user.state || 0, // 状态
          stateChangeTime: user.stateChangeTime || 0,
        }
      })
      return user
    },

    // 保存用户信息
    * saveUserInfo({ payload }, { select, call, put }) {
      console.log('save user ', payload);
      commonUtil.setToken(payload.token)
      commonUtil.setOpenId(payload.openid || '')
      commonUtil.saveUser(payload.user)

      const user = payload.user;
      yield put({
        type: 'updateStore',
        payload: {
          openid: payload.openid,
          actType: payload.actType,
          userType: payload.userType,
          token: payload.token,
          userId: payload.userId,
          fansInfo: {
            openId: payload.fansInfo?.openId || '',
            unionId: payload.fansInfo?.unionId || '',
            nickName: payload.fansInfo?.nickName || '',
            sex: payload.fansInfo?.sex || '',
            country: payload.fansInfo?.country || '',
            province: payload.fansInfo?.province || '',
            city: payload.fansInfo?.city || '',
            headImgUrl: payload.fansInfo?.headImgUrl || ''
          },
          user: {
            id: payload.user?.id || '',
            companyId: payload.user?.companyId || '',
            phone: payload.user?.openId || '',
            name: payload.user?.name || '',
            headImgUrl: payload.user?.headImgUrl || '',
          }
        }
      })
    },

    // 查询个人信息 (头像,昵称 等资料)
    * getPersonInfo({ payload }, { select, call, put }) {
      const user = yield call(api.getPersonInfo, payload)
      commonUtil.saveUser(user)
      yield put({
        type: 'updateStore',
        payload: {
          id: user.id,
          name: user.name || '',
          nickname: user.nickname || '',
          phone: user.phone || '',
          headImgUrl: user.headImgUrl || '', // 头像
          idcard: user.idcard || '',
          sex: user.sex || 0,
          birthday: user.birthday || 0,
          companyId: user.companyId || '', // 公司id
          province: user.province || '',
          city: user.city || '',
          district: user.district || '',
          addTime: user.addTime || 0, // 添加时间
          addShopId: user.addShopId || '', // 添加店铺id
          addUserId: user.addUserId || '', // 添加人id
          state: user.state || 0, // 状态
          stateChangeTime: user.stateChangeTime || 0,
        }
      })
      return user
    },

    // 更新用户资料
    *updatePersonInfo({ payload }, { select, call, put }) {
      const result = yield call(api.updatePersonInfo, payload)
      yield put({
        type: 'updateStore',
      })
      return result
    },

  },

  reducers: {
    updateStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },
})

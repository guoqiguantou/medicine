import modelExtend from 'dva-model-extend';
import common from './common';
import api from '@/api/videoApi';

export default modelExtend(common, {
    namespace: 'video',
    state: {

    },
    effects: {
        /** 查询视频课程*/
        *queryTranscribe({ payload }, { put, select, call }) {
            const res = yield call(api.queryTranscribe, payload);
            yield put({
                type: 'updateState',
                payload: { videoDetail: res },
            });
        },
        /** 获取用户资料*/
        *miniDecode({ payload }, { put, select, call }) {
            const res = yield call(api.miniDecode, payload);
            return res
        },
        *clear({ payload }, { put, select, call }) {
            yield put({
                type: 'updateState',
                payload: { videoDetail: {} },
            });
        },
    }
});
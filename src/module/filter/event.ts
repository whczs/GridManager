/**
 * 过滤功能所需的事件项
 * @param _
 * @param scope: querySelector 域
 */
import { FAKE_TABLE_HEAD_KEY } from '@common/constants';
import { CLASS_FILTER } from './constants';
import { MOUSE_DOWN, MOUSE_UP, MOUSE_CLICK, createEventsObj, KEY_UP} from '@common/events';
import { EventMap } from 'typings/types';

export const getEvent = (_: string, scope: string): EventMap => {
    const filterSign = `[${FAKE_TABLE_HEAD_KEY}="${_}"] .${CLASS_FILTER}`;
    return {
        // 切换可视状态
        toggle: createEventsObj(MOUSE_DOWN, scope, `${filterSign} .fa-icon`),

        // 关闭
        close: createEventsObj(`${MOUSE_DOWN}.closeFitler`, 'body'),

        // 提交
        submit: createEventsObj(MOUSE_UP, scope, `${filterSign} .filter-submit`),

        // 重置
        reset: createEventsObj(MOUSE_UP, scope, `${filterSign} .filter-reset`),

        // 复选框点选
        checkboxAction: createEventsObj(MOUSE_CLICK, scope, `${filterSign} .gm-checkbox-input`),

        // 单选框点选
        radioAction: createEventsObj(MOUSE_CLICK, scope, `${filterSign} .gm-radio-input`),

				// todo 输入框监控enter筛选
				enterFilter: createEventsObj(KEY_UP, scope, `${filterSign} .filter-input`)
    };
};

export const eventMap = {};

/**
 * 实例化数据的存储对象
 */
import { GM_VERSION } from '@common/constants';
import { Row } from 'typings/data';
interface StoreInterface {
    version: string;
	responseData: {
		[_: string]: Array<Row>
	};
    checkedData: any;
    settings: any;
}
const Store: StoreInterface = {
	// 版本号
	version: GM_VERSION,

	// GM使用的数据
	responseData: {},

    // 当前选中的数据列表
    checkedData: {},

	// 表配置信息存储器
	settings: {
		// columnData: 表配置项, 在宽度、位置等信息变化后 会 即时更新
		// columnMap: 是在GridManager.js中通过columnData生成的, 在宽度\位置等信息变化后 会 即时更新
		// 其它配置项...
	}
};

export default Store;

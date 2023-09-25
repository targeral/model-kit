App UI
-> UI Model
-> [
1. Pure UI State
2. 来自业务模型的透传数据
3. transformed Data from 业务模型
> UI LIbrary 组件需要的数据，它分散在以上这三种情况
]
-> FE/BackEnd 业务模型（涉及前后端通过接口的交互）



UI State -> UI：
``` tsx
import { type ButtonState, getUIState } from './ui-state';
import { fetchApi1, fetchApi2 } from './api';

const App = () => {
    const uiState = getUIState<ButtonState>();
    useEffect(() => {
        fetchApi1.fetch({}/* 请求参数 */);
    }, []);

    return (
        <div className="button" style={{ background: uiState.color }}>
            按钮
        </div>
    );
};

export default App;
```


业务模型 -> UI State：
``` tsx
export interface ButtonState {
    color: string;
}

export const buttonPureUIState = {
    loading: false,
};

// 可以在前端运行时执行，或者考虑性能将它变为一个 bff 逻辑层，bff 逻辑层负责请求接口，并将接口数据根据这里的逻辑转换为 UI State
export const getUIState = defineUIModel({
    // 业务数据模型转换

    color: (models, pureUIState) => {
        // TODO: wait api1, api2 ready
        // const { api1Model, api2Model } = models;
        // if (api1Model.color) {
        //     return api1Model.color;
        // }

        // return api1Model.color;
        // way 1: return { before: (pureUIState) => {}, after:(pureUIState) => {}, value: api1Model.color }
        return '#fff';
    },
    // 数据透传
    text: ({api1Model}) => api1Model.text,
}, buttonPureUIState);
```

api -> 业务模型
``` ts
import axios from 'axios';
import type { Api1ModelType, Api2ModelType } from '@rd/type';// 前后端保证类型一致的包

export const fetchApi1 = define<ParamsType, Api1ModelType>((params) => {
    return {
        initData: {},
        fetch(): Api1ModelType {
            const resp = await axios.get('xxx');
            if (resp.status === 200) {
                return resp.status;
            }
        }
    };
});

export const fetchApi2 = define<ParamsType, Api2ModelType>((params) => {
    return {
        initData: {},
        fetch(): Api1ModelType {
            const resp = await axios.get('xxx');
            if (resp.status === 200) {
                return resp.status;
            }
        }
    };
});
```

> 模型之间通过 Proxy 来进行监听变化
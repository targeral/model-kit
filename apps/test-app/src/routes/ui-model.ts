import { defineModelState } from 'model-kit';

export type UIState = ModelState & PureUIState;

export interface ModelState {
  btnColor: string;
}

export interface PureUIState {
  loading: boolean;
}

export const pureUIState = {
  loading: false,
};
// {
//   btnColor: '#fff',
//   loading: false,
// };

export const getUIState = defineModelState<ModelState, PureUIState>(
  {
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
    text: ({ api1Model }) => api1Model.text,
  },
  pureUIState,
);

export const uiModel: UIState = getUIState();

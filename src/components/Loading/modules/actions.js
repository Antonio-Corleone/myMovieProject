import * as actLoading from './constants';

export const actShowLoading = () => ({
  type: actLoading.ACTION_SHOW_LOADING,
  payload: true,
});

export const actHideLoading = () => ({
  type: actLoading.ACTION_HIDE_LOADING,
  payload: false,
})

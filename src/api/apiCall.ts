import axios, {AxiosError, AxiosHeaders, AxiosResponse} from 'axios';
import {Api, ApiType} from './apiConst';

const defaultHeader: any = {'Content-Type': 'application/json'};

type ApiPayload = {
  headers?: AxiosHeaders;
  body: any;
  type: ApiType;
  endpoint: string;
};

export type SuccessCallback = (response: AxiosResponse) => void;

export type FailureCallback = (error: AxiosError) => void;

export const apiCall = async (
  payload: ApiPayload,
  success: SuccessCallback,
  rejectWithValue: FailureCallback,
) => {
  let {headers, body, type = ApiType.post, endpoint} = payload;
  let header = {
    ...defaultHeader,
    ...headers,
  };
  body = {...body};

  let dataBody = body;
  const token = '';

  if (token)
    header = {
      ...header,
      Authorization: `Bearer ${token}`,
    };

  let response;
  try {
    let requestData = {
      url: `${Api.baseURL}${endpoint}`,
      method: type,
      headers: header,
      timeout: 60 * 1000,
    };
    if (type === ApiType.post) {
      requestData = {
        ...requestData,
        data: dataBody,
      };
    }
    response = await axios.request(requestData || '');
    success?.(response);
    return response?.data;
  } catch (err: any) {
    if (err.message == 'Network Error') {
      return rejectWithValue?.('Network Error');
    }
    return rejectWithValue?.(err?.response?.data ?? {});
  }
};

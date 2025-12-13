import type { AxiosError } from 'axios';

export interface iHttpError {
  status: number;
  message: string;
}

export const normalizeAxiosError = (error: AxiosError): iHttpError => {
  if (error.response) {
    const status = error.response.status;
    let message = 'Request failed';

    switch (status) {
      case 404:
        message = 'Resource not found';
        break;
      case 500:
        message = 'Server error, please try later';
        break;
      default:
        message = (error.response.data as any)?.message || 'Request failed';
    }

    return { status, message };
  }

  if (error.request) {
    // 網路沒有回應，使用自定義狀態碼，例如 0 表示網路錯誤
    return { status: 0, message: 'No response from server' };
  }

  // request setup 或其他錯誤，也給一個統一狀態碼，例如 -1
  return { status: -1, message: error.message };
};

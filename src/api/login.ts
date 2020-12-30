import request from '@/utils/request';

export async function login(params) {
    return request('/auth', {
        method: 'POST',
        data: params,
    })
}

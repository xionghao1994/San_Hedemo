/**
 * API总揽
 * Created by xh on 19/12/09
 * 封装自定义所有api请求类型
 * export const xx = () => get('api')
 * export const xx = data => get('api', data)
 * export const xx = () => fetch('api', 'post')
 * export const xx = data => fetch('api','post', data)
 * export const xx = data => fetch('api','put', data)
 * export const xx = data => fetch('api', 'delete')
 */
import { get, fetch, GetauthImage } from 'utils/http';

export const BaseUrl = data => fetch('/api', data)

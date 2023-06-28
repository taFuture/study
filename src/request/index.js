// 所有的请求都定义在这个位置
import axios from "axios";
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
export const fetchPlaylist = (cat) => http.get('top/playlist',{params:{cat}});
export const fetchPlaylistHot = () => http.get('/playlist/hot');
// 获取搜索关键字
/**
 * @description 关键字
 * @param {Array} 无
 * @returns {Promise}
 */
export const fetchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) => http.get('/search',{params})

// 搜索建议
export const fetchSeachSuggest = (keywords) => http.get('/search/suggest',{params:{keywords}})

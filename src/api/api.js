import {get, post} from './axios';

const api = {
    getBanner: function getBanner(number){
        return get(`/manage/banner/${number}`);
    },
    getBlogList: function () {
        return get('/blog/recommend/homepage');
    },
    getBlogListSide: function () {
        return get('/blog/recommend/side');
    },
    getBlogTypeList: function () {
        return get('/article/type/queryblogtypenumber');
    },
    getBlogTags: function () {
        return get('/article/tags/querytags');
    },
    getTimeShaft(param){
        return post('/blog/article/timeshaft', param);
    },
    getDate(){
        return get('/manage/thistime');
    }
}
export {
    api
}

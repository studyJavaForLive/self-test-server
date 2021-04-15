// sql语句
var sql = {
    // 用户
    user: {
        login: 'select * from user_mgt where user_name = ? and passwd = ?',
        /*queryUserList: 'select * from user',
        createUser: 'INSERT INTO user (userId, userName, createDate, nickName, passWord) VALUES (?,?,?,?,?)'*/
    },
    home: {
        qryCourseList: 'select course_name from course_type where edu_id=1',
        qryUnitListByCourse: 'select course_unit_name from course_type_detail where course_type_id = '
        + 'select id from course_type where course_name = ?',
        qryAllUnitList: 'select course_unit_name from course_type_detail'
    }

    /*
    article: {
        query: 'select * from article',
        queryById: 'select * from article where discuss_id = ?',
        create: 'INSERT INTO article (title, content, keyword, type_id, type_name) VALUES (?,?,?,?,?)',
        delete: 'delete from article where discuss_id = ?',
        update: 'update article set title=?,content=?,keyword=? where discuss_id = ?',
        queryArticleType: 'select * from article_type',
        createArticleType: 'INSERT INTO article_type (typeId, typeName, createDate) VALUES (?,?,?)',
        queryArticleTypeById: 'select * from article_type where typeId = ?'
    }*/
}
    
module.exports = sql
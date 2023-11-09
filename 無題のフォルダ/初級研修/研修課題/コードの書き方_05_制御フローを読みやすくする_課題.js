const today = new Date(2021, 10, 9)

/**
 * ユーザーがシステムを利用可能かどうか調べるためのサンプルの関数です　※修正対象の関数となります
 * @param  {Object} user ユーザー（ユーザーには、利用開始日と利用期限または停止フラグがあるとします）
 * @return {Boolean} true:利用可能、false:利用不可
 */
function isActiveUser(user) {
    if (user == null) {
        return false;
    }
    
    if (user.startDate > today ) {
        return false;
    }
    
    if (user.endDate != null || today > user.endDate) {
        return false;
    }

    if(user.stopped) {
        return false;
     } else {
        return true;
     }   
}

// サンプルの関数を呼び出すためのサンプル実装
const startDate = new Date(today);
startDate.setMonth(startDate.getMonth() - 1);
const user = {
    name: "山田太郎",
    startDate: startDate, // 利用開始日
    endDate: null,        // 利用期限
    stopped: false        // 停止フラグ
};

console.log(isActiveUser(user)); // -> true


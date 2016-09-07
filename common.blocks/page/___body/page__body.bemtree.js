// block('page').elem('body').elemMod('wall', true)(
//     content()(
//         function () {
//             var tweet_data = this.ctx.data,
//                 users = tweet_data.users,
//                 tweets_in = tweet_data.tweets,
//                 curr_date = new Date(),
//                 diff_time,
//                 tweet_end,
//                 last_timestamp = null;
//
//             function setDiffTime(i) {
//                 var old_date = new Date(tweets_in[i].timestamp),
//                     diff_date = curr_date - old_date,
//                     sec = 1000,
//                     min = sec * 60,
//                     hour = min * 60,
//                     day = hour * 24;
//
//                 //выводим время с момента добавления твита
//                 if (diff_date < sec * 60) {
//                     diff_time = Math.floor(diff_date / sec) + ' c. назад'; //время в секундах
//                 } else if (diff_date >= sec * 60 && diff_date < min * 60) {
//                     diff_time = Math.floor(diff_date / min) + ' мин. назад'; //время в минутах
//                 } else if (diff_date < hour * 24) {
//                     diff_time = Math.floor(diff_date / hour) + ' ч. назад'; //время в часах
//                 } else {
//                     diff_time = Math.floor(diff_date / day) + ' д. назад'; //время в днях
//                 }
//             }
//
//             if (tweets_in.length) {
//                 last_timestamp = tweets_in[tweets_in.length - 1].timestamp;
//             } else {
//                 last_timestamp = null;
//             }
//
//             tweets_in = tweets_in.map(function (v, i) {
//                 setDiffTime(i);
//
//                 if (!v.extras) {
//                     v.extras = {};
//                 }
//
//                 //console.log(v.extras);
//
//                 return {
//                     block: 'tweet',
//                     mods: { default: true },
//                     content: {
//                         avatar: users[v.author].avatar,
//                         login: '@' + users[v.author].displayName,
//                         time: diff_time,
//                         tweet_text: v.content,
//                         extras: v.extras,
//                         url: '/tweet/' + v._id
//                     },
//                     js: {
//                         data: v
//                     }
//                 };
//             });
//
//             tweet_end = {
//                 block: 'tweet-drawer',
//                 content: 'Загрузка...',
//                 js: { timestamp: last_timestamp }
//             };
//
//             tweets_in[tweets_in.length] = tweet_end;
//
//             return tweets_in;
//         }
//     )
// );

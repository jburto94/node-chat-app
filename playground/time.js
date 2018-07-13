const moment = require('moment');

const createdAt = new Date().getTime();
const date = moment(createdAt);
console.log(date.format('h:mm a'))
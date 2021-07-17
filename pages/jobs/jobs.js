const util = require('../../utils/util.js')
const { jobs } = require('./content');

Page({
  data: {
    jobs,
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})

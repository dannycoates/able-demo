module.exports = {
  name: 'themesAreCool',
  hypothesis: 'dark themes do better at night',
  startDate: '2015-01-14',
  subjectAttributes: ['name'],
  independentVariables: ['theme'],
  eligibilityFunction: function (subject) {
    // everyone is eligible
    return true
  },
  groupingFunction: function (subject) {
    var hour = (new Date()).getHours()
    var theme = hour > 17 || hour < 10 ? 'dark' : 'light'
    return {
      // half will always get light, half will get dark at night
      theme: this.uniformChoice(['light', theme], subject.name)
    }
  }
}

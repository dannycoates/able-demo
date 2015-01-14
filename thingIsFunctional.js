module.exports = {
  name: 'thingIsFunctional',
  hypothesis: 'thing works ok',
  conclusion: {
    thingEnabled: true
  },
  startDate: '2015-01-10',
  release: {
    startDate: '2015-01-12',
    endDate: '2015-01-16'
  },
  subjectAttributes: ['name'],
  independentVariables: ['thingEnabled'],
  eligibilityFunction: function (subject) {
    // half of subjects with a name are eligible
    return this.bernoulliTrial(0.5, subject.name)
  },
  groupingFunction: function (subject) {
    return {
      // 10% of eligible will be enabled, the rest are control
      thingEnabled: this.bernoulliTrial(0.1, subject.name)
    }
  }
}

module.exports = {
  name: 'buttonTextMatters',
  hypothesis: 'sure will have the best CTR',
  startDate: '2015-01-14',
  subjectAttributes: ['name'],
  independentVariables: ['buttonText'],
  eligibilityFunction: function (subject) {
    return this.bernoulliTrial(0.5, subject.name)
  },
  groupingFunction: function (subject) {
    return {
      buttonText: this.uniformChoice(['ok', 'sure', 'why not?'], subject.name)
    }
  }
}

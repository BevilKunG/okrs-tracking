const mockObjective = {
  label: 'Great Engineering',
  progress: 100,
  keyResults: [{
    label: 'build a rome',
    progress: 100,
    progressDetailList: [{
      label: 'init',
      progress: 100
    }]
  },
  {
    label: 'build a pyramid',
    progress: 100,
    progressDetailList: [{
      label: 'init',
      progress: 100
    }]
  }]
}

const mockObjectives = [mockObjective, mockObjective, mockObjective]

export default (state = null, action) => {
  return mockObjectives
}

function getMemberObject(value) {
  let member = { }
  member.name = value[0]
  member.score = parseInt(value[1])
  member.tier = parseInt(value[2])
  member.handicap = 0

  return member
}

function getDisabledButtonClass(member) {
  return 'w-btn-disabled w-btn-gray-disabled'
}

function getButtonClass(member) {
  if (member.name === '노유한') {
    return 'w-btn w-btn-gra3 w-btn-gra-anim';
  }
  switch (member.tier) {
    case 1:
      return 'w-btn w-btn-red'
    case 2:
      return 'w-btn w-btn-orange'
    case 3:
      return 'w-btn w-btn-dark-yellow'
    case 4:
      return 'w-btn w-btn-yellow'
    case 5:
      return 'w-btn w-btn-dark-blue'
    case 6:
      return 'w-btn w-btn-blue'
    case 7:
      return 'w-btn w-btn-dark-green'
    case 8:
      return 'w-btn w-btn-green'
  }

  return 'w-btn w-btn-indigo'
}
function getMemberObject(value, index) {
  let member = { }
  member.name = value[0]
  member.score = parseInt(value[1])
  member.tier = parseInt(value[2])
  member.id = parseInt(index)
  member.handicap = 0

  const perfectMember = findPerfectMember(member.name)
  member.isPerfect = false
  if (perfectMember !== undefined) {
    member.isPerfect = isRecentlyPerfect(perfectMember)
  }

  return member
}

function isRecentlyPerfect(perfect) {
  const date = perfect.date
  const now = new Date();
  const lastMonth = new Date(now.setMonth(now.getMonth() - 1));

  return (date.getTime() - lastMonth.getTime()) > 0;
}

function getDisabledButtonClass() {
  return 'w-btn-disabled w-btn-gray-disabled'
}

function getButtonClass(member) {
  if (member.name === '노유한') {
    return 'w-btn w-btn-nyking w-btn-gra-anim';
  }

  if (member.isPerfect) {
    return 'w-btn w-btn-gra3 w-btn-gra-anim';
  }

  if (member.id === 0) {
    return 'w-btn w-btn-top1 w-btn-gra-anim';
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

function getDateFormatString(date) {
  try {
    return date.toISOString().split('T')[0]
  } catch (e) {
    return ''
  }
}

function findPerfectMember(name) {
  return perfectMembers.find(member => member.name === name)
}
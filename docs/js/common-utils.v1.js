function getMemberObject(value, index) {
  let member = { }
  member.name = value[0]
  member.score = parseInt(value[3])
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
  if (member.isPerfect) {

    return 'w-btn w-btn-gra3 w-btn-gra-anim';
  }

  if (member.name === '노유한') {
    return 'w-btn w-btn-nyking w-btn-gra-anim';
  }

  if (member.id === 0) {
    return 'w-btn w-btn-top1 w-btn-gra-anim';
  }

  switch (member.tier) {
    case 1:
      return 'w-btn w-btn-red'
    case 2:
      return 'w-btn w-btn-blue'
    case 3:
      return 'w-btn w-btn-dark-yellow'
    case 4:
      return 'w-btn w-btn-green'
    case 5:
      return 'w-btn w-btn-dark-blue'
    case 6:
      return 'w-btn w-btn-dark-blue'
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

function toMapFromLocalStorage(str) {
  return new Map(JSON.parse(str))
}

function toObjectFromLocalStorage(str) {
  return JSON.parse(str)
}

function toStringFromMap(map) {
  return JSON.stringify(Array.from( map.entries()));
}

function toStorageObject(map) {
  const object = { }

  object.expiredTime = new Date()
  object.expiredTime.setMinutes(new Date().getMinutes() + 30)
  object.entries = Array.from( map.entries())

  return JSON.stringify(object);
}

function floorNaturalNumber(number) {
  return parseInt(Math.floor(number / 10) * 10)
}


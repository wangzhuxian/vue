export function $_xsl__replaceImgUrlSize(str = '', size = this.imgSize) {
  return str.replace(/\{\s*size\s*\}/, size)
}
export function secondToMin(seconds) {
  if (isNaN(Number(seconds))) {
    return '00:00'
  }
  //todo support more than 1 hour
  seconds = Math.floor(seconds)
  let second = seconds % 60
  let min = Math.floor(seconds / 60)
  return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0')
}
export function getComponentDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

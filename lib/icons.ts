export const icons = {
  share: '/icons/share.png',
  lockunlock: '/icons/lock-unlocked(56).png',
  up: '/icons/chevron-down(32).png',
  lockPale: '/icons/lock(28).png',
  lockBlack: '/icons/lock(black_28).png',
  checked: '/icons/check-circle(24).png',
  add: '/icons/plus-circle(24).png',
  addContract: '/icons/file-plus(24).png',
  leftCircle: '/icons/arrow-circle-right(24).png',
  back: '/icons/chevron-left(36).png',
  right: '/icons/chevron-down(20).png',
  certified: '/icons/check-verified(12).png',

} as const

export type IconName = keyof typeof icons


// Usage Example:
// import { icons } from '@/lib/icons'

// <img src={icons.upload} alt="" />

// type IconProps = {
//   name: IconName
//   alt?: string
// }

// export function Icon({ name, alt = '' }: IconProps) {
//   return <img src={icons[name]} alt={alt} />
// }
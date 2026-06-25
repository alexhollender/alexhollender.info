import type { Metadata } from 'next'
import CookingTimers from '@/components/cookingTimers/CookingTimers'

export const metadata: Metadata = {
  title: 'Cooking timers',
  description: 'Set as many cooking timers as u want',
}

export default function Page() {
  return (
    <div id="app">
      <CookingTimers />
    </div>
  )
}

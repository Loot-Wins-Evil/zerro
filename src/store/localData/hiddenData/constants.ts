// Account with data reminders
export const DATA_ACC_NAME = '🤖 [Zerro Data]'

// Reminder payee names
export const GOALS = 'goals'
export const ACC_LINKS = 'accLinks'
export const TAG_ORDER = 'tagOrder'
export type DataReminderType = 'goals' | 'accLinks' | 'tagOrder'

export const GOAL_TYPES = {
  MONTHLY: 'monthly', // monthly contribution
  MONTHLY_SPEND: 'monthlySpend', // monthly spend
  TARGET_BALANCE: 'targetBalance', //
}
export type GoalType = 'monthly' | 'monthlySpend' | 'targetBalance'

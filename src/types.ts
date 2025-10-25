/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionConfig } from 'custom-card-helpers'

export interface BarCardConfig {
  entity_config: boolean
  animation: any
  attribute: any
  color: string
  columns: number
  complementary: boolean
  decimal: any
  direction: string
  double_tap_action?: ActionConfig
  entities: any
  entity_row: boolean
  entity: string
  gradient?: {
    start_color?: string
    middle_color?: string
    end_color?: string
  }
  height: string | number
  hold_action?: ActionConfig
  icon: any
  limit_value: boolean
  max: number | string
  min: number | string
  name: string
  show_percent_value: boolean
  positions: {
    icon?: 'inside' | 'outside' | 'off'
    indicator?: 'inside' | 'outside' | 'off'
    name?: 'inside' | 'outside' | 'off'
    min?: 'inside' | 'outside' | 'off'
    max?: 'inside' | 'outside' | 'off'
    minmax?: 'inside' | 'outside' | 'off' // deprecated, use min and max instead
    value?: 'inside' | 'outside' | 'off'
  }
  severity: any
  stack: string
  tap_action?: ActionConfig
  target: any
  title: string
  type: string
  unit_of_measurement: string
  width: string
  auto_width?: boolean
}

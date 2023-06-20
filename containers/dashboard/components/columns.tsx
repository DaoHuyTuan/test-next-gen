'use client'

import { labels, priorities, statuses } from '../data/data'
import { Portfolio } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { Badge } from '@/components/badge'
import { Checkbox } from '@/components/checkbox'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Portfolio>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={true}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={true}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <span>header id</span>,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'plan-name',
    header: ({ column }) => <span>Plan Name</span>,
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          <span>plan name 1</span>
        </div>
      )
    }
  },
  {
    accessorKey: 'invested',
    header: ({ column }) => (
      // <DataTableColumnHeader column={column} title="Status" />
      <span>Invested</span>
    ),
    cell: ({ row }) => {
      // const status = statuses.find(
      //   (status) => status.value === row.getValue("status")
      // )

      // if (!status) {
      //   return null
      // }

      return (
        <div className="flex w-[100px] items-center">
          <span>100$</span>
        </div>
      )
    }
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  },
  {
    accessorKey: 'pnl',
    header: ({ column }) => (
      // <DataTableColumnHeader column={column} title="Priority" />
      <span>PnL</span>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>PNL1</span>
        </div>
      )
    }
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  },
  {
    id: 'today-pns',
    header: ({ column }) => <span>Today PnS</span>,
    cell: ({ row }) => <span>hello this is pns</span>
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]

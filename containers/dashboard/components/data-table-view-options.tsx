'use client'

import { Button } from '@/components/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/dropdown-menu'
import { Icons } from '@/components/icons'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Table } from '@tanstack/react-table'
import { SlidersHorizontal } from 'lucide-react'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData>({
  table
}: DataTableViewOptionsProps<TData>) {
  return (
    <Button
      variant="default"
      size="sm"
      onClick={}
      className="ml-auto flex h-8 gap-1">
      <Icons.add size={16} />
      Add Plan
    </Button>
  )
}

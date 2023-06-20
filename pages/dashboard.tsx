import { columns } from '../containers/dashboard/components/columns'
import { DataTable } from '../containers/dashboard/components/data-table'
import { UserNav } from '../containers/dashboard/components/user-nav'
import { Portfolio } from '../containers/dashboard/data/schema'
import RootLayout from '@/app/layout'
import { SideBar } from '@/containers/sidebar'
import { API_URL } from '@/lib/utils'
import { promises as fs } from 'fs'
import { Metadata } from 'next'
import Image from 'next/image'
import path from 'path'
import { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'

export default function Dashboard() {
  // const tasks = await getTasks()
  const [portfolio, setPortfolio] = useState<Portfolio[]>([])
  const fetchPortfolio = useCallback(async () => {
    try {
      const res = await fetch(`/api/plan/getPlan`)
      const result = await res.json()
      if (result) {
        setPortfolio(result)
      }
    } catch (error) {}
  }, [])

  useEffect(() => {
    fetchPortfolio()
  }, [])
  return (
    <RootLayout>
      <div className="flex">
        <div className="min-w-300 flex">
          <SideBar />
        </div>
        <div className="container-bg hidden h-full flex-1 flex-col space-y-8 p-12 pt-0 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Investment Plan
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <UserNav />
            </div>
          </div>
          <DataTable
            data={portfolio}
            columns={columns}
          />
        </div>
      </div>
    </RootLayout>
  )
}

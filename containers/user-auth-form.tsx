"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import { Icons } from "@/components/icons"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { redirect, useRouter } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [showPass, setShowPass] = React.useState(false)
  const { push } = useRouter();
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      push('/dashboard')
    }, 3000)
  }

  const type = React.useMemo(() => {
    return showPass ? 'input' : 'password'
  }, [showPass])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              value={form.email}
              placeholder="Email"
              type="email"
              name="email"
              onChange={onChange}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="relative flex">
            <Input
              id="password"
              value={form.password}
              placeholder="password"
              type={type}
              name="password"
              autoCorrect="off"
              onChange={onChange}
              disabled={isLoading}
            />
            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-sm leading-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <Icons.eye />
              
            ) : <Icons.eyeClose/> }
            </div>
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log in with email
          </Button>
        </div>
      </form>
      
    </div>
  )
}

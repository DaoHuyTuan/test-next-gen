import Image from "next/image"
import Link from "next/link"
import { StyleSwitcher } from "@/containers/style-switcher"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import { UserAuthForm } from "@/containers/user-auth-form"
// import DashboardPage from "@/app/examples/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative pb-10">
      <StyleSwitcher />
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-left text-3xl font-extrabold tracking-tight">
                Login to your account
              </h1>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}

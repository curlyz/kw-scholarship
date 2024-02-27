'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import { ReactNode } from "react";
import { Input } from "@/components/ui/input"

import { cn } from "./utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Lottie from 'react-lottie'

import animationData from '@/lottie/lotus.json'
import Lott from "@/components/lottie";
import WelcomeCard from "@/components/card.welcome";
import PersonalInformationCard from "@/components/card.personal_information";
import EducationInformationCard from "@/components/card.education_information";
import UndergraduateInformationCard from "@/components/card.ungrate_information";

// ----


function MainLayout({
  leftChildren,
  rightChildren
}: {
  leftChildren: ReactNode,
  rightChildren: ReactNode,
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
    >
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          {leftChildren}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <div className="flex h-full items-center justify-center p-6">
          {rightChildren}
        </div>
      </ResizablePanel>

    </ResizablePanelGroup>
  )
}






function ApplicationSubmission() {
  return (
    <div className="flex flex-col space-y-4 bg-slate-300 h-full w-full">
      <h1>Education Assistance Program</h1>

      <Card>
        <CardHeader>
          <CardTitle>Login Information</CardTitle>
          <CardDescription>How can we reach you ?</CardDescription>
        </CardHeader>
        <CardContent>

          <div className='flex flex-row space-x-3'>
            <Lott animationData={animationData} />
            <div className="flex flex-col space-y-3">
              <Label htmlFor="phone">Email</Label>
              <Input type="tel" id="phone" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>

          </div>
        </CardContent>
      </Card>

    </div>
  )
}


export default function Home() {
  return (
    <main className="h-[calc(100vh - 54px)] w-full p-4">
      <div className="block md:grid md:grid-cols-[190px_calc(100%_-_190px)]">
        <nav className="no-scrollbar sticky top-[54px] col-span-1 hidden h-[calc(100vh_-_54px)] flex-col gap-1 overflow-y-scroll bg-white px-3 py-6 md:flex">
          <span className="text-sm font-medium text-neutral-400">Sections</span>
          <a className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200">Appication form</a>
          <a className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200">Application letter</a>
          <a className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200">Passport</a>
          <a className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200">Receipt of admission</a>
          <a className="relative cursor-pointer px-2.5 py-1 text-sm font-medium transition-colors text-neutral-950 hover:bg-neutral-200">Income certificate</a>
        </nav>

        <div className="relative col-span-1 space-y-8">
          <WelcomeCard />
          <PersonalInformationCard />
          <EducationInformationCard />
          <UndergraduateInformationCard/>
        </div>
      </div>

    </main>
  );
}

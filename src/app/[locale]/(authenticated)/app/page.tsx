import { Page } from '@/presentation/view/components/app/page'
import React from 'react'

export default async function AppPage() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.HeaderTitle>Dashboard</Page.HeaderTitle>
      </Page.Header>
      <Page.Main>
        <h1>App Page</h1>
      </Page.Main>
    </Page.Root>
  )
}

import PageHeader from "../../components/PageHeader"
import ComponentPreview from "../../components/ComponentPreview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsDoc() {
  return (
    <>
      <PageHeader
        title="Tabs"
        description="Switch between mutually exclusive views without leaving the page. Use tabs when the views share the same context and the user is likely to bounce between them."
      />
      <ComponentPreview
        preview={
          <Tabs defaultValue="account" className="w-full max-w-sm">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-sm text-foreground-muted">
              Manage your profile and email preferences.
            </TabsContent>
            <TabsContent value="security" className="text-sm text-foreground-muted">
              Two-factor auth, sessions, and recovery codes.
            </TabsContent>
            <TabsContent value="api" className="text-sm text-foreground-muted">
              API tokens and rate limits.
            </TabsContent>
          </Tabs>
        }
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
  <TabsContent value="security">...</TabsContent>
</Tabs>`}
      />
    </>
  )
}

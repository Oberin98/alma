import { Layout, LayoutContent, LayoutSidebar } from "@/usecases/app/components";

function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <Layout>
      <LayoutSidebar />
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
}

export default MainLayout;

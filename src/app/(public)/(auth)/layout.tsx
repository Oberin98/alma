function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex size-full items-center justify-center">{children}</div>
  );
}

export default Layout;

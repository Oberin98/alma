import { AlmaIcon } from "@/icons";
import { cn } from "@/lib/styles";

function Layout({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-full w-full", className)} {...props}>
      <section className="flex h-140 max-h-[55vh] w-screen items-center bg-[#D9DEA5]">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center gap-10">
          <div>
            <AlmaIcon className="w-24" />
          </div>

          <h1 className="text-6xl font-extrabold">
            Get An Assessment <br /> Of Your Immigration Case
          </h1>
        </div>
      </section>

      <main className="w-screen py-12">
        <div className="mx-auto w-full max-w-xl">
          {/* md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-orange-500 */}
          {children}
        </div>
      </main>
    </div>
  );
}

export { Layout };

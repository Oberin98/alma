import { AlmaIcon } from "@/icons";

function HeroSection() {
  return (
    <section className="flex h-140 max-h-[55vh] w-screen items-center bg-sage bg-[url('/abstract-bg.webp')] bg-cover bg-no-repeat bg-center">
      {/* 
        Align hero text with FormSection's left edge:
        - Form section: 576px max-width, centered with mx-auto
        - Left margin needed: calc((100vw - 576px) / 2)
        - This matches the form's natural left spacing
        TODO: create Layout component and extract this logic into a separate variable
      */}
      <div className="ml-[calc(calc(100vw-576px)/2)] px-4 mx-auto flex w-full flex-col items-start justify-center gap-10">
        <div>
          <AlmaIcon className="w-20" />
        </div>

        <h1 className="text-6xl font-extrabold">
          Get An Assessment <br /> Of Your Immigration Case
        </h1>
      </div>
    </section>
  );
}

export { HeroSection };

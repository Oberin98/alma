import Image from "next/image";

import { Button } from "@/components/Button";
import Link from "next/link";

export default function CreateLeadSuccessPage() {
  return (
    <main className="flex h-148 max-h-[60vh] w-screen items-center">
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-2 flex w-full items-center justify-center">
          <Image src="/info.webp" alt="info" width={100} height={100} />
        </div>

        <h3 className="mb-2 w-full text-center text-2xl font-bold">Thank You</h3>

        <p className="mb-10 w-full text-center text-base font-bold">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>

        <div className="mx-auto w-[400px]">
          <Button className="w-full" asChild>
            <Link href="/">Go Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

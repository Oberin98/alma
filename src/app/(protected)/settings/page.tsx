import { ConstructionIcon } from "lucide-react";

function SettingsPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <ConstructionIcon className="size-7" />
        <h1 className="text-xl font-semibold">Under construction</h1>
      </div>
    </div>
  );
}

export default SettingsPage;

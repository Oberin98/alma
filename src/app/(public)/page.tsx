import {
  HeroSection,
  FormSection,
  CreateLeadForm,
} from "@/usecases/create-lead/components";

export default function CreateLeadPage() {
  return (
    <div className="h-full w-full">
      <HeroSection />

      <FormSection>
        <CreateLeadForm />
      </FormSection>
    </div>
  );
}

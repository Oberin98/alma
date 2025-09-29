import { LeadsTable } from "@/usecases/leads/components/LeadsTable";
import { mockLeads } from "@/usecases/leads/mocks/leads";

function LeadsPage() {
  return (
    <div className="container">
      <h1 className="mb-6 text-2xl font-bold">Leads</h1>

      <LeadsTable data={mockLeads} />
    </div>
  );
}

export default LeadsPage;

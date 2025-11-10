"use client"

interface Row {
  label: string
  buildwell: string
  competitor: string
}

const rows: Row[] = [
  {
    label: "AI-powered compliance checks",
    buildwell: "Yes (UK-specific, always up-to-date)",
    competitor: "Limited or generic"
  },
  {
    label: "Golden Thread management",
    buildwell: "Full support, automated linking",
    competitor: "Manual or not available"
  },
  {
    label: "Visual plan checking",
    buildwell: "Automated, with BIM/3D support",
    competitor: "Manual review only"
  },
  {
    label: "API & integrations",
    buildwell: "Robust, with custom options",
    competitor: "Few or none"
  },
  {
    label: "Human-in-the-loop review",
    buildwell: "Built-in, always",
    competitor: "Rarely included"
  },
  {
    label: "UK data residency",
    buildwell: "Guaranteed, ISO 27001",
    competitor: "Not guaranteed"
  },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-background">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="px-6 py-3 text-left font-bold text-foreground">Feature</th>
            <th className="px-6 py-3 text-left font-bold text-gradient-orange">BuildwellAI</th>
            <th className="px-6 py-3 text-left font-bold text-foreground">Others</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
              <td className="px-6 py-4 text-success-green font-semibold">{row.buildwell}</td>
              <td className="px-6 py-4 text-muted-foreground">{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

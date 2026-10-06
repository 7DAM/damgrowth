'use client';

import { useState } from 'react';

const bottlenecks = [
  {
    title: 'Customer Support Triage Concierge',
    problem: 'Support teams drown in repeated tickets, slow responses, and manual routing.',
    outcome: 'Faster response time, lower cost per ticket, happier customers.',
    demo: 'Watch how AI classifies tickets, drafts replies, and routes issues automatically.',
  },
  {
    title: 'Lead Qualification Concierge',
    problem: 'Sales teams waste time on unqualified leads and slow follow-up.',
    outcome: 'Better pipeline, faster lead response, higher conversion.',
    demo: 'Watch how AI qualifies visitors and books serious sales conversations.',
  },
  {
    title: 'Invoice Processing Concierge',
    problem: 'Finance teams lose hours manually processing invoices and chasing approvals.',
    outcome: 'Lower processing cost, fewer errors, better cash flow visibility.',
    demo: 'Watch how AI extracts invoice data, flags anomalies, and routes approvals.',
  },
];

function getDiagnosis(input: string) {
  const text = input.toLowerCase();

  if (
    text.includes('support') ||
    text.includes('customer') ||
    text.includes('ticket') ||
    text.includes('complaint')
  ) {
    return `
Your bottleneck appears to be Customer Support Operations.

Recommended AI Concierge:
Customer Support Triage Concierge.

What it can do:
1. Classify incoming tickets automatically.
2. Draft responses for common issues.
3. Route urgent issues to humans.
4. Reduce first response time.
5. Lower cost per ticket.

Next best step:
Watch the Customer Support Triage demo and book an AI Outcome Audit.
    `.trim();
  }

  if (
    text.includes('lead') ||
    text.includes('sales') ||
    text.includes('pipeline') ||
    text.includes('prospect') ||
    text.includes('marketing')
  ) {
    return `
Your bottleneck appears to be Lead Qualification and Sales Conversion.

Recommended AI Concierge:
Lead Qualification Concierge.

What it can do:
1. Replace static intake forms with intelligent conversation.
2. Qualify leads by need, budget, and timeline.
3. Score leads automatically.
4. Route hot leads to sales.
5. Nurture cold leads without manual follow-up.

Next best step:
Watch the Lead Qualification demo and book an AI Outcome Audit.
    `.trim();
  }

  if (
    text.includes('invoice') ||
    text.includes('finance') ||
    text.includes('payment') ||
    text.includes('billing') ||
    text.includes('accounting')
  ) {
    return `
Your bottleneck appears to be Finance Operations / Invoice Processing.

Recommended AI Concierge:
Invoice Processing Concierge.

What it can do:
1. Extract data from invoices automatically.
2. Match invoices against purchase orders.
3. Flag anomalies and approval risks.
4. Route invoices to the right approver.
5. Reduce manual finance workload.

Next best step:
Watch the Invoice Processing demo and book an AI Outcome Audit.
    `.trim();
  }

  return `
Thank you. Your bottleneck needs deeper diagnosis.

Based on your answer, Dam Growth would start with an AI Outcome Audit.

We will map:
1. The operational workflow causing the most friction.
2. The estimated cost of the bottleneck.
3. The fastest AI concierge to deploy.
4. The expected impact on cost, speed, and EBITDA.

Next best step:
Book the AI Outcome Audit and choose one bottleneck to solve first.
  `.trim();
}

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function runDiagnosis() {
    if (!input.trim()) {
      setOutput('Please enter your biggest operational bottleneck first.');
      return;
    }

    setLoading(true);
    setOutput(null);

    setTimeout(() => {
      setOutput(getDiagnosis(input));
      setLoading(false);
    }, 900);
  }

  return (
    <main className="min-h-screen bg-[#04060d] text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04060d]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-wide">
            Dam Growth
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#engine" className="hover:text-white">
              AI Outcome Engine
            </a>
            <a href="#concierges" className="hover:text-white">
              AI Concierges
            </a>
            <a href="#demos" className="hover:text-white">
              Demos
            </a>
            <a href="#diagnosis" className="hover:text-white">
              Diagnosis
            </a>
          </nav>

          <a
            href="#diagnosis"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-200"
          >
            Start AI Diagnosis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            AI Outcome Engine
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Turn operational bottlenecks into measurable EBITDA growth.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Dam Growth helps businesses move into AI with practical AI
            concierges that reduce cost, speed up operations, and improve
            profitability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#diagnosis"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Run AI Bottleneck Diagnosis
            </a>

            <a
              href="#demos"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Watch the 3 AI Concierge Demos
            </a>
          </div>
        </div>
      </section>

      {/* Fear dismantling */}
      <section className="border-y border-white/10 bg-white/3">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-2xl text-3xl font-semibold">
            AI should not feel risky. It should feel like leverage.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <h3 className="text-lg font-semibold">Profitability</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Every AI deployment must connect to revenue, cost reduction,
                or EBITDA growth. If it does not move the numbers, we do not
                recommend it.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <h3 className="text-lg font-semibold">Control</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We design AI systems with human oversight, clear rules, secure
                workflows, and measurable performance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <h3 className="text-lg font-semibold">Speed</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Start with one bottleneck and one AI concierge. No giant,
                confusing, six-month transformation project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Outcome Engine */}
      <section id="engine" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">
          The Dam Growth AI Outcome Engine
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <p className="text-sm text-slate-400">Step 1</p>
            <h3 className="mt-2 text-lg font-semibold">Diagnose</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Identify the operational bottleneck costing your business money.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <p className="text-sm text-slate-400">Step 2</p>
            <h3 className="mt-2 text-lg font-semibold">Quantify</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Calculate the cost of the problem and the potential savings.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <p className="text-sm text-slate-400">Step 3</p>
            <h3 className="mt-2 text-lg font-semibold">Deploy</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Build an AI concierge to solve the specific workflow.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <p className="text-sm text-slate-400">Step 4</p>
            <h3 className="mt-2 text-lg font-semibold">Measure</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Track time saved, cost reduced, revenue improved, and EBITDA
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* AI Concierge Diagnosis */}
      <section
        id="diagnosis"
        className="border-y border-white/10 bg-white/3"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold">
              What is your biggest operational bottleneck right now?
            </h2>

            <p className="mt-4 text-slate-300">
              This is a prototype of the Dam Growth AI concierge. In the next
              version, we connect it to a real AI model.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#070b14] p-6">
              <label
                htmlFor="bottleneck"
                className="text-sm font-medium text-slate-300"
              >
                Describe your bottleneck
              </label>

              <textarea
                id="bottleneck"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Example: Our support team is overwhelmed with tickets. Or: Our sales team wastes time on bad leads. Or: Finance spends too much time processing invoices."
                className="mt-3 h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30"
              />

              <button
                type="button"
                onClick={runDiagnosis}
                disabled={loading}
                className="mt-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Analyzing...' : 'Run AI Diagnosis'}
              </button>

              {output && (
                <div className="mt-6 whitespace-pre-line rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                  {output}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3 AI Concierges */}
      <section id="concierges" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">
          Three AI concierges that solve real business bottlenecks
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {bottlenecks.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/4 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-sm font-medium text-slate-400">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.problem}
              </p>

              <p className="mt-5 text-sm font-medium text-slate-400">
                Business outcome
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.outcome}
              </p>

              <p className="mt-5 text-sm font-medium text-slate-400">
                Demo
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.demo}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section id="demos" className="border-y border-white/10 bg-white/3">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold">
            Watch the AI solve real problems
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/20 text-sm text-slate-400">
                Video 1: Support Triage Concierge
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                Customer Support Triage
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                See how AI classifies tickets, drafts responses, and routes
                urgent issues to humans.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/20 text-sm text-slate-400">
                Video 2: Lead Qualification Concierge
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                Lead Qualification
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                See how AI qualifies website visitors and books serious sales
                conversations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/20 text-sm text-slate-400">
                Video 3: Invoice Processing Concierge
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                Invoice Processing
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                See how AI extracts invoice data, flags anomalies, and speeds
                up approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-semibold">
            Start with one bottleneck. Measure the outcome. Expand from there.
          </h2>

          <p className="mt-5 text-slate-300">
            Dam Growth helps your business move into AI with a controlled
            outcome engine tied to profitability, cost reduction, and EBITDA
            growth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#diagnosis"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Start the AI Diagnosis
            </a>

            <a
              href="#demos"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Watch the Demos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold">Dam Growth</p>
            <p className="mt-2 text-sm text-slate-400">
              AI Outcome Engine for profitability, cost reduction, and EBITDA
              growth.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dam Growth. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
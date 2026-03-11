index.jsx
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur sticky top-0 z-50 text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/mnt/data/logo with ring clean .png" alt="Noble Pipe & Supply logo" className="h-14 w-14 object-contain rounded-full bg-white p-1" />
            <div>
              <div className="text-2xl font-bold tracking-tight">Noble Pipe & Supply</div>
              <div className="text-sm text-slate-300">Built on Integrity</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-amber-300">Home</a>
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#products" className="hover:text-amber-300">Products</a>
            <a href="#why-noble" className="hover:text-amber-300">Why Noble</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="absolute inset-0">
          <img
            src="/refinery-piping.jpg"
            alt="Refinery piping background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <div className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-300 mb-6">
              100% Woman-Owned PVF Supplier
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              PVF Supply for Contractors, Plants & Industrial Projects
            </h1>

            <p className="mt-6 text-lg text-slate-200 max-w-2xl">
              Noble Pipe & Supply provides pipe, valves, fittings, bolts, and gaskets for contractors and industrial facilities across Texas and the Gulf Coast. Built on integrity and backed by real field experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-amber-500 px-6 py-3 text-black font-semibold shadow hover:bg-amber-400">
                Request a Quote
              </a>

              <a href="#products" className="rounded-2xl border border-white/40 px-6 py-3 font-medium hover:bg-white/10">
                View Product Line
              </a>
            </div>

            <div className="mt-10 text-sm text-slate-300">
              Serving Contractors • Plants • Industrial Facilities
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-w-md">
              <img src="/tonya-adams.jpg" alt="Tonya Adams CEO Noble Pipe & Supply" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">About Noble</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Built from the field, not from a desk.</h2>
          <p className="mt-6 text-slate-600 leading-8">
            Noble Pipe & Supply was built by people who understand what happens when the wrong material shows up late, incomplete, or undocumented. Our team comes from real field experience and knows what contractors, plants, and industrial customers expect when it is time to perform.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            We focus on clear communication, dependable sourcing, and practical support that helps keep jobs moving. When customers call Noble, they get a team that understands urgency, specifications, and accountability.
          </p>
        </div>
      </section>

      <section id="products" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Products</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Industrial product line</h2>
              <p className="mt-4 max-w-3xl text-slate-600 leading-8">
                Noble Pipe & Supply supports contractors and industrial customers with core PVF materials, specialty items, and hard-to-find products for project and maintenance needs.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 px-5 py-4 text-sm text-slate-200 shadow-lg">
              24 / 7 emergency service available
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pipe",
                text: "CS, SS, Galv, Alloy, and Exotic pipe for industrial and plant applications.",
              },
              {
                title: "Flanges & Fittings",
                text: "Standard and specialty flanges and fittings to support fabrication and installation needs.",
              },
              {
                title: "Valves",
                text: "Ball, gate, globe, check, butterfly, control, relief, actuated, and specialty valve options.",
              },
              {
                title: "Bolts & Fasteners",
                text: "Stud bolts, U-bolts, all-thread rod, and various fastening products for field and shop use.",
              },
              {
                title: "Gaskets & Sealing",
                text: "Gaskets and sealing products selected for industrial service conditions and performance needs.",
              },
              {
                title: "Structural & Support Items",
                text: "I-beam, structural steel, pipe supports, coated materials, and hard-to-find items.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-noble" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Why Noble</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Knowledge forged in the field.</h2>
          <p className="mt-6 text-slate-600 leading-8">
            We understand the materials we supply because we have worked with them in real service conditions. That practical knowledge shapes how we source, document, and deliver every order.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {[
            ["Spec-Focused", "We understand what inspectors look for and what gets rejected."],
            ["Schedule-Driven", "Clear communication. Reliable delivery. No surprises."],
            ["Application-Based Supply", "Material selected with service conditions and performance in mind."],
            ["Relationship Built", "We believe strong projects are built on strong partnerships with customers, vendors, and employees alike."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-8 shadow-sm bg-white">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-slate-950 text-white p-10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Built for General Contractors</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Correct material. On time. Documented properly.</h3>
              <p className="mt-5 text-slate-300 leading-8">
                Noble Pipe & Supply understands what is at stake when material hits your jobsite. Our goal is to make sure what arrives is ready to install and supported the right way.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "Correct material",
                "On time",
                "Documented properly",
                "Ready to install",
                "No excuses",
                "No shortcuts",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-4 border border-white/10">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Request a quote and send us your material list.</h2>
            <p className="mt-6 text-slate-300 leading-8 max-w-xl">
              Send bid lists, takeoffs, valve schedules, and material requests to our sales team. Noble Pipe & Supply is ready to support your next project with responsive service and industrial product knowledge.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-amber-300">What customers can send</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl bg-white/5 px-4 py-3">Material lists</div>
                <div className="rounded-2xl bg-white/5 px-4 py-3">Bid packages</div>
                <div className="rounded-2xl bg-white/5 px-4 py-3">Valve schedules</div>
                <div className="rounded-2xl bg-white/5 px-4 py-3">Takeoffs</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white text-slate-900 p-8 shadow-2xl">
            <div className="space-y-5 text-sm">
              <div>
                <div className="font-semibold">Send Quotes To</div>
                <div className="text-slate-600">Sales@NoblePVF.com</div>
              </div>

              <div>
                <div className="font-semibold">Website Goal</div>
                <div className="text-slate-600">Built to rank for PVF supply Houston, industrial pipe supplier Texas, and pipe valve fitting supplier Gulf Coast.</div>
              </div>

              <div className="pt-4 border-t">
                <div className="font-semibold">Leadership Team</div>
              </div>

              <div>
                <div className="font-semibold">Tonya Adams — Owner / CEO</div>
                <div className="text-slate-600">281-691-0202</div>
                <div className="text-slate-600">Tonya@noblepvf.com</div>
              </div>

              <div>
                <div className="font-semibold">Lance Mata — Operations Manager</div>
                <div className="text-slate-600">281-814-7683</div>
                <div className="text-slate-600">Lance@noblepvf.com</div>
              </div>

              <div>
                <div className="font-semibold">Daniel Adams — General Manager</div>
                <div className="text-slate-600">281-935-9019</div>
                <div className="text-slate-600">Daniel@NoblePVF.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

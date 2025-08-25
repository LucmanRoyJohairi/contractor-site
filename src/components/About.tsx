export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="/modern-city-skyline-with-commercial-buildings.png"
              alt="City skyline"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Welcome To EMS Contracting</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              EMS Contracting is one of the UK&apos;s leading commercial maintenance contractors. We
              provide a comprehensive range of services to businesses across the nation, ensuring
              your facilities operate at peak efficiency 24/7. Our experienced team delivers quality
              workmanship and reliable service you can trust.
            </p>

            {/* Partner logos */}
            <div className="mb-8 flex items-center space-x-4">
              <div className="rounded bg-blue-600 px-3 py-1 text-sm font-bold text-white">EMS</div>
              <div className="rounded bg-green-600 px-3 py-1 text-sm font-bold text-white">ECO</div>
              <div className="rounded bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                FIRE
              </div>
              <div className="rounded bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                TECH
              </div>
            </div>

            <button className="rounded-md bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

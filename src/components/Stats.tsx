const stats = [
  { number: '1000+', label: 'Projects' },
  { number: '500+', label: 'Completed Stores' },
  { number: '50+', label: 'Skilled Trades' },
  { number: '24/7', label: 'Leisure Facilities' },
  { number: '100+', label: 'Residential Developments' },
  { number: '200+', label: 'Bespoke Projects' },
]

export default function Stats() {
  return (
    <section className="bg-gray-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              EMS Contracting Has Been Serving Clients Throughout The UK For Its Innovation
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300">
              EMS Contracting is a Best Established Leader With Extensive Experience Providing
              Turnkey Solutions in a Wide Range of Sectors. With A Proven Track Record, Our Team,
              Equipped With State-of-the-Art Technology And Expertise, Has Successfully Completed
              Numerous Projects Across Various Industries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-opacity-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="text-2xl font-bold">{stat.number}</span>
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

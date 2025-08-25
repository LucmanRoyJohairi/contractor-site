const partners = [
  { name: 'Aldea', logo: '/aldea-company-logo.png' },
  { name: 'Fulcrum', logo: '/fulcrum-company-logo.png' },
  { name: 'Stonewall', logo: '/stonewall-company-logo.png' },
  { name: 'Daikin', logo: '/daikin-company-logo.png' },
  { name: 'Mitsubishi', logo: '/mitsubishi-company-logo.png' },
  { name: 'ABEC', logo: '/abec-company-logo.png' },
  { name: 'GP', logo: '/gp-company-logo.png' },
  { name: 'HSE', logo: '/hse-company-logo.png' },
  { name: 'AE', logo: '/ae-company-logo.png' },
  { name: 'Climavent', logo: '/climavent-company-logo.png' },
]

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Partner</h2>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-5">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo || '/placeholder.svg'}
                alt={partner.name}
                className="h-12 w-auto opacity-60 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

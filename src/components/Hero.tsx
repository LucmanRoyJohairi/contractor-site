export default function Hero() {
  return (
    <section className="relative h-[654px] bg-gray-50 bg-[url('/images/home-banner-1.png')] bg-cover bg-center py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-[540px] items-center justify-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-6 text-base leading-tight font-bold text-white lg:text-lg">
              EMS Contracting
            </p>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
              Delivering first-class commercial maintenance nation wide 24/7
            </h1>
            <button className="rounded-md bg-[#E48E33] px-8 py-3 font-medium text-white hover:bg-orange-600">
              Make an Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

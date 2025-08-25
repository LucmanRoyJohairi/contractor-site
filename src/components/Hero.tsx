import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[654px] py-20">
      {/* Background image with priority loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-banner-1.png"
          alt="Home Banner"
          layout="fill" // Take up the whole section
          objectFit="cover"
          objectPosition="center"
          priority // Mark the image for preloading
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Site!</h1>
        <p className="mt-4">Your success starts here.</p>
      </div>
    </section>
  )
}

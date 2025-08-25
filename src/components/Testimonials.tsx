import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'EMS has been great to work with. They are professional, reliable and always deliver quality work on time.',
    author: 'John Smith',
    company: 'ABC Corp',
    rating: 5,
  },
  {
    text: 'Outstanding service and attention to detail. Their team is knowledgeable and efficient in all aspects.',
    author: 'Sarah Johnson',
    company: 'XYZ Ltd',
    rating: 5,
  },
  {
    text: 'Highly recommend EMS for any commercial maintenance needs. Professional and cost-effective solutions.',
    author: 'Mike Wilson',
    company: 'Tech Solutions',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-blue-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Clients Says</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 text-gray-900 shadow-lg">
              <div className="mb-4 flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600 italic">&quot;{testimonial.text}&quot;</p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="bg-opacity-50 h-3 w-3 rounded-full bg-white"></div>
            <div className="bg-opacity-50 h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

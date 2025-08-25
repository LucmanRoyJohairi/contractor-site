import Plug from '../assets/home/plug.png'
import AC from '../assets/home/airconditioner.png'
import Fridge from '../assets/home/fridge.png'
import Gas from '../assets/home/natural-gas.png'
import Panel from '../assets/home/solar-panel.png'
import Valve from '../assets/home/valve.png'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const services = [
  {
    imageURL: Plug,
    title: 'Electrical and Mechanical',
    color: 'bg-gray-100',
  },
  {
    imageURL: AC,
    title: 'Air Conditioning and Ventilation',
    color: 'bg-gray-100',
  },
  {
    imageURL: Fridge,
    title: 'Refrigeration',
    color: 'bg-gray-100',
  },
  {
    imageURL: Gas,
    title: 'Fire Regulation',
    color: 'bg-gray-100',
  },
  {
    imageURL: Panel,
    title: 'Renewable Energy and Heating',
    color: 'bg-gray-100',
  },
  {
    imageURL: Valve,
    title: 'Electricity And Gas Metering',
    color: 'bg-gray-100',
  },
]

export default function Services() {
  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="mx-auto flex h-[1194px] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">WHATEVER YOU NEED DONE</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div
                className={`${service.color} mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg`}
              >
                <Image src={service.imageURL} alt={`service-${index}`} height="128" width="128" />
              </div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="flex h-[56px] w-[195px] flex-row font-medium text-black hover:text-blue-700">
            View All Services
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

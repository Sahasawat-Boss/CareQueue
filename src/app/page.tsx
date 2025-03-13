import Image from 'next/image';
import PatientForm from './Components/PatientForm';
import Link from 'next/link';

//import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen max-h-screen black-theme">

      {/*//TODO>> OTP Verification*/}

      <section className="remove-scrollbar my-auto">
        <div className=" max-w-[500px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="CQLogo"
            className="mb-12 h-10 w-fit"
          />

      <PatientForm/>


          <div className="text-14-regular mt-20 flex justify-between bg-gray-700">
            <p className="justify-items-end text-dark-600 xl:text-left">
              BSynth © 2024 CareQueue
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <section className='my-auto'>
        <Image
          src="/Images/Index/Hero1.webp"
          height={1000}
          width={1000}
          alt="Index Image"
          className="max-w-[100%]"
        />
      </section>
    </div>
  )
}

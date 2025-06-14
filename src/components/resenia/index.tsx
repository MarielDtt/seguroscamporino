import Image from 'next/image';
const Resenia = () => {

  return (
    <div className="w-full h-[400px] lg mt-4">
      <p className="mt-4 text-center text-title1 lg:text-display3 text-primary-600">Clientes Satisfechos</p>
      <div className='space-y-4 pt-4'>
        <div className="flex w-full h-[96px] p-2 space-x-4 shadow-md">
          <Image
            src="/Nora.png"
            width={96}
            height={96}
            className="object-cover rounded-full"
            alt="Cliente Nora"
          />
          <div className='flex flex-col'>
            <p className='text-center text-body'>
              “PROBANDO”
            </p>
            <p className='text-caption text-secondary-800 text-center'>-Nora, Villa Urquiza</p>
          </div>
        </div>

        <div className="flex w-full h-[96px] p-2 space-x-4 bg-Background-Lilac mt-auto shadow-md">
          <div className='flex flex-col'>
            <p className='text-center text-body'>
              “No pensé que contratar un seguro fuera tan fácil. Me acompañaron en cada paso.”
            </p>
            <p className='text-caption text-secondary-800 text-center'>-Jorge, Córdoba</p>
          </div>

          <Image
            src="/Jorge.png"
            width={96}
            height={96}
            className="object-cover rounded-full"
            alt="Cliente Nora"
          />
        </div>

        <div className="flex w-full h-[96px] p-2 space-x-4 drop-shadow-lg shadow-md">
          <Image
            src="/Luis.png"
            width={96}
            height={96}
            className="object-cover rounded-full"
            alt="Cliente Nora"
          />
          <div className='flex flex-col'>
            <p className='text-center text-body'>
              “Sentí que hablaba con personas reales, no con una máquina. Muy buena experiencia.”
            </p>
            <p className='text-caption text-secondary-800 text-center'>-Nora, Villa Urquiza</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resenia;
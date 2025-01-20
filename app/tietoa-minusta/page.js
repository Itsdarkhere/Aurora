import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Quote from "@/components/Quote";
import Image from "next/image";
import american_football from "../../public/football.jpg";

export default function Aurora() {
  return (
    <div className='w-full flex flex-col'>
    <header className='relative h-screen'>
      <Image
        src={american_football}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='text-center text-white px-4'>
          <h1 className='text-5xl font-bold mb-4 text-indigo-100'>Psyykkinen Valmennus</h1>
          <p className='text-xl mb-8 text-indigo-200'>
            Aurora Huovinen | Psykologi (PsM), Psyykkinen valmentaja
          </p>
        </div>
      </div>
    </header>

    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 flex flex-wrap items-center'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0 relative h-96'>
          <Image
            src={american_football}
            alt="Aurora Huovinen"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className='w-full md:w-1/2 md:pl-12'>
          <h2 className='text-3xl font-bold mb-6 text-indigo-900'>Tietoa minusta</h2>
          <p className='text-indigo-800 mb-6'>
            Psyykkisenä valmentajana autan urheilijoita ja liiketoiminnan
            ammattilaisia kehittämään suorituskykyään, vahvistamaan
            hyvinvointiaan ja saavuttamaan tavoitteensa.
          </p>
          <p className='text-indigo-800'>
            Tavoitteena on vahvistaa suorituskykyäsi mielenprosessien avulla
            ja auttaa löytämään tasapaino, joka tukee sekä tavoitteidesi
            saavuttamisessa että kokonaisvaltaisessa jaksamisessa.
          </p>
        </div>
      </div>
    </section>

    <section className='py-20 bg-indigo-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16 text-indigo-900'>Palvelut</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='relative h-48'>
              <Image
                src={american_football}
                alt="Urheilijat"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-4 text-indigo-800'>
                Urheilijoiden valmennus
              </h3>
              <p className='text-indigo-700'>
                Kehitä suorituskykyäsi ja saavuta tavoitteesi kilpaurheilussa.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='relative h-48'>
              <Image
                src={american_football}
                alt="Liiketoiminta"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-4 text-indigo-800'>
                Liiketoiminnan ammattilaiset
              </h3>
              <p className='text-indigo-700'>
                Vahvista suorituskykyäsi työelämässä ja kehitä
                paineensietokykyä.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='relative h-48'>
              <Image
                src={american_football}
                alt="Etävalmennus"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-4 text-indigo-800'>Etävalmennus</h3>
              <p className='text-indigo-700'>
                Osallistu valmennukseen mistä päin Suomea tahansa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16 text-indigo-900'>Hinnasto</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='bg-indigo-50 rounded-lg shadow-lg p-8 text-center hover:bg-indigo-100 transition-colors'>
            <h3 className='text-xl font-bold mb-4 text-indigo-800'>1x Valmennus</h3>
            <p className='text-4xl font-bold text-indigo-600 mb-6'>90€</p>
            <p className='text-indigo-700'>Yksittäinen valmennuskerta</p>
          </div>
          <div className='bg-indigo-50 rounded-lg shadow-lg p-8 text-center hover:bg-indigo-100 transition-colors'>
            <h3 className='text-xl font-bold mb-4 text-indigo-800'>3x Valmennus</h3>
            <p className='text-4xl font-bold text-indigo-600 mb-6'>265€</p>
            <p className='text-indigo-700'>Säästä 5€</p>
          </div>
          <div className='bg-indigo-50 rounded-lg shadow-lg p-8 text-center hover:bg-indigo-100 transition-colors'>
            <h3 className='text-xl font-bold mb-4 text-indigo-800'>5x Valmennus</h3>
            <p className='text-4xl font-bold text-indigo-600 mb-6'>440€</p>
            <p className='text-indigo-700'>Säästä 10€</p>
          </div>
        </div>
      </div>
    </section>

    <section className='py-20 bg-indigo-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8 text-indigo-900'>Ota yhteyttä</h2>
          <p className='text-indigo-800 mb-8'>
            Varaa maksuton tutustumiskeskustelu tai kysy lisätietoja
            palveluista.
          </p>
          <button className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors'>
            Varaa aika
          </button>
        </div>
      </div>
    </section>

    <footer className='bg-indigo-900 text-indigo-100 py-12'>
      <div className='container mx-auto px-4 text-center'>
        <p className='mb-4'>Aurora Huovinen</p>
        <p className='mb-4'>Psykologi (PsM), Psyykkinen valmentaja</p>
        <p>© 2025 Kaikki oikeudet pidätetään</p>
      </div>
    </footer>
  </div>
  );
}

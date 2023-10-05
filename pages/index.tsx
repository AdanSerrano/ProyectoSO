import Link from "next/link";

export default function Home() {
    return (
        <div className='bg-hero-pattern bg-no-repeat bg-cover flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 '>
            <header className='flex justify-between mb-40'>
                <p className='text-xl font-black-400 text-red-800'>Sistemas Operativos</p>
                <nav className='flex gap-x-8'>
                    <Link className='hover:underline hover:text-sm text-red-800' href='/login'>Ingresar </Link>
                    <Link className='hover:underline hover:text-sm text-red-800' href='/sign-up'>Registrarse</Link>
                </nav>
            </header>

        </div>
    )
}

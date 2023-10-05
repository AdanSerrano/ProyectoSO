import { logout, verifyIfUserIsEnrolled, verifyUserEmail } from "@/firebase/authentication";
import { User } from "@firebase/auth";
import Link from "next/link";
import { notify } from "@/utils/notify";

type Props = {
    currentUser: User | null;
}

export function UserComponent({ currentUser }: Props) {

    async function sendEmail() {
        if (currentUser) {
            const response = await verifyUserEmail(currentUser);

            if (response) {
                notify('Email enviado');
            } else {
                notify('Algo salio mal');
            }
        }
    }

    return (
        <div className="bg-white h-screen w-screen">
            <div className='flex flex-col justify-center items-center px-12 gap-y-12 pt-40'>
                <h2 className="mt-20 text-3xl text-center font-bold text-gray-800">Hola Bienvenido</h2>
                {
                    currentUser && currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) &&
                    <Link className='hover:text-black underline text-center w-full' href='/mfa'>
                        Activa la autenticacion multifactor
                    </Link>


                }
                {
                    currentUser && !currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) &&
                    <button
                        onClick={sendEmail}
                        className='hover:text-black underline text-center w-full'>
                        Verifica tu Email
                    </button>
                }
                <button
                    onClick={logout}
                    className="bg-black rounded-xl flex h-11 items-center justify-center px-6">
                    <span className="relative text-base font-light text-white">
                        Salir
                    </span>
                </button>

                <Link href="/" className="text-black">Home</Link>
            </div>
        </div>
    )
}
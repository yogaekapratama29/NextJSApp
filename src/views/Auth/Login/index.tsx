import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./login.module.scss";


const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push('/product');
    };
    return (
        <div className={styles.login}>
        <h1 className='text-4xl font-bold'>Login Page</h1>
        <button onClick={() => handleLogin()}>Login</button>
        {/* Navigasi menggunakan Link */}
        {/* Styling model Html */}
        <p style={{color: "red", border : "1px solid red", borderRadius: "10px"}}>Belum punya akun? registrasi <Link href={"/auth/register"}>Disini</Link></p>
    </div>
    )
}
export default LoginViews;
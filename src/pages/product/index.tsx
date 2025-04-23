import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLogin, setLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
        if(!isLogin){
            push('/auth/login');
        }
    },[])
    return (
        <div>
        <h1>Product Page</h1>
        <p>This is the product page.</p>
        </div>
    );
}

export default ProductPage;
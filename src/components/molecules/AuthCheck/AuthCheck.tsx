import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import AuthContext from '@/context/auth.context';
import Login from '../Login/Login'

function AuthCheck({children}: any) {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();
    
    useEffect(() => {
      if(user && !loading && router.pathname === '/Gallery') {
        router.replace(`/Gallery/${user.uid}`);
      }
    
    }, [user, loading, router]);
    

    if(user && !loading && router.pathname !== '/') {
      return children;
    }
    else if (!user && !loading) {
      return <Login/>;
    }else {
      return 'Loading';
    }
}

export default AuthCheck
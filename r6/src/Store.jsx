import { createContext, useEffect, useState } from 'react';
import useRoute from './Hooks/useRoute';
import usePageLogin from './Hooks/usePageLogin';
import useUser from './Hooks/useUser';
import usePageAdmin from './Hooks/usePageAdmin';

export const Store = createContext();


export const Data = ({children}) => {

    const [displayPage, goToPage, pageSlug] = useRoute();
    const [loginResponse, setLoginRequest] = usePageLogin();
    const [user, setUser] = useUser();
    const [adminResponse, adminLoad] = usePageAdmin();

    const [adminPageData, setAdminPageData] = useState(null);


    useEffect(() => {
        if (null === loginResponse) {
            return;
        }

        if (loginResponse?.status === 'login-ok') {
            setUser(loginResponse.user);
            goToPage('home');
        }

        if (loginResponse?.status === 'logout-ok') {
            setUser(null);
            goToPage('home');
        }

    }, [loginResponse]);

    // ADMIN PAGE
    useEffect(() => {
        if (null === adminResponse) {
            return;
        }
        if (adminResponse.status === 'ok') {
            setAdminPageData(adminResponse.data)
        }
        
    }, [adminResponse]);



    useEffect(() => {
        switch(pageSlug) {
            case 'admin': adminLoad()

            default:
        }

    }, [pageSlug])



    return (
        <Store.Provider value={{
            displayPage, goToPage, pageSlug,
            setLoginRequest,
            user,

            //pages info
            adminPageData,
        }}>
            {children}
        </Store.Provider>
    )

}
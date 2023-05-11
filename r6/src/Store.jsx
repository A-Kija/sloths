import { createContext, useEffect, useState } from 'react';
import useRoute from './Hooks/useRoute';
import usePageLogin from './Hooks/usePageLogin';
import useUser from './Hooks/useUser';
import usePageAdmin from './Hooks/usePageAdmin';
import useMessages from './Hooks/useMessages';

export const Store = createContext();


export const Data = ({children}) => {

    const [displayPage, goToPage, pageSlug] = useRoute();
    const [user, setUser] = useUser();
    const [messages, addMessage] = useMessages();


    const [loginResponse, setLoginRequest] = usePageLogin();
    const [adminResponse, adminLoad] = usePageAdmin();

    const [adminPageData, setAdminPageData] = useState(null);

    

    // Login PAGE
    useEffect(() => {
        if (null === loginResponse) {
            return;
        }

        if (loginResponse?.status === 'login-ok') {
            setUser(loginResponse.user);
            addMessage(loginResponse.message);
            goToPage('home');
        }

        if (loginResponse?.status === 'error') {
            addMessage(loginResponse.message);
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
        } else {
           
            if (adminResponse.response.status === 401) {
                goToPage(401);
            } else {
                goToPage('error');
            }
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
            user, messages,

            //pages info
            adminPageData,
        }}>
            {children}
        </Store.Provider>
    )

}
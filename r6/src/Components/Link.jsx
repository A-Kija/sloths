import { useContext } from 'react';
import { Store } from '../Store';

export default function Link({ to, children, className }) {

    const { pageSlug, goToPage } = useContext(Store);

    const go = e => {
        e.preventDefault();
        goToPage(to);
    }

    return (
        <a className={className + (to === pageSlug ? ' active' : '')} href={to} onClick={go}>{children}</a>
    )
}
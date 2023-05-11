export default function Error({ error }) {

    if (error === 401) {
        return (
            <>
                <h1>401 Unauthorized</h1>
                <h3>You have no rights to access this resourse</h3>
            </>
        );
    }
    return (
        <h1>Ups... Error</h1>
    )

}
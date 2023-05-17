export default function Messages() {

    return (
        <div className="toast-container">

            <div className="toast show">
                <div className="toast-header">
                    <div className="type ok"></div>
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                    <button type="button" className="btn btn-close"></button>
                </div>
                <div className="toast-body">
                    See? Just like this.
                </div>
            </div>


            <div className="toast show">
                <div className="toast-header">
                <div className="type error"></div>
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                    <button type="button" className="btn btn-close"></button>
                </div>
                <div className="toast-body">
                    See? Just like this.
                </div>
            </div>

        </div>
    );
}
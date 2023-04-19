export default function Delete({ deleteModalData, setDeleteModalData, setDeleteData }) {

    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete Client</h5>
                        <button type="button" className="btn-close btn" onClick={_=> setDeleteModalData(null)}></button>
                    </div>
                    <h6>Do you want really to remove this client</h6>
                    <div className="modal-footer">
                        <button type="button" className="blue small" onClick={destroy}>Yes</button>
                        <button type="button" className="red small" onClick={_=> setDeleteModalData(null)}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
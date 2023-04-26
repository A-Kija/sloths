export default function E({children, color}) {

    console.log(children)

    return (
        <div className="nice-border">
            { color === 'red' ? children[0] : null}
            { color === 'blue' ? children[1] : null}
            { color === 'yellow' ? children[2] : null}

        </div>
    );

}
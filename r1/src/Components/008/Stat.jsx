export default function Stat({ sq }) {

    return (
        <div style={{
            position: 'fixed',
            top: '50px',
            right: '50px',
            border: '1px solid white',
            padding: '15px',
            fontFamily: 'monospace'
        }}>
            {('' + sq.length).padStart(2, '0')}
        </div>
    )

}
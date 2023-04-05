import ZanaBazar from "./ZanaBazar";

export default function Square({niceColor, letter}) {

    return (
        <div className="square zana" style={{
            backgroundColor: niceColor + '70',
            borderColor: niceColor
        }}>
            {
                letter > 30 ? letter : <ZanaBazar letter={letter} />
            }
            
        </div>
    );
}

// export default function Square(props) {

//     return (
//         <div className="square" style={{
//             backgroundColor: props.niceColor + '70',
//             borderColor: props.niceColor
//         }}></div>
//     );
// }
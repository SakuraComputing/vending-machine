import React from 'react'
import { ICan } from '../types/vending';

type Props = {
    canArray: ICan[]; 
}

const Cans: React.FC<Props> = (props: { canArray: ICan[] }) => {
    const greeting = 'Make a selection';

    return (
        <div className="cans">
            <h1>{greeting}</h1>
            <div>
                {props.canArray.map(can => 
                    <div key={can.id} className="vending-item">
                        <li>
                            {can.desc}
                        </li>
                        <li>
                            {can.volume}
                        </li>
                        <li>
                            {can.price}
                        </li>
                    </div>
                )}
            </div>
            
        </div>
    );
}
export default Cans;

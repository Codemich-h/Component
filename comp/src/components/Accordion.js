import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if(expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    }

    const rendereditems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = (
            <pan className="text-3xl">
            {isExpanded ? <GoChevronDown /> : < GoChevronLeft/>}
        </pan>
        );

        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b tems-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                    </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });
    return(
        <div className="border-x border-t rounded
        ">
            {rendereditems}
        </div>
    )
}

export default Accordion;

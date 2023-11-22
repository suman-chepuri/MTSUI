import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title"
                    onClick={() => setOpen(!open)} >
                    <span>

                        {item.title}
                    </span>

                    <IoIosArrowDown />

                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </a>
        )
    }
}
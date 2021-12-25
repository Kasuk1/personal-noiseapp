import { useState, useEffect } from "react";

export const useRightClickMenu = (nodeElement) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [trackURI, setTrackURI] = useState("");

    const handleContextMenu = (e) => {
        //! This will prevent the original options when you right click in the browser.
        if (e.target.className === "track") {
            e.preventDefault();
            e.pageX + 280 > window.innerWidth ? setX(`${window.innerWidth - 280}px`) : setX(e.pageX);
            e.pageY + 450 > window.innerHeight ? setY(`${window.innerHeight - 450}px`) : setY(e.pageY);
            setShowMenu(true);
            setTrackURI(e.target.id);
        }

        if (e.target.className !== "track") {
            e.preventDefault();
            setShowMenu(false);
        }
    }

    const handleClickAndWheel = () => {
        showMenu && setShowMenu(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickAndWheel);
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("wheel", handleClickAndWheel);
        return () => {
            document.removeEventListener("click", handleClickAndWheel);
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("wheel", handleClickAndWheel);
        }
    });

    return { x, y, showMenu, trackURI };
}
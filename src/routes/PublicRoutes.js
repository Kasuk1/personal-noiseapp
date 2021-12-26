import { Alert } from "../components/Alert"
import { Navbar } from "../components/layout/Navbar/Navbar"
import { Board } from "../features/board/Board"
import { User } from "../features/user/User"

export const PublicRoutes = () => {
    return (
        <>
            <Navbar />
            <User />
            <Board />
            <Alert />
        </>
    )
}

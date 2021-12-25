import { trackLoading } from "./trackLoading";
import { artistCardLoading } from "./artistCardLoading";

export const searchLoading = () => {
    return (
        <div className="search-loading">
            <div className="search-loading__subtitle"></div>
            {artistCardLoading()}
            <div className="search-loading__subtitle"></div>
            {trackLoading()}
        </div>
    );
};
import css from "./LoadMoreBtn.module.css";
import { Link } from "react-scroll";

function LoadMoreBtn() {
    return (
        <div>
            <Link
             to="load-more-button"
      spy={true}
      smooth={true}
      offset={950}
      duration={2000}>      
                <button className={css.loadBtn} onClick={loadMore} id="load-more-button">Load more</button>
          </Link>
        </div>
    );
}

export default LoadMoreBtn;
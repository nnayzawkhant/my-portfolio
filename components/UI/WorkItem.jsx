import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const WorkItem = (props) => {
  const { title, img, liveUrl, keyword, desc, gitUrl } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
          <Link href={gitUrl}>
            <span className={`${classes.portfolio__keyword}`} >
              {keyword}
            </span>
          </Link>
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <p>{desc}</p>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default WorkItem;

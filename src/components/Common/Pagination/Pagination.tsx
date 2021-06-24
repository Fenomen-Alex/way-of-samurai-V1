import React, {useState} from 'react';
import styles from './Pagination.module.css';
import cn from 'classnames';

type PropsType = {
  currentPage: number,
  totalItemsCount: number,
  pageSize: number,
  onPageChange: (p: number) => void,
  portionSize?: number
}

const Pagination: React.FC<PropsType> = ({currentPage, totalItemsCount, pageSize, onPageChange, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return <div className={cn(styles.paginator)}>
    {portionNumber > 1 &&
    <button onClick={() => {
      setPortionNumber(portionNumber - 1)
    }}>PREV</button>}

    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span className={cn({
          [styles.selectedPage]: currentPage === p
        }, styles.pageNumber)}
                     key={p}
                     onClick={() => onPageChange(p)}
        >{p}
            </span>
      })}
    {portionCount > portionNumber &&
    <button onClick={() => {
      setPortionNumber(portionNumber + 1)
    }}>NEXT</button>}
  </div>
};

export default Pagination;

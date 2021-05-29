import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({currentPage, totalUsersCount, pageSize, onPageChange}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
        {pages.map((p, index) => {
          if (p <= 25) {
            return (
              <span key={index}
                    onClick={() => onPageChange(p)}
                    className={currentPage === p ? styles.selected : ""}
              >{p}
            </span>
            )
          }
        })}
    </div>
  )
};

export default Pagination;

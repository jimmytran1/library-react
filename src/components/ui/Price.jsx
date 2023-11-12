import React from 'react'

export default function Price({salePrice, originalPrice}) {
  return (
    <div className="book__price">
        {
          // We are checking to see if book sale exist, if there is a sale,
          // then price original price and sale price. If it doesn't just print original price.
          salePrice ? (
            <>
              <span className="book__price--normal">
                ${originalPrice.toFixed(2)}
              </span>
              ${salePrice.toFixed(2)}
            </>
          ) : (
            <>${originalPrice.toFixed(2)}</>
          )
        }
      </div>
  )
}

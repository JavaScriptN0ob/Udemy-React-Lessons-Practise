import React from 'react';

function CheckoutHeader({
  className,
  children,
}) {
  return (
    <div className={className}>
      <span>{children}</span>
    </div>
  )
}

export default CheckoutHeader;
import React, { ReactNode, useRef } from 'react'
import './MaxHeightContainer.scss'

type MaxHeightContainerType = {
  header?: ReactNode
  footer?: ReactNode
  fullHeight?: boolean
  onScroll?: (top: number) => void
}

export const MaxHeightContainer: React.FC<MaxHeightContainerType> = ({
  header,
  footer,
  fullHeight = false,
  onScroll,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scrollTop = ref.current?.scrollHeight || 0
    onScroll && onScroll(scrollTop)
  }

  return (
    <div
      className={`MaxHeightContainer ${
        fullHeight ? 'MaxHeightContainer--full-height' : ''
      }`}
    >
      {header && <div className="MaxHeightContainer__header">{header}</div>}
      <div ref={ref} onScroll={handleScroll} className="MaxHeightContainer__content">{children}</div>
      {footer && <div className="MaxHeightContainer__footer">{footer}</div>}
    </div>
  )
}

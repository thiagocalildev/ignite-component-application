import { PropsWithChildren, Fragment } from 'react'

export function Header(props: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {props.children}
      </div>
    </Fragment>
  )
}

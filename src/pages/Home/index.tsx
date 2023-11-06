import { Outlet } from 'react-router'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>category1</li>
        <li>category2</li>
        <li>category3</li>
      </ul>
      <Outlet />
    </>
  )
}

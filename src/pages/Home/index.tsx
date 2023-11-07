import { Outlet } from 'react-router'
import BrowseCategories from '../../components/BrowseCategories'

export default function Home() {
  return (
    <>
      <BrowseCategories />
      <Outlet />
    </>
  )
}

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HeaderCard from 'src/components/HeaderCard/HeaderCard'
import MiddleCard from 'src/components/MiddleCard/MiddleCard'
import ThreeInfos from 'src/components/ThreeInfos/ThreeInfos'
import TwoInfos from 'src/components/TwoInfos/TwoInfos'
import CommentsCard from 'src/components/CommentsCard/CommentsCard'
import FooterCard from 'src/components/FooterCard/FooterCard'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <HeaderCard/>
      <ThreeInfos/>
      <MiddleCard/>
      <TwoInfos/>
      <CommentsCard/>
      <FooterCard/>
    </>
  )
}

export default HomePage

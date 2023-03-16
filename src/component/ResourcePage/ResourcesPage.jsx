import React from 'react'
import ResourceUpperSection from './ResourceUpperSection'
import ResourcesBottomSection from './ResourcesBottomSection.jsx'
import "../../css/resourcepage.css"

const ResourcesPage = () => {
  return (
   <div className='root'>
   <ResourceUpperSection/>
   <ResourcesBottomSection/>

   </div>
  )
}

export default ResourcesPage
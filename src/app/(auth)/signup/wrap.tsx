'use client'
import React, { useEffect, useState } from "react"

 function Wrap({children} :{children:React.ReactNode}) {
    const [data, setdata] = useState()
  return (
    <div>Wrap
        {children}
        {JSON.stringify(data)}
    </div>
  )
}

export default Wrap
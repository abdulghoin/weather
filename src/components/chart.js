import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const Chart = ({color, data, unit}) => {
  const average = () => _.round(_.sum(data)/data.length)
  return (
    <div>
      <Sparklines height={150} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average()} {unit}</div>
    </div>
  )
}

export default Chart

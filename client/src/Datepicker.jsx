import { useState } from "react"
import DateRangePicker from "tw-daterange"

const Datepicker = () => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })

  return (
    <DateRangePicker
      initialRange={range}
      onUpdate={(dateRange) => {
        setRange(dateRange)
      }}
    />
  )
}

export default Datepicker
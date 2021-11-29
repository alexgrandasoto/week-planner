import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DayBox.sass'

const DayBox = () => {
    return (
        <div className='border border-black day_box'>
            <TitleDayBox />
            <AddNewEvent /> 
        </div>
    )
}

const TitleDayBox = () => {
    return (
        <div className='border-b border-black p-3'>
            <h1 className='text-center'>Monday</h1>
        </div>
    )
}

const AddNewEvent = () => {
    return (
        <div className='cursor-pointer border rounded-xl text-center w-56 h-10 absolute flex justify-center items-center add_new_event'>
            <span className='mr-2'>Add new event</span>
            <FontAwesomeIcon icon={faPlusCircle} />
        </div>
    )
}

export default DayBox
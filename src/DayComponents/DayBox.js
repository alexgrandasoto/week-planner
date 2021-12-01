import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import TimePicker from '@mui/lab/TimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import SaveIcon from '@mui/icons-material/Save';
import './DayBox.sass'

const DayBox = () => {
    const [modal, setModal] = useState(false)
    return (
        <Fragment>
            <div className='border border-black day_box'>
                <TitleDayBox />
                <AddNewEvent {...{modal, setModal}} />
            </div>
            {
                modal &&
                <ModalAddNewEvent {...{setModal}} />
            }
        </Fragment>
    )
}

const TitleDayBox = () => {
    return (
        <div className='border-b border-black p-3'>
            <h1 className='text-center'>Monday</h1>
        </div>
    )
}

const AddNewEvent = ({modal, setModal}) => {
    return (
        <div className='text-center absolute flex justify-center items-center add_new_event'>
            <Fab color='secondary' aria-label='add' onClick={() => setModal(!modal)}>
                <AddIcon />
            </Fab>
        </div>
    )
}

const ModalAddNewEvent = ({ setModal }) => {
    const [value, setValue] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const handleClick = (loading, setLoading, setModal) => {
        setModal(false)
    }
    return (
        <div className='absolute w-full h-full modal_add_new_event'>
            <div className='m-auto bg-white modal_little_add_new_event relative p-7 ' >
                <FontAwesomeIcon icon={faTimes} className='absolute right-5 top-3 cursor-pointer' onClick={() => setModal(false)} />
                <div className='mb-10'>
                    <TextField
                        id="outlined-textarea"
                        label="New Event"
                        color='secondary'
                    />
                </div>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <div className='mb-8'>
                        <TimePicker
                            label="Start"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            className='mr-5'
                        />
                    </div>
                    <TimePicker
                        label="End"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <div className='mt-8 text-right' >
                    <LoadingButton
                        color="secondary"
                        onClick={() => handleClick(loading, setLoading, setModal)}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </LoadingButton>
                </div>
            </div>
        </div>
    )
}

export default DayBox
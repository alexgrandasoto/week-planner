import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import TimePicker from '@mui/lab/TimePicker';
import { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import SaveIcon from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import './DayBox.sass'

const DayBox = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({name: undefined, startTime: undefined, endTime: undefined, description: undefined})
    return (
        <Fragment>
            <div className='border border-black day_box'>
                <TitleDayBox />
                <AddNewEventButton {...{modal, setModal}} />
            </div>
            <ModalAddNewEvent {...{modal, setModal, data, setData}} />
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

const AddNewEventButton = ({modal, setModal}) => {
    return (
        <div className='text-center absolute flex justify-center items-center add_new_event'>
            <Fab color='secondary' aria-label='add' onClick={() => setModal(!modal)}>
                <AddIcon />
            </Fab>
        </div>
    )
}

const ModalAddNewEvent = ({ modal, setModal, data, setData }) => {
    const [loading, setLoading] = useState(false)
    const [newData, setNewData] = useState({ name: undefined, startTime: undefined, endTime: undefined, description: undefined })
    const handleClick = (loading, setLoading, setModal, newData, setNewData) => {
        setData(newData)
        setNewData({ name: undefined, startTime: undefined, endTime: undefined, description: undefined })
        setModal(false)
    }
    return (
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={modal}
            onClose={() => setModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
        }}
        >
            <Fade in={modal}>
                <div className='m-auto bg-white modal_little_add_new_event relative p-7 ' >
                    <div className='mb-10'>
                        <TextField
                            id="outlined-textarea"
                            label="New Event"
                            color='secondary'
                            value= {newData.name}
                            onChange={(e) => setNewData({...newData, name: e.target.value})}
                        />
                    </div>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <div className='mb-8'>
                            <TimePicker
                                label="Start"
                                value={newData.startTime}
                                onChange={(newValue) => {
                                    setNewData({ ...newData, startTime: newValue });
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                className='mr-5'
                            />
                        </div>
                        <TimePicker
                            label="End"
                            value={newData.endTime}
                            onChange={(newValue) => {
                                setNewData({...newData, endTime: newValue});
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <div className='mt-10'>
                        <TextField
                            id="outlined-textarea"
                            label="Description"
                            color='secondary'
                            onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                            value={newData.description}
                            multiline
                            fullWidth
                        />
                    </div>
                    <div className='mt-8 text-right' >
                        <LoadingButton
                            color="secondary"
                            onClick={() => handleClick(loading, setLoading, setModal, newData, setNewData)}
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            Save
                        </LoadingButton>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default DayBox
import React, { useState, useEffect } from 'react'
import '../RoomScreen/rooms.css'
import axios from "axios";
import moment from "moment";
import { DatePicker } from "antd";
import 'antd/dist/antd.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const { RangePicker } = DatePicker;

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
};

const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});

const RoomsScreen = () => {
    const [hotels, sethotels] = useState([]);
    const [duplicatehotels, setduplicatehotels] = useState([]);
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState('')
    const [searchkey, setsearchkey] = useState('')
    const [type, settype] = useState('all')

    useEffect(() => {
        try {
            const fetchRooms = async () => {
                const rooms = await (await axios.get("http://localhost:6500/api/rooms/allrooms")).data;
                console.log(rooms);
                sethotels(rooms);
                setduplicatehotels(rooms);
            };
            fetchRooms();
        } catch (error) {
            console.log(error);
        }
    }, []);

    function filterByDate(dates) {
        setfromdate(moment(dates[0]).format('DD-MM-YYYY'));
        settodate(moment(dates[1]).format('DD-MM-YYYY'));
        var temp = [];
        for (const room of duplicatehotels) {
            var availability = true;
            for (const booking of room.currentBookings) {
                if (moment(dates[0]).isBetween(booking.fromdate, booking.todate, undefined, '[]') ||
                    moment(dates[1]).isBetween(booking.fromdate, booking.todate, undefined, '[]')) {
                    availability = false;
                    break;
                }
            }
            if (availability) {
                temp.push(room);
            }
        }
        sethotels(temp);
    }

    function filterBySearch() {
        const updated = duplicatehotels.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));
        sethotels(updated);
    }

    function filterByType(e) {
        settype(e)
        const updated = e !== 'all' ? duplicatehotels.filter(room => room.type === e) : duplicatehotels;
        sethotels(updated);
    }

    return (
        <>
            <div className="row bs p-3 m-5 dark search_box" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control i2 m-2"
                        placeholder='Search spa rooms'
                        value={searchkey}
                        onChange={(e) => setsearchkey(e.target.value)}
                        onKeyUp={filterBySearch}
                    />
                </div>

                <div className="col-md-4">
                    <select className="form-control m-2" value={type} onChange={(e) => filterByType(e.target.value)} >
                        <option value="all">All</option>
                        <option value="Non-Deluxe">Non Deluxe</option>
                        <option value="Deluxe">Deluxe</option>
                    </select>
                </div>

                <div className="col-md-4 date_picker">
                    <RangePicker 
                        disabledDate={disabledDate} 
                        style={{ height: "38px", width: "98%" }} 
                        onChange={filterByDate} 
                        format='MM-DD-YYYY' 
                        className='m-2' 
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-9 mt-2 room_list">
                    {hotels.map((room) => (
                        <div className='container-card' key={room._id}> 
                            <div className='row bs room_card'>
                                <div className='col-md-4'>
                                    <img src={room.imageUrls[0]} className='smallimg'></img>
                                </div>
                                <div className='col-md-7'>
                                    <h1>{room.name}</h1>
                                    <p className='room_count'>Suitable for {room.maxcount} people</p>
                                    <p className='room_type'>Room Type - {room.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RoomsScreen

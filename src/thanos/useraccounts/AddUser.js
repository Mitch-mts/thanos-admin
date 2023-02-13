import React, {useState, useEffect} from 'react'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import CountryService from '../../service/CountryService';
import { Button } from 'primereact/button';

const AddUser = () => {
    const [countries, setCountries] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dob, setDob] = useState('');
    const [value10, setValue10] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Madrid', code: 'MRD' }
    ];

    const sex = [
        { name: 'Male', code: 'M' },
        { name: 'Female', code: 'F' }
    ]

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const handleSubmit = () => {

    }

    return (
        <div className="card">
            <h5>Add User Account</h5>

            <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputText type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <label htmlFor="firstname">First Name</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                    <InputText type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        <label htmlFor="lastname">Last Name</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Calendar inputId="dob" value={dob} onChange={(e) => setDob(e.value)}></Calendar>
                        <label htmlFor="dob">Date Of Birth</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Dropdown id="gender" options={sex} value={gender} onChange={(e) => setGender(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="gender">Gender</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputText id="email" value={email} onValueChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email Address</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputText id="mobileNumber" value={mobileNumber} onValueChange={(e) => setMobileNumber(e.target.value)} />
                        <label htmlFor="mobileNumber">Mobile Number</label>
                    </span>
                </div>
            
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={countries} value={location} onChange={(e) => setLocation(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Location</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <MultiSelect id="multiselect" options={cities} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></MultiSelect>
                        <label htmlFor="multiselect">Places Of Interest</label>
                    </span>
                </div>
            </div>
            <Button label="Submit" className="mr-2 mb-2" onClick={handleSubmit}></Button>
        </div>
    );
}

export default AddUser
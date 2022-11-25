import React, { useContext } from 'react';
import { AuthContext } from '../../../../../context/AuthProvider';

const ProductModal = ({ products }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const booking = {
            name,
            email,
            location,
            phone,
        }
        console.log(booking)

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Your Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn bg-cyan-700 w-full' type="submit" value="Submit" />

                        <div className="modal-action">
                            <label htmlFor="product-modal" type='submit' value='submit' className="btn w-full">
                            </label>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;
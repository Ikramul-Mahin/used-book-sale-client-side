import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../component/Loading/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, isLoading } = useForm()
    const imageHostKey = '43322b326f4170e15ea0e047c6b4b095'
    console.log(imageHostKey)
    const navigate = useNavigate()
    const handleAddDoctor = data => {
        console.log(data)
        const image = data.image[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const products = {
                        bookname: data.name,
                        bookimage: imgData.data.url,
                        location: data.location,
                        posteddate: data.posteddate,
                        price: data.price,
                        OriginalPrice: data.OriginalPrice,
                        sellerName: data.sellerName,
                        usedyear: data.usedyear
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            "content-type": 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            navigate('/dashboard/myproduct')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading ></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)} >

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: 'name is required'
                        })}
                    />
                    {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span> </label>
                    <input type='text'
                        placeholder='Location'
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {

                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Posted Date</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("posteddate", {
                            required: "Date is required"
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: "Price is required"
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">OriginalPrice</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("OriginalPrice", {
                            required: "OriginalPrice is required"
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">sellerName</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("sellerName", {
                            required: "Email is required"
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">usedyear</span> </label>
                    <input type='text'
                        className="input input-bordered w-full max-w-xs"
                        {...register("usedyear", {
                            required: "Email is required"
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span> </label>
                    <input type='file'
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: 'Photo is required'
                        })}
                    />
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Speciality</span> </label>
                    <select
                        {...register('speciality')}
                        className="select w-full max-w-xs text-slate-900">
                        {
                            specialties?.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >
                                {speciality.name}</option>)
                        }



                    </select>
                </div> */}

                <input className='btn w-full mt-4' value='Add Doctor' type="submit" />
                {/* {signUpError && <p className='text-red-700'>{signUpError}</p>} */}
            </form>
        </div>

    );
};

export default AddProduct;
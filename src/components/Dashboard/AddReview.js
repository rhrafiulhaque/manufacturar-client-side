import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault();
        const userName = user.displayName;
        const email = user.email;
        const message = event.target.message.value;
        const ratings = parseInt(event.target.ratings.value);
        const img = "https://i.ibb.co/vYShq7j/undraw-male-avatar-323b.png";
        const reviews= {
            name:userName,
            email:email,
            message:message,
            ratings:ratings,
            img:img
        }
        

        if(ratings<=5 && 0<ratings){
            event.target.reset();
            fetch('https://dry-journey-86237.herokuapp.com/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviews)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    toast.success(`Your Review is submitted Successfully`);
                }else{
                    toast.error('There Have an error');
                }
            });
        }else{
            toast.error('You have to Ratings in 5');
        }

    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>Welcome to Your review</h2>
            <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                <textarea type="text" name="message" placeholder="Your Review" class="input  input-bordered w-full h-52 max-w-xs" />
                <input type="number" name="ratings" placeholder="Ratings" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;
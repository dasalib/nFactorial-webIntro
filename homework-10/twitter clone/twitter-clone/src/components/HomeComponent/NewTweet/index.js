import { PROFILE_IMG_PATH } from "../images";

export default function NewTweet(){
    return (
            <div className="p-3" style={{borderBottom:'2px solid whitesmoke'}}>
            <img src={PROFILE_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}}/>
            <input placeholder="What's happening?" style={{border:'none', fontsize: 18, outline:'none'}} className='mx-3' />
        </div>
    )
}
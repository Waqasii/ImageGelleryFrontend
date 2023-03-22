import ProfileHeader from "./ProfileHeader";
import ImageUpload from "./ImageUpload";
import GridView from "./GridView";
import { handleImageUpload } from "../utils/helpers";



const images = [
    {
        id: 1,
        imageUrl: 'https://resizeimgbuck.s3.eu-north-1.amazonaws.com/waqasii.png',
        thumbnailUrl: 'https://resizeimgbuck.s3.eu-north-1.amazonaws.com/waqasii-resized.png',
        caption: 'Caption 1',
    },
    {
        id: 2,
        imageUrl: 'https://loremflickr.com/800/600',
        thumbnailUrl: 'https://loremflickr.com/300/300',
        caption: 'Caption 2',
    },
    {
        id: 3,
        imageUrl: 'https://source.unsplash.com/500x300/?nature,water',
        thumbnailUrl: 'https://source.unsplash.com/300x300/?nature,water',
        caption: 'Caption 3',
    },
    {
        id: 4,
        imageUrl: 'https://source.unsplash.com/500x300/?nature,water',
        thumbnailUrl: 'https://source.unsplash.com/300x300/?nature,water',
        caption: 'Caption 4',
    },
    {
        id: 1,
        imageUrl: 'https://picsum.photos/500/300/?random',
        thumbnailUrl: 'https://picsum.photos/300/300/?random',
        caption: 'Caption 1',
    },
    {
        id: 2,
        imageUrl: 'https://loremflickr.com/500/300',
        thumbnailUrl: 'https://loremflickr.com/300/300',
        caption: 'Caption 2',
    },
    {
        id: 3,
        imageUrl: 'https://source.unsplash.com/500x300/?nature,water',
        thumbnailUrl: 'https://source.unsplash.com/300x300/?nature,water',
        caption: 'Caption 3',
    },
];

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader username="Waqasii" totalPictures={13} />
            <ImageUpload onUpload={handleImageUpload} />
            <GridView images={images} />
        </div>
    );
};



export default Profile;
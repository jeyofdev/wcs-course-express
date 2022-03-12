import { useNavigate } from 'react-router-dom';
import Skill from '../skills/Skill';
import { XCircleIcon, PencilAltIcon } from '@heroicons/react/solid';

const Card = ({ id, name, city, skills, handleDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="relative rounded-lg border-solid border-gray-200 border-2 sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto">
            <button
                className="absolute right-10 mt-2"
                onClick={() => navigate(`/update/${id}`)}
            >
                <PencilAltIcon
                    className="h-6 w-6 text-green-500"
                    style={{ marginTop: '2px' }}
                />
            </button>

            <button
                className="absolute right-2 mt-2"
                onClick={() => handleDelete(id)}
            >
                <XCircleIcon className="h-7 w-7 text-red-500" />
            </button>

            <img
                className="max-w-200px mx-auto w-full"
                src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-photo-de-profil-d-affaires-de-l-avatar.jpg?ver=6"
                alt="profile"
            />

            <h2 className="mt-6 text-red-500 font-bold text-lg">{name}</h2>
            <h4 className="mt-2 mb-4">{city}</h4>

            <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                doloribus vel ducimus veniam impedit dolorem accusamus provident
                odio, ab veritatis iure alias.
            </p>

            <div className="mt-4">
                <h4 className="text-red-500 font-bold text-lg mb-4">
                    Wild Skills
                </h4>
                <div className="flex flex-wrap mb-4">
                    {skills.map((skill) => (
                        <Skill key={skill.title} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;

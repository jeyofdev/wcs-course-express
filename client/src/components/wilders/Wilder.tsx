// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Skill from '../skills/skill';
// import { PencilAltIcon, XCircleIcon } from '@heroicons/react/solid';
// import { useQueryClient } from 'react-query';
// import { useDeleteWilder } from '../../hooks/wildersHooks';
// import Modal from '../ui/modal';
// import Dialog from '../ui/modal/dialog';
// import { WilderPropsType } from '../../types';

// const Card = ({ _id, name, city, skills }: WilderPropsType) => {
//     const navigate = useNavigate();
//     const queryClient = useQueryClient();
//     const { mutateAsync } = useDeleteWilder(navigate);
//     const [modalIsShow, setModalIsShow] = useState<boolean>(false);

//     const handleDelete = async () => {
//         await mutateAsync(_id);
//         queryClient.invalidateQueries('wilders');
//     };

//     return (
//         <div className="relative rounded-lg border-solid border-gray-200 border-2 sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto">
//             <button
//                 className="absolute right-10 mt-2"
//                 onClick={() => navigate(`/update/${_id}`)}
//             >
//                 <PencilAltIcon
//                     className="h-6 w-6 text-green-500"
//                     style={{ marginTop: '2px' }}
//                 />
//             </button>

//             <button
//                 className="absolute right-2 mt-2"
//                 onClick={() => {
//                     setModalIsShow(!modalIsShow);
//                 }}
//             >
//                 <XCircleIcon className="h-7 w-7 text-red-500" />
//             </button>

//             <img
//                 className="max-w-200px mx-auto w-full"
//                 src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-photo-de-profil-d-affaires-de-l-avatar.jpg?ver=6"
//                 alt="profile"
//             />

//             <h2 className="mt-6 text-red-500 font-bold text-lg">{name}</h2>
//             <h4 className="mt-2 mb-4">{city}</h4>

//             <div className="mt-4">
//                 <h4 className="text-red-500 font-bold text-lg mb-4">
//                     Wild Skills
//                 </h4>
//                 <div className="flex flex-wrap mb-4">
//                     {skills.map((skill) => (
//                         <Skill key={skill._id} skill={skill} />
//                     ))}
//                 </div>
//             </div>

//             <Modal isShow={modalIsShow} handleClose={() => setModalIsShow(!modalIsShow)}>
//                 <Dialog
//                     text="Are you sure you want to delete this wilder 😢 ??"
//                     handleCancel={() => setModalIsShow(false)}
//                     handleConfirm={() => handleDelete()}
//                 />
//             </Modal>
//         </div>
//     );
// };

// export default Card;
export {};

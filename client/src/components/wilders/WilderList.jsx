import Alert from '../ui/Alert';
import Card from './Card';

const WilderList = ({ wilders, handleDelete }) => {
    return (
        <>
            {wilders.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-4">
                    {wilders.map((wilder) => (
                        <Card
                            key={wilder._id}
                            id={wilder._id}
                            name={wilder.name}
                            city={wilder.city}
                            skills={wilder.skills}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            ) : (
                <Alert variant="info">No result found.</Alert>
            )}
        </>
    );
};

export default WilderList;

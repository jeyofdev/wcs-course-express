const Skill = ({ skill }) => {
    return (
        <div
            className={`border ${
                skill.votes < 3
                    ? 'bg-red-500 border-red-500'
                    : 'border-green-500'
            } px-2 mb-2 mr-2 rounded`}
        >
            <p>
                {skill.title}{' '}
                <span
                    className={`${
                        skill.votes < 3 ? 'bg-red-500' : 'bg-green-600'
                    } rounded-full px-1 text-sm text-white`}
                >
                    {skill.votes}
                </span>
            </p>
        </div>
    );
};

export default Skill;

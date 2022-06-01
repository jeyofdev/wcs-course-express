import { SkillType } from '../../types';

const Skill = ({ title, votes }: SkillType) => {
    return (
        <div
            className={`border ${
                votes < 3 ? 'border-red-500' : 'border-green-500'
            } px-2 mb-2 mr-2`}
        >
            <p>
                {title}{' '}
                <span
                    className={`${
                        votes < 3 ? 'bg-red-500' : 'bg-green-600'
                    } rounded-full px-1 text-sm text-white`}
                >
                    {votes}
                </span>
            </p>
        </div>
    );
};

export default Skill;

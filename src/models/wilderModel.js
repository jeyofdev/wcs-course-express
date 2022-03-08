import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const WilderSchema = new Schema(
    {
        name: {
            type: String,
        },
        city: {
            type: String,
        },
        skills: [
            {
                title: String,
                votes: Number,
            },
        ],
    },
    { versionKey: false }
);

export default model('Wilder', WilderSchema);

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const WilderSchema = new Schema(
    {
        name: {
            type: String,
            unique: [true, 'The name must be unique'],
            required: [true, 'The name is required.'],
        },
        city: {
            type: String,
            required: [true, 'The city is required.'],
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

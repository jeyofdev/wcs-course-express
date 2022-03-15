import mongoose from 'mongoose';
import { IWilder } from '../interfaces/models';
const { Schema, model } = mongoose;

const WilderSchema = new Schema<IWilder>(
    {
        name: {
            type: String,
            unique: true,
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

export default model<IWilder>('Wilder', WilderSchema);

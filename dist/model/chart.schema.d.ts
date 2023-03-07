import * as mongoose from "mongoose";
import { User } from "./user.schema";
export type ChartDocument = Chart & Document;
export declare class Chart {
    labels: string[];
    datasets: number[];
    color: string;
    createdBy: User;
}
export declare const ChartSchema: mongoose.Schema<Chart, mongoose.Model<Chart, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Chart>;

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from "mongoose"
import { User } from "./user.schema"

export type ChartDocument = Chart & Document
@Schema()
class Label {
    @Prop()
    name: string
}

class Data {
    @Prop()
    data: number
}

class Dataset {
    @Prop()
    data: Data[]
    @Prop()
    color: string
}

export class Chart {
    @Prop({ required: true })
    labels: Label[]
    @Prop({ required: true })
    datasets: Dataset[]
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    createdBy: User
}

export const ChartSchema = SchemaFactory.createForClass(Chart)
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Chart, ChartDocument } from "../model/chart.schema";

@Injectable()
export class ChartService {
    constructor(@InjectModel(Chart.name) private chartModel: Model<ChartDocument>,
    ) { }

    async addChart(chart: Chart): Promise<Chart> {
        const reqBody = {
            labels: chart.labels,
            datasets: chart.datasets,
            createdBy: chart.createdBy
        }
        const newChart = new this.chartModel(reqBody);
        return newChart.save();
    }

    async readChart(user: string, response: Response, request: Request) {
        if (user) {
            return this.chartModel.findOne({ _user: user }).populate("createdBy").exec();
        }
        return this.chartModel.find().populate("createdBy").exec();
    }
}
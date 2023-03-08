"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartSchema = exports.Chart = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Chart = class Chart {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [String] }),
    __metadata("design:type", Array)
], Chart.prototype, "labels", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [Number] }),
    __metadata("design:type", Array)
], Chart.prototype, "datasets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ requierd: true }),
    __metadata("design:type", String)
], Chart.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Chart.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Chart.prototype, "scoreChange", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chart.prototype, "userId", void 0);
Chart = __decorate([
    (0, mongoose_1.Schema)()
], Chart);
exports.Chart = Chart;
exports.ChartSchema = mongoose_1.SchemaFactory.createForClass(Chart);
//# sourceMappingURL=chart.schema.js.map
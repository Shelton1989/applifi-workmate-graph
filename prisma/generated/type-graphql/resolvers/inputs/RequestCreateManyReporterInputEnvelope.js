"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCreateManyReporterInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateManyReporterInput_1 = require("../inputs/RequestCreateManyReporterInput");
let RequestCreateManyReporterInputEnvelope = class RequestCreateManyReporterInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateManyReporterInput_1.RequestCreateManyReporterInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RequestCreateManyReporterInputEnvelope.prototype, "data", void 0);
RequestCreateManyReporterInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestCreateManyReporterInputEnvelope", {
        isAbstract: true
    })
], RequestCreateManyReporterInputEnvelope);
exports.RequestCreateManyReporterInputEnvelope = RequestCreateManyReporterInputEnvelope;

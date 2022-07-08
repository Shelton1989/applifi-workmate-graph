"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCreateNestedManyWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateManyReporterInputEnvelope_1 = require("../inputs/RequestCreateManyReporterInputEnvelope");
const RequestCreateOrConnectWithoutReporterInput_1 = require("../inputs/RequestCreateOrConnectWithoutReporterInput");
const RequestCreateWithoutReporterInput_1 = require("../inputs/RequestCreateWithoutReporterInput");
const RequestWhereUniqueInput_1 = require("../inputs/RequestWhereUniqueInput");
let RequestCreateNestedManyWithoutReporterInput = class RequestCreateNestedManyWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestCreateNestedManyWithoutReporterInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateOrConnectWithoutReporterInput_1.RequestCreateOrConnectWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestCreateNestedManyWithoutReporterInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateManyReporterInputEnvelope_1.RequestCreateManyReporterInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateManyReporterInputEnvelope_1.RequestCreateManyReporterInputEnvelope)
], RequestCreateNestedManyWithoutReporterInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereUniqueInput_1.RequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestCreateNestedManyWithoutReporterInput.prototype, "connect", void 0);
RequestCreateNestedManyWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestCreateNestedManyWithoutReporterInput", {
        isAbstract: true
    })
], RequestCreateNestedManyWithoutReporterInput);
exports.RequestCreateNestedManyWithoutReporterInput = RequestCreateNestedManyWithoutReporterInput;

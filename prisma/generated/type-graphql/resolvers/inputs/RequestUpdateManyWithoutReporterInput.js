"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateManyWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateManyReporterInputEnvelope_1 = require("../inputs/RequestCreateManyReporterInputEnvelope");
const RequestCreateOrConnectWithoutReporterInput_1 = require("../inputs/RequestCreateOrConnectWithoutReporterInput");
const RequestCreateWithoutReporterInput_1 = require("../inputs/RequestCreateWithoutReporterInput");
const RequestScalarWhereInput_1 = require("../inputs/RequestScalarWhereInput");
const RequestUpdateManyWithWhereWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithWhereWithoutReporterInput");
const RequestUpdateWithWhereUniqueWithoutReporterInput_1 = require("../inputs/RequestUpdateWithWhereUniqueWithoutReporterInput");
const RequestUpsertWithWhereUniqueWithoutReporterInput_1 = require("../inputs/RequestUpsertWithWhereUniqueWithoutReporterInput");
const RequestWhereUniqueInput_1 = require("../inputs/RequestWhereUniqueInput");
let RequestUpdateManyWithoutReporterInput = class RequestUpdateManyWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateOrConnectWithoutReporterInput_1.RequestCreateOrConnectWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestUpsertWithWhereUniqueWithoutReporterInput_1.RequestUpsertWithWhereUniqueWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateManyReporterInputEnvelope_1.RequestCreateManyReporterInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateManyReporterInputEnvelope_1.RequestCreateManyReporterInputEnvelope)
], RequestUpdateManyWithoutReporterInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereUniqueInput_1.RequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereUniqueInput_1.RequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereUniqueInput_1.RequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereUniqueInput_1.RequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestUpdateWithWhereUniqueWithoutReporterInput_1.RequestUpdateWithWhereUniqueWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestUpdateManyWithWhereWithoutReporterInput_1.RequestUpdateManyWithWhereWithoutReporterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarWhereInput_1.RequestScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdateManyWithoutReporterInput.prototype, "deleteMany", void 0);
RequestUpdateManyWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateManyWithoutReporterInput", {
        isAbstract: true
    })
], RequestUpdateManyWithoutReporterInput);
exports.RequestUpdateManyWithoutReporterInput = RequestUpdateManyWithoutReporterInput;

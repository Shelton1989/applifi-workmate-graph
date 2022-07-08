"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpsertWithWhereUniqueWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateWithoutReporterInput_1 = require("../inputs/RequestCreateWithoutReporterInput");
const RequestUpdateWithoutReporterInput_1 = require("../inputs/RequestUpdateWithoutReporterInput");
const RequestWhereUniqueInput_1 = require("../inputs/RequestWhereUniqueInput");
let RequestUpsertWithWhereUniqueWithoutReporterInput = class RequestUpsertWithWhereUniqueWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], RequestUpsertWithWhereUniqueWithoutReporterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateWithoutReporterInput_1.RequestUpdateWithoutReporterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateWithoutReporterInput_1.RequestUpdateWithoutReporterInput)
], RequestUpsertWithWhereUniqueWithoutReporterInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput)
], RequestUpsertWithWhereUniqueWithoutReporterInput.prototype, "create", void 0);
RequestUpsertWithWhereUniqueWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpsertWithWhereUniqueWithoutReporterInput", {
        isAbstract: true
    })
], RequestUpsertWithWhereUniqueWithoutReporterInput);
exports.RequestUpsertWithWhereUniqueWithoutReporterInput = RequestUpsertWithWhereUniqueWithoutReporterInput;

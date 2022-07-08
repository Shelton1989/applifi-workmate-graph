"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCreateOrConnectWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateWithoutReporterInput_1 = require("../inputs/RequestCreateWithoutReporterInput");
const RequestWhereUniqueInput_1 = require("../inputs/RequestWhereUniqueInput");
let RequestCreateOrConnectWithoutReporterInput = class RequestCreateOrConnectWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], RequestCreateOrConnectWithoutReporterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestCreateWithoutReporterInput_1.RequestCreateWithoutReporterInput)
], RequestCreateOrConnectWithoutReporterInput.prototype, "create", void 0);
RequestCreateOrConnectWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestCreateOrConnectWithoutReporterInput", {
        isAbstract: true
    })
], RequestCreateOrConnectWithoutReporterInput);
exports.RequestCreateOrConnectWithoutReporterInput = RequestCreateOrConnectWithoutReporterInput;

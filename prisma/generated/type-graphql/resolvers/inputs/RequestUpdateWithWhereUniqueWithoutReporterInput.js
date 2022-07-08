"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateWithWhereUniqueWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestUpdateWithoutReporterInput_1 = require("../inputs/RequestUpdateWithoutReporterInput");
const RequestWhereUniqueInput_1 = require("../inputs/RequestWhereUniqueInput");
let RequestUpdateWithWhereUniqueWithoutReporterInput = class RequestUpdateWithWhereUniqueWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], RequestUpdateWithWhereUniqueWithoutReporterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateWithoutReporterInput_1.RequestUpdateWithoutReporterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateWithoutReporterInput_1.RequestUpdateWithoutReporterInput)
], RequestUpdateWithWhereUniqueWithoutReporterInput.prototype, "data", void 0);
RequestUpdateWithWhereUniqueWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateWithWhereUniqueWithoutReporterInput", {
        isAbstract: true
    })
], RequestUpdateWithWhereUniqueWithoutReporterInput);
exports.RequestUpdateWithWhereUniqueWithoutReporterInput = RequestUpdateWithWhereUniqueWithoutReporterInput;

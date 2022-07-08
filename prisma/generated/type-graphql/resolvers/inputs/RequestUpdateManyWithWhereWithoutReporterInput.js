"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateManyWithWhereWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestScalarWhereInput_1 = require("../inputs/RequestScalarWhereInput");
const RequestUpdateManyMutationInput_1 = require("../inputs/RequestUpdateManyMutationInput");
let RequestUpdateManyWithWhereWithoutReporterInput = class RequestUpdateManyWithWhereWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestScalarWhereInput_1.RequestScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestScalarWhereInput_1.RequestScalarWhereInput)
], RequestUpdateManyWithWhereWithoutReporterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyMutationInput_1.RequestUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyMutationInput_1.RequestUpdateManyMutationInput)
], RequestUpdateManyWithWhereWithoutReporterInput.prototype, "data", void 0);
RequestUpdateManyWithWhereWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateManyWithWhereWithoutReporterInput", {
        isAbstract: true
    })
], RequestUpdateManyWithWhereWithoutReporterInput);
exports.RequestUpdateManyWithWhereWithoutReporterInput = RequestUpdateManyWithWhereWithoutReporterInput;

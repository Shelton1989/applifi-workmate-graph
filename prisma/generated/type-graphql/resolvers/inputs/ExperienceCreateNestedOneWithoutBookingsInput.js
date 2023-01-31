"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutBookingsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutBookingsInput");
const ExperienceCreateWithoutBookingsInput_1 = require("../inputs/ExperienceCreateWithoutBookingsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutBookingsInput = class ExperienceCreateNestedOneWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput)
], ExperienceCreateNestedOneWithoutBookingsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutBookingsInput_1.ExperienceCreateOrConnectWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutBookingsInput_1.ExperienceCreateOrConnectWithoutBookingsInput)
], ExperienceCreateNestedOneWithoutBookingsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutBookingsInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutBookingsInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutBookingsInput);
exports.ExperienceCreateNestedOneWithoutBookingsInput = ExperienceCreateNestedOneWithoutBookingsInput;

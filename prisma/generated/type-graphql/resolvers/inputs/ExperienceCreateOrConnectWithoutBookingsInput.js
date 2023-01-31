"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutBookingsInput_1 = require("../inputs/ExperienceCreateWithoutBookingsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutBookingsInput = class ExperienceCreateOrConnectWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutBookingsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput)
], ExperienceCreateOrConnectWithoutBookingsInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutBookingsInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutBookingsInput);
exports.ExperienceCreateOrConnectWithoutBookingsInput = ExperienceCreateOrConnectWithoutBookingsInput;

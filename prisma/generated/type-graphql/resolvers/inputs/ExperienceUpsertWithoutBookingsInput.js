"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutBookingsInput_1 = require("../inputs/ExperienceCreateWithoutBookingsInput");
const ExperienceUpdateWithoutBookingsInput_1 = require("../inputs/ExperienceUpdateWithoutBookingsInput");
let ExperienceUpsertWithoutBookingsInput = class ExperienceUpsertWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutBookingsInput_1.ExperienceUpdateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutBookingsInput_1.ExperienceUpdateWithoutBookingsInput)
], ExperienceUpsertWithoutBookingsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutBookingsInput_1.ExperienceCreateWithoutBookingsInput)
], ExperienceUpsertWithoutBookingsInput.prototype, "create", void 0);
ExperienceUpsertWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutBookingsInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutBookingsInput);
exports.ExperienceUpsertWithoutBookingsInput = ExperienceUpsertWithoutBookingsInput;

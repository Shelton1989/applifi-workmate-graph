"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutReactionsInput_1 = require("../inputs/ExperienceCreateWithoutReactionsInput");
const ExperienceUpdateWithoutReactionsInput_1 = require("../inputs/ExperienceUpdateWithoutReactionsInput");
let ExperienceUpsertWithoutReactionsInput = class ExperienceUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutReactionsInput_1.ExperienceUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutReactionsInput_1.ExperienceUpdateWithoutReactionsInput)
], ExperienceUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput)
], ExperienceUpsertWithoutReactionsInput.prototype, "create", void 0);
ExperienceUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutReactionsInput);
exports.ExperienceUpsertWithoutReactionsInput = ExperienceUpsertWithoutReactionsInput;

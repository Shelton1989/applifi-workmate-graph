"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutPriceInput_1 = require("../inputs/ExperienceCreateWithoutPriceInput");
const ExperienceUpdateWithoutPriceInput_1 = require("../inputs/ExperienceUpdateWithoutPriceInput");
let ExperienceUpsertWithoutPriceInput = class ExperienceUpsertWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutPriceInput_1.ExperienceUpdateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutPriceInput_1.ExperienceUpdateWithoutPriceInput)
], ExperienceUpsertWithoutPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutPriceInput_1.ExperienceCreateWithoutPriceInput)
], ExperienceUpsertWithoutPriceInput.prototype, "create", void 0);
ExperienceUpsertWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutPriceInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutPriceInput);
exports.ExperienceUpsertWithoutPriceInput = ExperienceUpsertWithoutPriceInput;

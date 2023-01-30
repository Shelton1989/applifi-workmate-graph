"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceUpdateWithoutExperienceInput_1 = require("../inputs/PriceUpdateWithoutExperienceInput");
let PriceUpsertWithoutExperienceInput = class PriceUpsertWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput)
], PriceUpsertWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput)
], PriceUpsertWithoutExperienceInput.prototype, "create", void 0);
PriceUpsertWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpsertWithoutExperienceInput);
exports.PriceUpsertWithoutExperienceInput = PriceUpsertWithoutExperienceInput;

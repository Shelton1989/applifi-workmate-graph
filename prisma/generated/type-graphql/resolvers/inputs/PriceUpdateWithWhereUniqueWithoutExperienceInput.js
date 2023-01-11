"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceUpdateWithoutExperienceInput_1 = require("../inputs/PriceUpdateWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateWithWhereUniqueWithoutExperienceInput = class PriceUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput)
], PriceUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
PriceUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpdateWithWhereUniqueWithoutExperienceInput);
exports.PriceUpdateWithWhereUniqueWithoutExperienceInput = PriceUpdateWithWhereUniqueWithoutExperienceInput;

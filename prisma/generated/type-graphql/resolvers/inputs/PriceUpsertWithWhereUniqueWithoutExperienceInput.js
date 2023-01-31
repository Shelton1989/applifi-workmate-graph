"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutExperienceInput_1 = require("../inputs/PriceCreateWithoutExperienceInput");
const PriceUpdateWithoutExperienceInput_1 = require("../inputs/PriceUpdateWithoutExperienceInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpsertWithWhereUniqueWithoutExperienceInput = class PriceUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutExperienceInput_1.PriceUpdateWithoutExperienceInput)
], PriceUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutExperienceInput_1.PriceCreateWithoutExperienceInput)
], PriceUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
PriceUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], PriceUpsertWithWhereUniqueWithoutExperienceInput);
exports.PriceUpsertWithWhereUniqueWithoutExperienceInput = PriceUpsertWithWhereUniqueWithoutExperienceInput;

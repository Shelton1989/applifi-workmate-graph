"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpsertWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateWithoutMealInput_1 = require("../inputs/FeaturesCreateWithoutMealInput");
const FeaturesUpdateWithoutMealInput_1 = require("../inputs/FeaturesUpdateWithoutMealInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpsertWithWhereUniqueWithoutMealInput = class FeaturesUpsertWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesUpsertWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateWithoutMealInput_1.FeaturesUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateWithoutMealInput_1.FeaturesUpdateWithoutMealInput)
], FeaturesUpsertWithWhereUniqueWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput)
], FeaturesUpsertWithWhereUniqueWithoutMealInput.prototype, "create", void 0);
FeaturesUpsertWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpsertWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], FeaturesUpsertWithWhereUniqueWithoutMealInput);
exports.FeaturesUpsertWithWhereUniqueWithoutMealInput = FeaturesUpsertWithWhereUniqueWithoutMealInput;

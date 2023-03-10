"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesUpdateWithoutMealInput_1 = require("../inputs/FeaturesUpdateWithoutMealInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpdateWithWhereUniqueWithoutMealInput = class FeaturesUpdateWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesUpdateWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateWithoutMealInput_1.FeaturesUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateWithoutMealInput_1.FeaturesUpdateWithoutMealInput)
], FeaturesUpdateWithWhereUniqueWithoutMealInput.prototype, "data", void 0);
FeaturesUpdateWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], FeaturesUpdateWithWhereUniqueWithoutMealInput);
exports.FeaturesUpdateWithWhereUniqueWithoutMealInput = FeaturesUpdateWithWhereUniqueWithoutMealInput;

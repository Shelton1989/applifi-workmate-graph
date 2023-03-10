"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateManyWithWhereWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesScalarWhereInput_1 = require("../inputs/FeaturesScalarWhereInput");
const FeaturesUpdateManyMutationInput_1 = require("../inputs/FeaturesUpdateManyMutationInput");
let FeaturesUpdateManyWithWhereWithoutMealInput = class FeaturesUpdateManyWithWhereWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesScalarWhereInput_1.FeaturesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesScalarWhereInput_1.FeaturesScalarWhereInput)
], FeaturesUpdateManyWithWhereWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyMutationInput_1.FeaturesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyMutationInput_1.FeaturesUpdateManyMutationInput)
], FeaturesUpdateManyWithWhereWithoutMealInput.prototype, "data", void 0);
FeaturesUpdateManyWithWhereWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateManyWithWhereWithoutMealInput", {
        isAbstract: true
    })
], FeaturesUpdateManyWithWhereWithoutMealInput);
exports.FeaturesUpdateManyWithWhereWithoutMealInput = FeaturesUpdateManyWithWhereWithoutMealInput;

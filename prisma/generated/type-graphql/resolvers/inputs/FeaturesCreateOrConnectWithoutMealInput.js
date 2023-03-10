"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateWithoutMealInput_1 = require("../inputs/FeaturesCreateWithoutMealInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesCreateOrConnectWithoutMealInput = class FeaturesCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateWithoutMealInput_1.FeaturesCreateWithoutMealInput)
], FeaturesCreateOrConnectWithoutMealInput.prototype, "create", void 0);
FeaturesCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], FeaturesCreateOrConnectWithoutMealInput);
exports.FeaturesCreateOrConnectWithoutMealInput = FeaturesCreateOrConnectWithoutMealInput;

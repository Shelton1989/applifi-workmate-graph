"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateNestedManyWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateManyMealItemInputEnvelope_1 = require("../inputs/MealItemOptionCreateManyMealItemInputEnvelope");
const MealItemOptionCreateOrConnectWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateOrConnectWithoutMealItemInput");
const MealItemOptionCreateWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateWithoutMealItemInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionCreateNestedManyWithoutMealItemInput = class MealItemOptionCreateNestedManyWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionCreateNestedManyWithoutMealItemInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateOrConnectWithoutMealItemInput_1.MealItemOptionCreateOrConnectWithoutMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionCreateNestedManyWithoutMealItemInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateManyMealItemInputEnvelope_1.MealItemOptionCreateManyMealItemInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateManyMealItemInputEnvelope_1.MealItemOptionCreateManyMealItemInputEnvelope)
], MealItemOptionCreateNestedManyWithoutMealItemInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionCreateNestedManyWithoutMealItemInput.prototype, "connect", void 0);
MealItemOptionCreateNestedManyWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateNestedManyWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionCreateNestedManyWithoutMealItemInput);
exports.MealItemOptionCreateNestedManyWithoutMealItemInput = MealItemOptionCreateNestedManyWithoutMealItemInput;

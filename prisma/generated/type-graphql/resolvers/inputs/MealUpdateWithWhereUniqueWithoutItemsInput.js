"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithWhereUniqueWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealUpdateWithoutItemsInput_1 = require("../inputs/MealUpdateWithoutItemsInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateWithWhereUniqueWithoutItemsInput = class MealUpdateWithWhereUniqueWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateWithWhereUniqueWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutItemsInput_1.MealUpdateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutItemsInput_1.MealUpdateWithoutItemsInput)
], MealUpdateWithWhereUniqueWithoutItemsInput.prototype, "data", void 0);
MealUpdateWithWhereUniqueWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithWhereUniqueWithoutItemsInput", {
        isAbstract: true
    })
], MealUpdateWithWhereUniqueWithoutItemsInput);
exports.MealUpdateWithWhereUniqueWithoutItemsInput = MealUpdateWithWhereUniqueWithoutItemsInput;

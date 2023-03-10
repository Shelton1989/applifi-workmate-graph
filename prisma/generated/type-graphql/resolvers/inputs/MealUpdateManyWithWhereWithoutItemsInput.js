"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithWhereWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyMutationInput_1 = require("../inputs/MealUpdateManyMutationInput");
let MealUpdateManyWithWhereWithoutItemsInput = class MealUpdateManyWithWhereWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealScalarWhereInput_1.MealScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealScalarWhereInput_1.MealScalarWhereInput)
], MealUpdateManyWithWhereWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyMutationInput_1.MealUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateManyMutationInput_1.MealUpdateManyMutationInput)
], MealUpdateManyWithWhereWithoutItemsInput.prototype, "data", void 0);
MealUpdateManyWithWhereWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithWhereWithoutItemsInput", {
        isAbstract: true
    })
], MealUpdateManyWithWhereWithoutItemsInput);
exports.MealUpdateManyWithWhereWithoutItemsInput = MealUpdateManyWithWhereWithoutItemsInput;

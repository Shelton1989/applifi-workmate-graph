"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithWhereWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyMutationInput_1 = require("../inputs/MealUpdateManyMutationInput");
let MealUpdateManyWithWhereWithoutLikedByInput = class MealUpdateManyWithWhereWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealScalarWhereInput_1.MealScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealScalarWhereInput_1.MealScalarWhereInput)
], MealUpdateManyWithWhereWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyMutationInput_1.MealUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateManyMutationInput_1.MealUpdateManyMutationInput)
], MealUpdateManyWithWhereWithoutLikedByInput.prototype, "data", void 0);
MealUpdateManyWithWhereWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithWhereWithoutLikedByInput", {
        isAbstract: true
    })
], MealUpdateManyWithWhereWithoutLikedByInput);
exports.MealUpdateManyWithWhereWithoutLikedByInput = MealUpdateManyWithWhereWithoutLikedByInput;

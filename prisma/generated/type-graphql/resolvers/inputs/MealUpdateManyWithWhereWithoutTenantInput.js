"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyMutationInput_1 = require("../inputs/MealUpdateManyMutationInput");
let MealUpdateManyWithWhereWithoutTenantInput = class MealUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealScalarWhereInput_1.MealScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealScalarWhereInput_1.MealScalarWhereInput)
], MealUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyMutationInput_1.MealUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateManyMutationInput_1.MealUpdateManyMutationInput)
], MealUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
MealUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], MealUpdateManyWithWhereWithoutTenantInput);
exports.MealUpdateManyWithWhereWithoutTenantInput = MealUpdateManyWithWhereWithoutTenantInput;

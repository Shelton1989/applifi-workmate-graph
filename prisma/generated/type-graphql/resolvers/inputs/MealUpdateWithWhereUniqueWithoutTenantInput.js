"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealUpdateWithoutTenantInput_1 = require("../inputs/MealUpdateWithoutTenantInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateWithWhereUniqueWithoutTenantInput = class MealUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutTenantInput_1.MealUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutTenantInput_1.MealUpdateWithoutTenantInput)
], MealUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
MealUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], MealUpdateWithWhereUniqueWithoutTenantInput);
exports.MealUpdateWithWhereUniqueWithoutTenantInput = MealUpdateWithWhereUniqueWithoutTenantInput;

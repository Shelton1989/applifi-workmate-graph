"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutMealsInput_1 = require("../inputs/TenantCreateWithoutMealsInput");
const TenantUpdateWithoutMealsInput_1 = require("../inputs/TenantUpdateWithoutMealsInput");
let TenantUpsertWithoutMealsInput = class TenantUpsertWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutMealsInput_1.TenantUpdateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutMealsInput_1.TenantUpdateWithoutMealsInput)
], TenantUpsertWithoutMealsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutMealsInput_1.TenantCreateWithoutMealsInput)
], TenantUpsertWithoutMealsInput.prototype, "create", void 0);
TenantUpsertWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutMealsInput", {
        isAbstract: true
    })
], TenantUpsertWithoutMealsInput);
exports.TenantUpsertWithoutMealsInput = TenantUpsertWithoutMealsInput;

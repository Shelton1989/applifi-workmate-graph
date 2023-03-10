"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutTenantInput_1 = require("../inputs/MealCreateWithoutTenantInput");
const MealUpdateWithoutTenantInput_1 = require("../inputs/MealUpdateWithoutTenantInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpsertWithWhereUniqueWithoutTenantInput = class MealUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutTenantInput_1.MealUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutTenantInput_1.MealUpdateWithoutTenantInput)
], MealUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput)
], MealUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
MealUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], MealUpsertWithWhereUniqueWithoutTenantInput);
exports.MealUpsertWithWhereUniqueWithoutTenantInput = MealUpsertWithWhereUniqueWithoutTenantInput;

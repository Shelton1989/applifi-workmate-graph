"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutTenantInput_1 = require("../inputs/MealCreateWithoutTenantInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateOrConnectWithoutTenantInput = class MealCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], MealCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput)
], MealCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
MealCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], MealCreateOrConnectWithoutTenantInput);
exports.MealCreateOrConnectWithoutTenantInput = MealCreateOrConnectWithoutTenantInput;

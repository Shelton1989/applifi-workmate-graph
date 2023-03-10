"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateManyTenantInputEnvelope_1 = require("../inputs/MealCreateManyTenantInputEnvelope");
const MealCreateOrConnectWithoutTenantInput_1 = require("../inputs/MealCreateOrConnectWithoutTenantInput");
const MealCreateWithoutTenantInput_1 = require("../inputs/MealCreateWithoutTenantInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealCreateNestedManyWithoutTenantInput = class MealCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutTenantInput_1.MealCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateManyTenantInputEnvelope_1.MealCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateManyTenantInputEnvelope_1.MealCreateManyTenantInputEnvelope)
], MealCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
MealCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], MealCreateNestedManyWithoutTenantInput);
exports.MealCreateNestedManyWithoutTenantInput = MealCreateNestedManyWithoutTenantInput;

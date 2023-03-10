"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateManyTenantInputEnvelope_1 = require("../inputs/MealCreateManyTenantInputEnvelope");
const MealCreateOrConnectWithoutTenantInput_1 = require("../inputs/MealCreateOrConnectWithoutTenantInput");
const MealCreateWithoutTenantInput_1 = require("../inputs/MealCreateWithoutTenantInput");
const MealScalarWhereInput_1 = require("../inputs/MealScalarWhereInput");
const MealUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/MealUpdateManyWithWhereWithoutTenantInput");
const MealUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/MealUpdateWithWhereUniqueWithoutTenantInput");
const MealUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/MealUpsertWithWhereUniqueWithoutTenantInput");
const MealWhereUniqueInput_1 = require("../inputs/MealWhereUniqueInput");
let MealUpdateManyWithoutTenantInput = class MealUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateWithoutTenantInput_1.MealCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateOrConnectWithoutTenantInput_1.MealCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpsertWithWhereUniqueWithoutTenantInput_1.MealUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateManyTenantInputEnvelope_1.MealCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateManyTenantInputEnvelope_1.MealCreateManyTenantInputEnvelope)
], MealUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereUniqueInput_1.MealWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateWithWhereUniqueWithoutTenantInput_1.MealUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealUpdateManyWithWhereWithoutTenantInput_1.MealUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1.MealScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
MealUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], MealUpdateManyWithoutTenantInput);
exports.MealUpdateManyWithoutTenantInput = MealUpdateManyWithoutTenantInput;

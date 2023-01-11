"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyTenantInputEnvelope_1 = require("../inputs/LocationCreateManyTenantInputEnvelope");
const LocationCreateOrConnectWithoutTenantInput_1 = require("../inputs/LocationCreateOrConnectWithoutTenantInput");
const LocationCreateWithoutTenantInput_1 = require("../inputs/LocationCreateWithoutTenantInput");
const LocationScalarWhereInput_1 = require("../inputs/LocationScalarWhereInput");
const LocationUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/LocationUpdateManyWithWhereWithoutTenantInput");
const LocationUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/LocationUpdateWithWhereUniqueWithoutTenantInput");
const LocationUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/LocationUpsertWithWhereUniqueWithoutTenantInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateManyWithoutTenantInput = class LocationUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutTenantInput_1.LocationCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutTenantInput_1.LocationUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyTenantInputEnvelope_1.LocationCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyTenantInputEnvelope_1.LocationCreateManyTenantInputEnvelope)
], LocationUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutTenantInput_1.LocationUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutTenantInput_1.LocationUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationScalarWhereInput_1.LocationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
LocationUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], LocationUpdateManyWithoutTenantInput);
exports.LocationUpdateManyWithoutTenantInput = LocationUpdateManyWithoutTenantInput;

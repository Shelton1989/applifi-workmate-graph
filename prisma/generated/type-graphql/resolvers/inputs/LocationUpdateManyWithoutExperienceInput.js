"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyExperienceInputEnvelope_1 = require("../inputs/LocationCreateManyExperienceInputEnvelope");
const LocationCreateOrConnectWithoutExperienceInput_1 = require("../inputs/LocationCreateOrConnectWithoutExperienceInput");
const LocationCreateWithoutExperienceInput_1 = require("../inputs/LocationCreateWithoutExperienceInput");
const LocationScalarWhereInput_1 = require("../inputs/LocationScalarWhereInput");
const LocationUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/LocationUpdateManyWithWhereWithoutExperienceInput");
const LocationUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/LocationUpdateWithWhereUniqueWithoutExperienceInput");
const LocationUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/LocationUpsertWithWhereUniqueWithoutExperienceInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateManyWithoutExperienceInput = class LocationUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutExperienceInput_1.LocationCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutExperienceInput_1.LocationUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyExperienceInputEnvelope_1.LocationCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyExperienceInputEnvelope_1.LocationCreateManyExperienceInputEnvelope)
], LocationUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutExperienceInput_1.LocationUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutExperienceInput_1.LocationUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationScalarWhereInput_1.LocationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
LocationUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], LocationUpdateManyWithoutExperienceInput);
exports.LocationUpdateManyWithoutExperienceInput = LocationUpdateManyWithoutExperienceInput;

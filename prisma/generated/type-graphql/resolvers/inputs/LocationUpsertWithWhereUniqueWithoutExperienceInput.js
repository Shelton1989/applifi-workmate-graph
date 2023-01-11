"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutExperienceInput_1 = require("../inputs/LocationCreateWithoutExperienceInput");
const LocationUpdateWithoutExperienceInput_1 = require("../inputs/LocationUpdateWithoutExperienceInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpsertWithWhereUniqueWithoutExperienceInput = class LocationUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutExperienceInput_1.LocationUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutExperienceInput_1.LocationUpdateWithoutExperienceInput)
], LocationUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput)
], LocationUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
LocationUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], LocationUpsertWithWhereUniqueWithoutExperienceInput);
exports.LocationUpsertWithWhereUniqueWithoutExperienceInput = LocationUpsertWithWhereUniqueWithoutExperienceInput;

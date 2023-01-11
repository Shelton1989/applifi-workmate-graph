"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationUpdateWithoutExperienceInput_1 = require("../inputs/LocationUpdateWithoutExperienceInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateWithWhereUniqueWithoutExperienceInput = class LocationUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutExperienceInput_1.LocationUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutExperienceInput_1.LocationUpdateWithoutExperienceInput)
], LocationUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
LocationUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], LocationUpdateWithWhereUniqueWithoutExperienceInput);
exports.LocationUpdateWithWhereUniqueWithoutExperienceInput = LocationUpdateWithWhereUniqueWithoutExperienceInput;

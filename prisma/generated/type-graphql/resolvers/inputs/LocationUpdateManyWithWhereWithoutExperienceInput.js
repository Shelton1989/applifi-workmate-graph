"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyWithWhereWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationScalarWhereInput_1 = require("../inputs/LocationScalarWhereInput");
const LocationUpdateManyMutationInput_1 = require("../inputs/LocationUpdateManyMutationInput");
let LocationUpdateManyWithWhereWithoutExperienceInput = class LocationUpdateManyWithWhereWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationScalarWhereInput_1.LocationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationScalarWhereInput_1.LocationScalarWhereInput)
], LocationUpdateManyWithWhereWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput)
], LocationUpdateManyWithWhereWithoutExperienceInput.prototype, "data", void 0);
LocationUpdateManyWithWhereWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateManyWithWhereWithoutExperienceInput", {
        isAbstract: true
    })
], LocationUpdateManyWithWhereWithoutExperienceInput);
exports.LocationUpdateManyWithWhereWithoutExperienceInput = LocationUpdateManyWithWhereWithoutExperienceInput;

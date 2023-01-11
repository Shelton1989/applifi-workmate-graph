"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutExperienceInput_1 = require("../inputs/LocationCreateWithoutExperienceInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutExperienceInput = class LocationCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput)
], LocationCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutExperienceInput);
exports.LocationCreateOrConnectWithoutExperienceInput = LocationCreateOrConnectWithoutExperienceInput;

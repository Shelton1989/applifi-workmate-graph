"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyExperienceInputEnvelope_1 = require("../inputs/LocationCreateManyExperienceInputEnvelope");
const LocationCreateOrConnectWithoutExperienceInput_1 = require("../inputs/LocationCreateOrConnectWithoutExperienceInput");
const LocationCreateWithoutExperienceInput_1 = require("../inputs/LocationCreateWithoutExperienceInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedManyWithoutExperienceInput = class LocationCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutExperienceInput_1.LocationCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutExperienceInput_1.LocationCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyExperienceInputEnvelope_1.LocationCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyExperienceInputEnvelope_1.LocationCreateManyExperienceInputEnvelope)
], LocationCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
LocationCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], LocationCreateNestedManyWithoutExperienceInput);
exports.LocationCreateNestedManyWithoutExperienceInput = LocationCreateNestedManyWithoutExperienceInput;

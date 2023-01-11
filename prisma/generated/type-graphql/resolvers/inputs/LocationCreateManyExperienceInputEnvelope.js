"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyExperienceInput_1 = require("../inputs/LocationCreateManyExperienceInput");
let LocationCreateManyExperienceInputEnvelope = class LocationCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateManyExperienceInput_1.LocationCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateManyExperienceInputEnvelope.prototype, "data", void 0);
LocationCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], LocationCreateManyExperienceInputEnvelope);
exports.LocationCreateManyExperienceInputEnvelope = LocationCreateManyExperienceInputEnvelope;

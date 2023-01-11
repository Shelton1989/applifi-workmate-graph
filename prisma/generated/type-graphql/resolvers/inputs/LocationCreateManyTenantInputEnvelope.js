"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyTenantInput_1 = require("../inputs/LocationCreateManyTenantInput");
let LocationCreateManyTenantInputEnvelope = class LocationCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateManyTenantInput_1.LocationCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateManyTenantInputEnvelope.prototype, "data", void 0);
LocationCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], LocationCreateManyTenantInputEnvelope);
exports.LocationCreateManyTenantInputEnvelope = LocationCreateManyTenantInputEnvelope;

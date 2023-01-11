"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationUpdateWithoutTenantInput_1 = require("../inputs/LocationUpdateWithoutTenantInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateWithWhereUniqueWithoutTenantInput = class LocationUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutTenantInput_1.LocationUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutTenantInput_1.LocationUpdateWithoutTenantInput)
], LocationUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
LocationUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], LocationUpdateWithWhereUniqueWithoutTenantInput);
exports.LocationUpdateWithWhereUniqueWithoutTenantInput = LocationUpdateWithWhereUniqueWithoutTenantInput;

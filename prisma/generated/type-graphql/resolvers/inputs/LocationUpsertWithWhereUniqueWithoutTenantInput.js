"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutTenantInput_1 = require("../inputs/LocationCreateWithoutTenantInput");
const LocationUpdateWithoutTenantInput_1 = require("../inputs/LocationUpdateWithoutTenantInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpsertWithWhereUniqueWithoutTenantInput = class LocationUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutTenantInput_1.LocationUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutTenantInput_1.LocationUpdateWithoutTenantInput)
], LocationUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput)
], LocationUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
LocationUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], LocationUpsertWithWhereUniqueWithoutTenantInput);
exports.LocationUpsertWithWhereUniqueWithoutTenantInput = LocationUpsertWithWhereUniqueWithoutTenantInput;

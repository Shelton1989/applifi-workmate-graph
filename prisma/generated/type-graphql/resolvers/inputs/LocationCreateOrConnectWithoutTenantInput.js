"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutTenantInput_1 = require("../inputs/LocationCreateWithoutTenantInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutTenantInput = class LocationCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput)
], LocationCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutTenantInput);
exports.LocationCreateOrConnectWithoutTenantInput = LocationCreateOrConnectWithoutTenantInput;

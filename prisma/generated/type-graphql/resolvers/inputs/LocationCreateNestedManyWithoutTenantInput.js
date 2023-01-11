"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyTenantInputEnvelope_1 = require("../inputs/LocationCreateManyTenantInputEnvelope");
const LocationCreateOrConnectWithoutTenantInput_1 = require("../inputs/LocationCreateOrConnectWithoutTenantInput");
const LocationCreateWithoutTenantInput_1 = require("../inputs/LocationCreateWithoutTenantInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedManyWithoutTenantInput = class LocationCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutTenantInput_1.LocationCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutTenantInput_1.LocationCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyTenantInputEnvelope_1.LocationCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyTenantInputEnvelope_1.LocationCreateManyTenantInputEnvelope)
], LocationCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
LocationCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], LocationCreateNestedManyWithoutTenantInput);
exports.LocationCreateNestedManyWithoutTenantInput = LocationCreateNestedManyWithoutTenantInput;

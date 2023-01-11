"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutLocationsInput_1 = require("../inputs/TenantCreateWithoutLocationsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutLocationsInput = class TenantCreateOrConnectWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutLocationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput)
], TenantCreateOrConnectWithoutLocationsInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutLocationsInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutLocationsInput);
exports.TenantCreateOrConnectWithoutLocationsInput = TenantCreateOrConnectWithoutLocationsInput;

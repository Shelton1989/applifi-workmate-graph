"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutLocationsInput_1 = require("../inputs/TenantCreateOrConnectWithoutLocationsInput");
const TenantCreateWithoutLocationsInput_1 = require("../inputs/TenantCreateWithoutLocationsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutLocationsInput = class TenantCreateNestedOneWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput)
], TenantCreateNestedOneWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutLocationsInput_1.TenantCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutLocationsInput_1.TenantCreateOrConnectWithoutLocationsInput)
], TenantCreateNestedOneWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutLocationsInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutLocationsInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutLocationsInput);
exports.TenantCreateNestedOneWithoutLocationsInput = TenantCreateNestedOneWithoutLocationsInput;

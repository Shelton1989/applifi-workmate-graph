"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTenantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateInput_1 = require("../../../inputs/TenantCreateInput");
const TenantUpdateInput_1 = require("../../../inputs/TenantUpdateInput");
const TenantWhereUniqueInput_1 = require("../../../inputs/TenantWhereUniqueInput");
let UpsertTenantArgs = class UpsertTenantArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], UpsertTenantArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateInput_1.TenantCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateInput_1.TenantCreateInput)
], UpsertTenantArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateInput_1.TenantUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateInput_1.TenantUpdateInput)
], UpsertTenantArgs.prototype, "update", void 0);
UpsertTenantArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTenantArgs);
exports.UpsertTenantArgs = UpsertTenantArgs;

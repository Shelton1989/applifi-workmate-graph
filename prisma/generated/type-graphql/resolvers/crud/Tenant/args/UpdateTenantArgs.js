"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantUpdateInput_1 = require("../../../inputs/TenantUpdateInput");
const TenantWhereUniqueInput_1 = require("../../../inputs/TenantWhereUniqueInput");
let UpdateTenantArgs = class UpdateTenantArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateInput_1.TenantUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateInput_1.TenantUpdateInput)
], UpdateTenantArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], UpdateTenantArgs.prototype, "where", void 0);
UpdateTenantArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTenantArgs);
exports.UpdateTenantArgs = UpdateTenantArgs;

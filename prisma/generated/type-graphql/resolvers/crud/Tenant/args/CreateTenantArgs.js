"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateInput_1 = require("../../../inputs/TenantCreateInput");
let CreateTenantArgs = class CreateTenantArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateInput_1.TenantCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateInput_1.TenantCreateInput)
], CreateTenantArgs.prototype, "data", void 0);
CreateTenantArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTenantArgs);
exports.CreateTenantArgs = CreateTenantArgs;
